(() => {
  const VISIT_ROUTE = /^\/dashboard\/visits\/([^/]+)\/?$/;
  const SETTINGS_KEY = 'taj_clinic_settings_v1';
  let currentPath = location.pathname;
  let currentPrescription = null;

  const defaults = {
    clinic: { name: 'تاج', logo: '', primary: '#1fb899', accent: '#d6a756', phone: '01014213373', whatsapp: '01014213373', address: 'الإسكندرية، مصر', specialty: 'جلدية وتجميل وليزر' },
    doctor: { name: 'د. زياد محمد', title: 'طبيب جلدية وتجميل وليزر' }
  };
  const readSettings = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || 'null') || {};
      return { clinic: { ...defaults.clinic, ...saved.clinic }, doctor: { ...defaults.doctor, ...saved.doctor } };
    } catch { return defaults; }
  };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const formatDate = value => {
    if (!value) return 'غير محدد';
    try { return new Intl.DateTimeFormat('ar-EG', { dateStyle: 'long' }).format(new Date(value.includes('T') ? value : `${value}T12:00:00`)); } catch { return value; }
  };
  const findField = label => {
    const span = [...document.querySelectorAll('label span')].find(node => (node.textContent || '').trim() === label);
    return span?.closest('label')?.querySelector('textarea,input') || null;
  };
  const patientName = () => {
    const h1 = document.querySelector('main h1') || document.querySelector('h1');
    return (h1?.textContent || '').trim();
  };
  const css = `
    :root{--rx-primary:#1fb899;--rx-accent:#d6a756}
    #clinical-orders-panel{border-color:rgba(31,184,153,.28)!important;background:linear-gradient(145deg,rgba(31,184,153,.08),rgba(255,255,255,.02))!important}
    #clinical-orders-panel .co-count{border-color:rgba(31,184,153,.28)!important;background:rgba(31,184,153,.11)!important;color:#087f67!important}
    #clinical-orders-panel .co-toggle,#clinical-orders-panel .co-primary{background:var(--rx-primary)!important;color:#043b32!important}
    #clinical-orders-panel .co-field input:focus,#clinical-orders-panel .co-field select:focus,#clinical-orders-panel .co-field textarea:focus{border-color:var(--rx-primary)!important}
    #clinical-orders-panel .co-status.requested{background:rgba(214,167,86,.14)!important;color:#946312!important}
    #clinical-orders-panel .co-status.received{background:rgba(31,184,153,.12)!important;color:#087f67!important}
    #clinical-orders-panel .co-status.reviewed{background:rgba(16,185,129,.15)!important;color:#08765f!important}
    #clinical-orders-panel .co-result b,#clinical-orders-panel .co-file-name{color:#087f67!important}
    #arabic-prescription-launcher{border:1px solid rgba(31,184,153,.3);background:rgba(31,184,153,.11);color:#087f67;border-radius:10px;padding:10px 13px;font:800 13px Tajawal,Arial;cursor:pointer;display:inline-flex;align-items:center;gap:7px}#arabic-prescription-launcher:hover{background:rgba(31,184,153,.18)}
    #arabic-prescription-modal{position:fixed;inset:0;z-index:12000;background:rgba(2,12,18,.76);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px;direction:rtl;font-family:Tajawal,Arial,sans-serif;color:#132c33;overflow:auto}
    .rx-dialog{width:min(850px,100%);max-height:94vh;overflow:auto;background:#fdfdfb;border-radius:22px;box-shadow:0 28px 90px rgba(0,0,0,.38)}.rx-toolbar{position:sticky;top:0;z-index:2;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:13px 16px;background:rgba(253,253,251,.96);border-bottom:1px solid #dce8e5;backdrop-filter:blur(10px)}.rx-toolbar-title{font-size:14px;font-weight:800}.rx-actions{display:flex;gap:7px;flex-wrap:wrap}.rx-btn{border:0;border-radius:10px;padding:9px 12px;font:800 12px Tajawal,Arial;cursor:pointer}.rx-btn.primary{background:var(--rx-primary);color:#043b32}.rx-btn.accent{background:var(--rx-accent);color:#3e2b06}.rx-btn.secondary{background:#edf3f1;color:#294149}.rx-btn.close{background:#f3eded;color:#7a3841}
    .rx-paper{width:100%;min-height:760px;background:#fff;padding:40px 46px 34px}.rx-letterhead{display:flex;align-items:center;justify-content:space-between;gap:20px;padding-bottom:20px;border-bottom:3px solid var(--rx-primary)}.rx-brand{display:flex;align-items:center;gap:14px}.rx-logo{width:64px;height:64px;border-radius:16px;object-fit:contain;border:1px solid #dbe8e5;background:#fff}.rx-logo-fallback{width:64px;height:64px;border-radius:16px;display:grid;place-items:center;background:var(--rx-primary);color:#fff;font-size:29px;font-weight:900}.rx-clinic h1{font-size:25px;color:#102e36;margin:0}.rx-clinic p{font-size:12px;color:#63777d;margin:4px 0 0}.rx-doctor{text-align:left}.rx-doctor h2{font-size:17px;margin:0;color:#102e36}.rx-doctor p{font-size:11px;color:#6b7d82;margin:4px 0 0}.rx-meta{display:grid;grid-template-columns:1.4fr .8fr .8fr;gap:12px;margin:22px 0}.rx-meta-box{border:1px solid #dce8e5;border-radius:12px;padding:11px 13px}.rx-label{font-size:10px;color:#778b90}.rx-value{font-size:13px;font-weight:800;margin-top:3px}.rx-section{margin-top:20px}.rx-section-title{font-size:12px;font-weight:900;color:#087f67;margin-bottom:8px;display:flex;align-items:center;gap:8px}.rx-section-title:after{content:"";height:1px;background:#dbe8e5;flex:1}.rx-content{border-radius:13px;background:#f5f9f8;border:1px solid #dfebe8;padding:15px 17px;font-size:14px;line-height:2;white-space:pre-wrap;overflow-wrap:anywhere}.rx-prescription{min-height:180px;font-size:16px;line-height:2.1}.rx-symbol{font-family:Georgia,serif;font-size:25px;font-weight:bold;color:var(--rx-primary)}.rx-footer{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-top:44px;padding-top:18px;border-top:1px solid #dce8e5}.rx-contact{font-size:11px;line-height:1.8;color:#65787d}.rx-signature{min-width:210px;text-align:center}.rx-signature-line{height:42px;border-bottom:1px solid #8da09f}.rx-signature p{font-size:11px;margin:7px 0 0}.rx-disclaimer{text-align:center;font-size:9px;line-height:1.7;color:#8a999d;margin-top:22px}.rx-toast{position:fixed;top:22px;left:50%;transform:translateX(-50%);z-index:13000;background:#dcf7ef;color:#08705c;padding:10px 16px;border-radius:11px;font-weight:800;font-size:12px;box-shadow:0 10px 30px rgba(0,0,0,.2)}
    @media(max-width:650px){#arabic-prescription-modal{padding:7px}.rx-dialog{max-height:98vh;border-radius:14px}.rx-toolbar{align-items:flex-start;flex-direction:column}.rx-actions{width:100%;display:grid;grid-template-columns:1fr 1fr}.rx-paper{padding:25px 18px}.rx-letterhead{align-items:flex-start;flex-direction:column}.rx-doctor{text-align:right}.rx-meta{grid-template-columns:1fr}.rx-footer{flex-direction:column;align-items:stretch}.rx-signature{align-self:flex-end;width:210px}}
    @media print{body>*:not(#arabic-prescription-modal){display:none!important}#arabic-prescription-modal{position:static!important;display:block!important;background:#fff!important;padding:0!important;overflow:visible!important}#arabic-prescription-modal .rx-dialog{width:100%!important;max-height:none!important;overflow:visible!important;border-radius:0!important;box-shadow:none!important}#arabic-prescription-modal .rx-toolbar{display:none!important}#arabic-prescription-modal .rx-paper{min-height:auto!important;padding:18mm 15mm!important}.rx-content{print-color-adjust:exact;-webkit-print-color-adjust:exact}}
  `;

  function ensureStyle() {
    if (document.getElementById('arabic-prescription-style')) return;
    const style = document.createElement('style'); style.id = 'arabic-prescription-style'; style.textContent = css; document.head.appendChild(style);
  }
  function collect() {
    const settings = readSettings();
    const diagnosis = findField('التشخيص')?.value.trim() || '';
    const treatment = findField('الخطة العلاجية المعتمدة')?.value.trim() || '';
    const followUp = findField('موعد المتابعة (اختياري)')?.value || '';
    const visitId = location.pathname.match(VISIT_ROUTE)?.[1] || '';
    return {
      settings, patient: patientName(), diagnosis, treatment, followUp,
      issuedAt: new Date().toISOString(), number: `RX-${visitId.slice(-6).toUpperCase() || Date.now().toString().slice(-6)}`
    };
  }
  function prescriptionText(data) {
    const c = data.settings.clinic, d = data.settings.doctor;
    return [`روشتة طبية — ${c.name}`, `الطبيب: ${d.name} — ${d.title}`, `المريض: ${data.patient}`, `التاريخ: ${formatDate(data.issuedAt)}`, data.diagnosis ? `التشخيص: ${data.diagnosis}` : '', '', 'العلاج وتعليمات الاستخدام:', data.treatment, data.followUp ? `\nموعد المتابعة: ${formatDate(data.followUp)}` : '', '', `${c.phone ? `هاتف: ${c.phone}` : ''}${c.whatsapp ? ` — واتساب: ${c.whatsapp}` : ''}`].filter(value => value !== '').join('\n');
  }
  function paperHtml(data) {
    const c = data.settings.clinic, d = data.settings.doctor;
    const logo = c.logo ? `<img class="rx-logo" src="${esc(c.logo)}" alt="شعار ${esc(c.name)}">` : `<div class="rx-logo-fallback">${esc(c.name.slice(0,1))}</div>`;
    return `<article class="rx-paper"><header class="rx-letterhead"><div class="rx-brand">${logo}<div class="rx-clinic"><h1>${esc(c.name)}</h1><p>${esc(c.specialty)}</p></div></div><div class="rx-doctor"><h2>${esc(d.name)}</h2><p>${esc(d.title)}</p></div></header><section class="rx-meta"><div class="rx-meta-box"><div class="rx-label">اسم المريض</div><div class="rx-value">${esc(data.patient)}</div></div><div class="rx-meta-box"><div class="rx-label">تاريخ الروشتة</div><div class="rx-value">${formatDate(data.issuedAt)}</div></div><div class="rx-meta-box"><div class="rx-label">رقم الروشتة</div><div class="rx-value" dir="ltr">${esc(data.number)}</div></div></section>${data.diagnosis ? `<section class="rx-section"><div class="rx-section-title">التشخيص</div><div class="rx-content">${esc(data.diagnosis)}</div></section>` : ''}<section class="rx-section"><div class="rx-section-title"><span class="rx-symbol">℞</span> العلاج وتعليمات الاستخدام</div><div class="rx-content rx-prescription">${esc(data.treatment)}</div></section>${data.followUp ? `<section class="rx-section"><div class="rx-section-title">موعد المتابعة</div><div class="rx-content">${formatDate(data.followUp)}</div></section>` : ''}<footer class="rx-footer"><div class="rx-contact">${esc(c.address || '')}<br>${c.phone ? `هاتف: ${esc(c.phone)}` : ''}${c.whatsapp ? `<br>واتساب: ${esc(c.whatsapp)}` : ''}</div><div class="rx-signature"><div class="rx-signature-line"></div><p>توقيع وختم الطبيب</p></div></footer><p class="rx-disclaimer">هذه الروشتة صادرة من نظام العيادة، ولا تُعدل أو تُكرر الأدوية إلا بعد مراجعة الطبيب.</p></article>`;
  }
  function toast(message) {
    document.querySelector('.rx-toast')?.remove(); const node = document.createElement('div'); node.className = 'rx-toast'; node.textContent = message; document.body.appendChild(node); setTimeout(() => node.remove(), 2200);
  }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); toast('تم نسخ الروشتة'); }
    catch { const area = document.createElement('textarea'); area.value = text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); toast('تم نسخ الروشتة'); }
  }
  async function share(data) {
    const text = prescriptionText(data);
    if (navigator.share) {
      try { await navigator.share({ title: `روشتة ${data.patient}`, text }); return; } catch (error) { if (error?.name === 'AbortError') return; }
    }
    await copyText(text);
  }
  function openWhatsApp(data) {
    const url = `https://wa.me/?text=${encodeURIComponent(prescriptionText(data))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  function openModal() {
    const data = collect();
    if (!data.patient || !data.treatment) return alert('اكتب الخطة العلاجية أولًا قبل إنشاء الروشتة.');
    currentPrescription = data; ensureStyle();
    document.documentElement.style.setProperty('--rx-primary', data.settings.clinic.primary || defaults.clinic.primary);
    document.documentElement.style.setProperty('--rx-accent', data.settings.clinic.accent || defaults.clinic.accent);
    document.getElementById('arabic-prescription-modal')?.remove();
    const modal = document.createElement('div'); modal.id = 'arabic-prescription-modal';
    modal.innerHTML = `<div class="rx-dialog"><div class="rx-toolbar"><span class="rx-toolbar-title">معاينة الروشتة العربية</span><div class="rx-actions"><button class="rx-btn secondary" data-rx-copy>نسخ النص</button><button class="rx-btn secondary" data-rx-share>مشاركة</button><button class="rx-btn accent" data-rx-whatsapp>إرسال واتساب</button><button class="rx-btn primary" data-rx-print>طباعة / PDF</button><button class="rx-btn close" data-rx-close>إغلاق</button></div></div>${paperHtml(data)}</div>`;
    document.body.appendChild(modal);
    modal.querySelector('[data-rx-close]').onclick = () => modal.remove();
    modal.querySelector('[data-rx-print]').onclick = () => window.print();
    modal.querySelector('[data-rx-copy]').onclick = () => copyText(prescriptionText(currentPrescription));
    modal.querySelector('[data-rx-share]').onclick = () => share(currentPrescription);
    modal.querySelector('[data-rx-whatsapp]').onclick = () => openWhatsApp(currentPrescription);
    modal.onclick = event => { if (event.target === modal) modal.remove(); };
  }
  function mount() {
    ensureStyle();
    if (!VISIT_ROUTE.test(location.pathname)) { document.getElementById('arabic-prescription-launcher')?.remove(); document.getElementById('arabic-prescription-modal')?.remove(); return; }
    if (document.getElementById('arabic-prescription-launcher')) return;
    const treatment = findField('الخطة العلاجية المعتمدة'); if (!treatment) return;
    const buttons = [...document.querySelectorAll('button')];
    const complete = buttons.find(button => /Complete visit|إنهاء الكشف/.test(button.textContent || ''));
    const row = complete?.parentElement; if (!row) return;
    const button = document.createElement('button'); button.type = 'button'; button.id = 'arabic-prescription-launcher'; button.innerHTML = '<span>℞</span><span>معاينة الروشتة</span>'; button.onclick = openModal; row.insertBefore(button, complete);
  }
  ensureStyle();
  window.addEventListener('clinic-settings-updated', () => { const settings = readSettings(); document.documentElement.style.setProperty('--rx-primary', settings.clinic.primary); document.documentElement.style.setProperty('--rx-accent', settings.clinic.accent); });
  const initial = readSettings(); document.documentElement.style.setProperty('--rx-primary', initial.clinic.primary); document.documentElement.style.setProperty('--rx-accent', initial.clinic.accent);
  setInterval(() => { if (location.pathname !== currentPath) { currentPath = location.pathname; document.getElementById('arabic-prescription-launcher')?.remove(); document.getElementById('arabic-prescription-modal')?.remove(); } mount(); }, 650);
})();
