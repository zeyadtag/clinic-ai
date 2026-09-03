const BASE='https://www.dawaagate.com';

function strip(s=''){
  return s.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
}
function num(s=''){
  const m=s.replace(/,/g,'').match(/([0-9]+(?:\.[0-9]+)?)\s*(?:جنيه|ج\.?م)/i);return m?Number(m[1]):null;
}
function uniq(a){const seen=new Set();return a.filter(x=>{const k=x.url;if(seen.has(k))return false;seen.add(k);return true})}
async function get(url){const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 clinic-ai/1.0','accept-language':'ar,en;q=0.8'}});if(!r.ok)throw new Error('HTTP '+r.status);return await r.text()}
function cards(html,q){
  const out=[];const re=/<a[^>]+href="(\/medicine\/[^"]+)"[^>]*>([\s\S]{0,1200}?)<\/a>/gi;let m;
  while((m=re.exec(html))){const text=strip(m[2]);if(!text)continue;const hay=(text+' '+m[1]).toLowerCase();if(q&&!hay.includes(q.toLowerCase()))continue;out.push({url:BASE+m[1],text});}
  if(out.length)return uniq(out);
  const hrefs=[...html.matchAll(/href="(\/medicine\/[^"]+)"/gi)].map(x=>x[1]);
  return uniq(hrefs.map(h=>({url:BASE+h,text:''})));
}
async function detail(url){
  const html=await get(url),txt=strip(html);
  if(!/الأمراض الجلدية|Dermatology/i.test(txt))return null;
  const title=(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1];
  const en=(html.match(/<h1[^>]*>[\s\S]*?<\/h1>[\s\S]*?<[^>]+>\s*([a-z0-9][a-z0-9 .%+\-\/()]+)\s*<\/[^>]+>/i)||[])[1];
  const generic=(txt.match(/(?:يحتوي على|الاسم العلمي\s*\|?)\s*([A-Za-z][A-Za-z0-9 +()\-\/]{2,80})/i)||[])[1];
  const company=(txt.match(/(?:من إنتاج|الشركة المنتجة\s*\|?)\s*([A-Za-z0-9][A-Za-z0-9 .&'\-]{2,80})/i)||[])[1];
  const priceMatch=txt.match(/السعر الحالي(?: للعلبة)?[^0-9]{0,50}([0-9,]+(?:\.[0-9]+)?)\s*جنيه/i)||txt.match(/سعر .*? في مصر[^0-9]{0,30}([0-9,]+(?:\.[0-9]+)?)\s*جنيه/i);
  const updated=(txt.match(/آخر (?:تغيير|تحديث) (?:في )?السعر[:\s]+([^\.]{3,40})/i)||[])[1];
  return {brand_name:strip(title||'')||en||url.split('/').pop().replace(/-/g,' '),generic_name:generic?generic.trim():null,manufacturer:company?company.trim():null,price_egp:priceMatch?Number(priceMatch[1].replace(/,/g,'')):null,price_status:priceMatch?'verified':'unknown',price_source_name:'DawaaGate / EDA',price_source_url:url,official_source_url:url,price_verified_at:new Date().toISOString(),price_source_date:updated?updated.trim():null,availability_status:priceMatch?'available':'unknown',availability_note:'السعر منشور ضمن تصنيف الأمراض الجلدية. التوافر اللحظي يختلف حسب الصيدلية.',dosage_form:null,strength:null,specialty:'dermatology'};
}
module.exports=async function handler(req,res){
  const q=String(req.query.q||'').trim();if(q.length<2)return res.status(200).json({results:[]});
  try{
    const candidates=[
      BASE+'/category/dermatology?search='+encodeURIComponent(q),
      BASE+'/category/dermatology?q='+encodeURIComponent(q),
      BASE+'/medicines?search='+encodeURIComponent(q),
      BASE+'/medicines?q='+encodeURIComponent(q)
    ];
    let links=[];
    for(const u of candidates){try{const h=await get(u);const c=cards(h,q).slice(0,12);if(c.length){links=c;break}}catch{}}
    if(!links.length){const h=await get(BASE+'/category/dermatology');links=cards(h,q).slice(0,12)}
    const rows=[];for(const x of links.slice(0,8)){try{const d=await detail(x.url);if(d)rows.push(d)}catch{}}
    res.setHeader('Cache-Control','public, s-maxage=21600, stale-while-revalidate=86400');
    return res.status(200).json({results:rows,source:'DawaaGate dermatology catalog'});
  }catch(e){return res.status(200).json({results:[],error:'search_unavailable'});}
};
