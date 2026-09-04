(() => {
  const ROUTE = /^\/dashboard\/visits\/[^/]+\/?$/;
  const templates = [
    {
      id: 'acne', name: 'حب الشباب', icon: '◉',
      diagnosis: 'حب شباب التهابي بالوجه — تُحدد الدرجة بعد الفحص',
      assessment: ['تحديد النوع والدرجة والتوزيع', 'توثيق الندبات والتصبغات والصور بعد الموافقة', 'مراجعة الحمل أو التخطيط له والأدوية الحالية'],
      plan: ['روتين تنظيف لطيف وواقي شمس غير كوميدوجيني', 'اختيار العلاج الموضعي حسب الدرجة والتحمل', 'تقييم الحاجة لعلاج جهازي وفحوصاته وفق قرار الطبيب'],
      warning: 'تُراجع موانع الريتينويدات والحمل والتداخلات قبل وصف العلاج.'
    },
    {
      id: 'eczema', name: 'الإكزيما', icon: '◇',
      diagnosis: 'إكزيما / التهاب جلد — النوع والشدة قيد التقييم',
      assessment: ['تحديد المكان والمساحة وشدة الحكة', 'فحص علامات العدوى الثانوية', 'مراجعة المهيجات والتاريخ التحسسي والعلاجات السابقة'],
      plan: ['مرطب خالٍ من العطر وتجنب المهيجات', 'اختيار قوة ومدة العلاج الموضعي حسب المكان والعمر', 'شرح خطة النوبات وخطة المحافظة'],
      warning: 'الوجه والثنيات والأطفال يحتاجون اختيارات أقل قوة ومتابعة أدق.'
    },
    {
      id: 'hair-loss', name: 'تساقط الشعر', icon: '⌁',
      diagnosis: 'تساقط شعر — تحديد النمط والسبب بعد فحص فروة الرأس',
      assessment: ['تحديد المدة والمعدل والنمط واختبار الشد', 'فحص فروة الرأس لاستبعاد الالتهاب أو الندبات', 'مراجعة التغذية والولادة والضغط النفسي والأدوية والتاريخ العائلي'],
      plan: ['علاج السبب المحدد أولًا', 'طلب الفحوصات الموجهة حسب التاريخ والفحص', 'صور معيارية ومتابعة الكثافة بعد موافقة المريض'],
      warning: 'التساقط الندبي أو الالتهاب النشط يستلزم تقييمًا وعلاجًا مبكرًا.'
    },
    {
      id: 'psoriasis', name: 'الصدفية', icon: '▦',
      diagnosis: 'صدفية — تحديد النوع والمساحة والشدة بعد الفحص',
      assessment: ['حساب المساحة والشدة وتأثير الحالة على الحياة', 'السؤال عن ألم أو تيبس أو تورم المفاصل', 'مراجعة الأمراض المصاحبة والعلاجات السابقة'],
      plan: ['اختيار العلاج الموضعي حسب المكان والشدة', 'بحث العلاج الضوئي أو الجهازي عند وجود داعٍ', 'خطة صيانة وتثقيف حول المحفزات'],
      warning: 'الاشتباه في التهاب مفاصل صَدَفي يستدعي تقييمًا مبكرًا.'
    },
    {
      id: 'fungal', name: 'عدوى فطرية', icon: '◌',
      diagnosis: 'اشتباه عدوى فطرية سطحية — يلزم تأكيد المكان والنوع',
      assessment: ['تحديد الحواف والتوزيع والمناطق المصابة', 'مراجعة استعمال الكورتيزون الموضعي سابقًا', 'فحص الأظافر وفروة الرأس والثنيات عند اللزوم'],
      plan: ['تأكيد التشخيص سريريًا أو بالفحص المناسب عند الشك', 'اختيار علاج موضعي أو جهازي حسب المكان والامتداد', 'إرشادات التجفيف وعدم مشاركة الأدوات الشخصية'],
      warning: 'تجنب التركيبات العشوائية المحتوية على كورتيزون قبل تأكيد التشخيص.'
    },
    {
      id: 'vitiligo', name: 'البهاق', icon: '◐',
      diagnosis: 'بقع ناقصة التصبغ — اشتباه بهاق يحتاج تأكيدًا بالفحص',
      assessment: ['تحديد التوزيع ونشاط ظهور البقع', 'الفحص بضوء وود عند الحاجة', 'مراجعة التاريخ العائلي وأعراض المناعة الذاتية'],
      plan: ['توثيق صور معيارية بعد الموافقة', 'اختيار العلاج حسب المكان والنشاط والمساحة', 'تثقيف المريض وواقي شمس وخطة متابعة'],
      warning: 'الفحوصات تُطلب بصورة موجهة حسب التاريخ المرضي والفحص.'
    },
    {
      id: 'rosacea', name: 'الوردية', icon: '✦',
      diagnosis: 'اشتباه وردية بالوجه — تحديد النمط والمحفزات',
      assessment: ['تقييم الاحمرار والحبوب والشعيرات والأعراض العينية', 'مراجعة المحفزات والمنتجات والكورتيزون الموضعي', 'استبعاد التشخيصات المشابهة عند الحاجة'],
      plan: ['روتين لطيف وواقي شمس مناسب', 'تجنب المحفزات المعروفة تدريجيًا', 'اختيار العلاج حسب النمط وشدة الحالة'],
      warning: 'الألم العيني أو اضطراب الرؤية يستدعي تقييم العيون.'
    },
    {
      id: 'urticaria', name: 'الأرتيكاريا', icon: '≈',
      diagnosis: 'أرتيكاريا — تحديد حادة أو مزمنة وتقييم علامات الخطورة',
      assessment: ['تحديد مدة كل طفح ووجود تورم بالشفاه أو الجفون', 'مراجعة الأدوية والعدوى والمحفزات المحتملة', 'فحص علامات التأق أو صعوبة التنفس'],
      plan: ['تجنب المحفز المؤكد فقط وتوثيق النوبات', 'اختيار العلاج وفق الإرشادات والحالة', 'فحوصات موجهة فقط عند وجود مؤشرات'],
      warning: 'صعوبة التنفس أو تورم اللسان/الحلق حالة طارئة.'
    },
    {
      id: 'melasma', name: 'الكلف', icon: '◒',
      diagnosis: 'كلف / فرط تصبغ وجهي — تحديد النمط والعمق',
      assessment: ['تقييم التوزيع والمدة والتعرض للشمس', 'مراجعة الحمل والهرمونات والمنتجات المهيجة', 'توثيق صور موحدة الإضاءة بعد الموافقة'],
      plan: ['واقي شمس واسع الطيف مع حماية من الضوء المرئي', 'خطة تفتيح تدريجية حسب نوع البشرة والتحمل', 'تجنب الالتهاب والإفراط في التقشير'],
      warning: 'تُراجع سلامة المواد أثناء الحمل والرضاعة قبل وصفها.'
    }
  ];

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const onVisit = () => ROUTE.test(location.pathname);
  const css = `
    #visit-template-library{direction:rtl;border:1px solid rgba(31,184,153,.28);border-radius:20px;background:linear-gradient(145deg,rgba(31,184,153,.09),rgba(255,255,255,.02));padding:19px;box-shadow:0 14px 38px rgba(2,6,23,.08)}
    #visit-template-library *{box-sizing:border-box}.vt-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;flex-wrap:wrap}.vt-title{font-size:17px;font-weight:800;margin:0;color:inherit}.vt-sub{font-size:12px;line-height:1.7;opacity:.58;margin:4px 0 0}.vt-badge{font-size:11px;border:1px solid rgba(31,184,153,.25);background:rgba(31,184,153,.1);color:#15977e;border-radius:999px;padding:6px 9px;white-space:nowrap}
    .vt-search{width:100%;margin-top:14px;border:1px solid rgba(148,163,184,.24);background:rgba(255,255,255,.55);color:inherit;border-radius:12px;padding:11px 13px;font:500 13px Tajawal,Arial;outline:none}.vt-search:focus{border-color:#1fb899}.vt-list{display:flex;gap:8px;overflow:auto;padding:12px 1px 5px;scrollbar-width:thin}.vt-chip{flex:0 0 auto;border:1px solid rgba(148,163,184,.22);background:rgba(255,255,255,.64);color:inherit;border-radius:12px;padding:9px 12px;font:700 12px Tajawal,Arial;cursor:pointer}.vt-chip:hover,.vt-chip.active{border-color:#1fb899;background:rgba(31,184,153,.13);color:#087c68}
    .vt-detail{margin-top:13px;border-top:1px solid rgba(148,163,184,.16);padding-top:15px}.vt-detail h4{font-size:15px;margin:0 0 10px}.vt-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px}.vt-box{border-radius:14px;background:rgba(255,255,255,.54);padding:12px}.vt-box b{font-size:11px;color:#168f78}.vt-box ul{padding:0 18px 0 0;margin:7px 0 0}.vt-box li{font-size:12px;line-height:1.7;margin:3px 0}.vt-warning{margin:11px 0 0;border:1px solid rgba(245,158,11,.25);background:rgba(245,158,11,.08);color:#9a5c05;border-radius:12px;padding:10px 12px;font-size:12px;line-height:1.7}.vt-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.vt-apply{border:0;border-radius:11px;background:#1fb899;color:#043b32;padding:10px 14px;font:800 12px Tajawal,Arial;cursor:pointer}.vt-clear{border:0;border-radius:11px;background:rgba(148,163,184,.13);color:inherit;padding:10px 13px;font:700 12px Tajawal,Arial;cursor:pointer}.vt-note{font-size:10px;opacity:.48;margin:10px 0 0;line-height:1.6}
    @media(prefers-color-scheme:dark){.vt-search,.vt-chip,.vt-box{background:rgba(2,6,23,.25)}}@media(max-width:650px){#visit-template-library{padding:15px}.vt-grid{grid-template-columns:1fr}.vt-actions{flex-direction:column}.vt-apply,.vt-clear{width:100%}}
  `;
  let selected = null;

  function ensureStyle() {
    if (document.getElementById('visit-template-style')) return;
    const style = document.createElement('style'); style.id = 'visit-template-style'; style.textContent = css; document.head.appendChild(style);
  }
  function findField(label) {
    const span = [...document.querySelectorAll('label span')].find(node => (node.textContent || '').trim() === label);
    return span?.closest('label')?.querySelector('textarea,input') || null;
  }
  function setReactValue(input, value) {
    if (!input) return false;
    const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set;
    if (setter) setter.call(input, value); else input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
  }
  function assessmentText(template) {
    return ['قالب فحص — ' + template.name, ...template.assessment.map(item => `• ${item}`), `تنبيه: ${template.warning}`].join('\n');
  }
  function planText(template) {
    return ['خطة مبدئية للمراجعة والتعديل:', ...template.plan.map(item => `• ${item}`)].join('\n');
  }
  function applyTemplate(template) {
    const diagnosis = findField('التشخيص');
    const treatment = findField('الخطة العلاجية المعتمدة');
    const notes = findField('ملاحظات الطبيب');
    if (!diagnosis || !treatment || !notes) return;
    setReactValue(diagnosis, template.diagnosis);
    setReactValue(treatment, planText(template));
    setReactValue(notes, assessmentText(template));
    diagnosis.scrollIntoView({ behavior: 'smooth', block: 'center' });
    diagnosis.focus();
  }
  function detail(template) {
    return `<div class="vt-detail"><h4>${esc(template.name)}</h4><div class="vt-grid"><div class="vt-box"><b>نقاط الفحص والتقييم</b><ul>${template.assessment.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div><div class="vt-box"><b>محاور الخطة</b><ul>${template.plan.map(item => `<li>${esc(item)}</li>`).join('')}</ul></div></div><p class="vt-warning"><b>تنبيه سلامة:</b> ${esc(template.warning)}</p><div class="vt-actions"><button type="button" class="vt-clear">إغلاق المعاينة</button><button type="button" class="vt-apply">تطبيق القالب في الكشف</button></div><p class="vt-note">القالب أداة توثيق ودعم قرار للطبيب، ويجب مراجعته وتعديله حسب التاريخ المرضي والفحص والإرشادات المعتمدة قبل حفظ الزيارة.</p></div>`;
  }
  function bind(root) {
    const list = root.querySelector('.vt-list');
    const output = root.querySelector('.vt-output');
    const search = root.querySelector('.vt-search');
    const renderList = query => {
      const normalized = query.trim().toLowerCase();
      const filtered = templates.filter(item => !normalized || item.name.includes(normalized) || item.diagnosis.toLowerCase().includes(normalized));
      list.innerHTML = filtered.map(item => `<button type="button" class="vt-chip ${selected?.id === item.id ? 'active' : ''}" data-template="${item.id}">${item.icon} ${esc(item.name)}</button>`).join('') || '<span class="vt-sub">لا يوجد قالب مطابق.</span>';
      list.querySelectorAll('[data-template]').forEach(button => button.onclick = () => {
        selected = templates.find(item => item.id === button.dataset.template);
        renderList(search.value); output.innerHTML = detail(selected); bindDetail(output);
      });
    };
    const bindDetail = host => {
      host.querySelector('.vt-clear')?.addEventListener('click', () => { selected = null; output.innerHTML = ''; renderList(search.value); });
      host.querySelector('.vt-apply')?.addEventListener('click', () => applyTemplate(selected));
    };
    search.oninput = () => renderList(search.value);
    renderList('');
  }
  function mount() {
    if (!onVisit()) { document.getElementById('visit-template-library')?.remove(); selected = null; return; }
    if (document.getElementById('visit-template-library')) return;
    const diagnosis = findField('التشخيص');
    if (!diagnosis) return;
    const card = diagnosis.closest('.rounded-card') || diagnosis.parentElement?.parentElement;
    if (!card?.parentElement) return;
    ensureStyle();
    const root = document.createElement('section'); root.id = 'visit-template-library';
    root.innerHTML = `<div class="vt-head"><div><h3 class="vt-title">قوالب الكشف الجلدية السريعة</h3><p class="vt-sub">اختر الحالة لمعاينة نقاط الفحص والخطة ثم طبّقها وعدّلها قبل الحفظ.</p></div><span class="vt-badge">9 قوالب جاهزة</span></div><input class="vt-search" placeholder="ابحث عن تشخيص أو حالة..." autocomplete="off"><div class="vt-list"></div><div class="vt-output"></div>`;
    card.parentElement.insertBefore(root, card);
    bind(root);
  }
  let lastPath = location.pathname;
  setInterval(() => {
    if (location.pathname !== lastPath) { lastPath = location.pathname; document.getElementById('visit-template-library')?.remove(); selected = null; }
    mount();
  }, 650);
})();
