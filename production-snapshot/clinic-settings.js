(() => {
  const STORAGE_KEY = 'taj_clinic_settings_v1';
  const SETTINGS_ROUTE = '/dashboard/settings';
  const DEFAULTS = {
    clinic: {
      name: 'تاج',
      logo: '',
      primary: '#1fb899',
      accent: '#d6a756',
      phone: '01014213373',
      email: '',
      address: 'الإسكندرية، مصر',
      specialty: 'جلدية وتجميل وليزر'
    },
    doctor: {
      name: 'د. زياد محمد',
      title: 'طبيب جلدية وتجميل وليزر',
      bio: 'رعاية متخصصة للبشرة والشعر مع خطط علاج واضحة ومتابعة دقيقة للحالة.'
    },
    booking: {
      maxDailyBookings: 24,
      slotGapMinutes: 0,
      workingDays: {
        sat: { enabled: true, from: '09:00', to: '21:00' },
        sun: { enabled: true, from: '09:00', to: '21:00' },
        mon: { enabled: true, from: '09:00', to: '21:00' },
        tue: { enabled: true, from: '09:00', to: '21:00' },
        wed: { enabled: true, from: '09:00', to: '21:00' },
        thu: { enabled: true, from: '09:00', to: '18:00' },
        fri: { enabled: false, from: '09:00', to: '18:00' }
      },
      holidays: []
    },
    services: [
      { id: 'svc-1', name: 'كشف جلدية', price: 120, duration: 30, active: true },
      { id: 'svc-2', name: 'متابعة جلدية', price: 70, duration: 20, active: true },
      { id: 'svc-3', name: 'علاج حب الشباب', price: 150, duration: 30, active: true },
      { id: 'svc-4', name: 'جلسة تجميل وليزر', price: 320, duration: 60, active: true },
      { id: 'svc-5', name: 'استشارة الشعر والتساقط', price: 90, duration: 30, active: true }
    ],
    messages: {
      confirmation: 'تم تأكيد حجزك في {clinic} يوم {date} الساعة {time}.',
      reminder: 'تذكير بموعدك غدًا الساعة {time}. برجاء الحضور قبل الموعد بـ10 دقائق.',
      cancellation: 'تم إلغاء موعدك. يمكنك إعادة الحجز من رابط العيادة.',
      followUp: 'نتمنى لك الشفاء. أخبرنا عن استجابتك للعلاج قبل موعد المتابعة.'
    }
  };

  const days = [
    ['sat', 'السبت'], ['sun', 'الأحد'], ['mon', 'الاثنين'], ['tue', 'الثلاثاء'],
    ['wed', 'الأربعاء'], ['thu', 'الخميس'], ['fri', 'الجمعة']
  ];

  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const read = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      return stored ? {
        ...clone(DEFAULTS), ...stored,
        clinic: { ...DEFAULTS.clinic, ...stored.clinic },
        doctor: { ...DEFAULTS.doctor, ...stored.doctor },
        booking: { ...DEFAULTS.booking, ...stored.booking, workingDays: { ...DEFAULTS.booking.workingDays, ...stored.booking?.workingDays } },
        messages: { ...DEFAULTS.messages, ...stored.messages }
      } : clone(DEFAULTS);
    } catch {
      return clone(DEFAULTS);
    }
  };
  const save = value => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent('clinic-settings-updated', { detail: value }));
  };

  let settings = read();
  let activeTab = 'clinic';

  const css = `
    #clinic-settings-launcher{position:fixed;left:22px;bottom:22px;z-index:9000;border:1px solid rgba(255,255,255,.14);background:#102a34;color:#fff;border-radius:14px;padding:11px 15px;font:700 13px Tajawal,Arial;box-shadow:0 14px 40px rgba(2,6,23,.28);cursor:pointer;display:flex;align-items:center;gap:8px}
    #clinic-settings-launcher:hover{background:#173a46}
    #clinic-settings-app{--cs-primary:${settings.clinic.primary};--cs-accent:${settings.clinic.accent};position:fixed;inset:0;z-index:10000;background:#07171e;color:#e7f0f3;font-family:Tajawal,Arial,sans-serif;direction:rtl;overflow:auto}
    #clinic-settings-app *{box-sizing:border-box}
    .cs-shell{min-height:100%;display:grid;grid-template-columns:260px minmax(0,1fr)}
    .cs-side{position:sticky;top:0;height:100vh;padding:26px 18px;background:#0b2029;border-left:1px solid rgba(148,163,184,.15)}
    .cs-brand{padding:0 10px 22px;border-bottom:1px solid rgba(148,163,184,.14)}.cs-brand h2{font-size:20px;margin:0}.cs-brand p{font-size:12px;color:#91a6af;margin:5px 0 0}
    .cs-tabs{display:grid;gap:7px;margin-top:22px}.cs-tab{border:0;background:transparent;color:#a9bac1;border-radius:12px;padding:12px 13px;text-align:right;font:700 14px Tajawal;cursor:pointer}.cs-tab:hover,.cs-tab.active{background:rgba(31,184,153,.13);color:#78e2cb}.cs-tab.active{box-shadow:inset -3px 0 var(--cs-primary)}
    .cs-main{padding:28px clamp(18px,4vw,54px) 90px}.cs-top{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:24px}.cs-top h1{font-size:28px;margin:0}.cs-top p{color:#93a7b0;margin:6px 0 0;font-size:13px}
    .cs-close,.cs-btn{border:0;border-radius:12px;padding:11px 16px;font:700 13px Tajawal;cursor:pointer}.cs-close{background:#162d36;color:#d8e4e8}.cs-btn{background:var(--cs-primary);color:#052f2a}.cs-btn.secondary{background:#162d36;color:#d8e4e8}.cs-btn.danger{background:rgba(244,63,94,.12);color:#fda4af}
    .cs-card{background:#0d242d;border:1px solid rgba(148,163,184,.15);border-radius:20px;padding:22px;margin-bottom:16px;box-shadow:0 18px 50px rgba(2,6,23,.12)}.cs-card h3{font-size:17px;margin:0 0 5px}.cs-hint{font-size:12px;color:#8da1aa;margin:0 0 18px;line-height:1.7}
    .cs-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.cs-field{display:grid;gap:7px}.cs-field.full{grid-column:1/-1}.cs-field label{font-size:12px;font-weight:700;color:#b7c6cc}.cs-field input,.cs-field textarea,.cs-field select{width:100%;border:1px solid rgba(148,163,184,.2);background:#071a22;color:#f4f8fa;border-radius:12px;padding:12px 13px;font:500 14px Tajawal;outline:none}.cs-field input:focus,.cs-field textarea:focus,.cs-field select:focus{border-color:var(--cs-primary)}
    .cs-colors{display:grid;grid-template-columns:1fr 1fr;gap:12px}.cs-color{display:flex;gap:9px;align-items:center}.cs-color input[type=color]{width:48px;height:44px;padding:3px}.cs-color input[type=text]{flex:1}
    .cs-service{display:grid;grid-template-columns:minmax(180px,2fr) minmax(90px,.8fr) minmax(90px,.8fr) auto auto;gap:10px;align-items:end;padding:13px 0;border-bottom:1px solid rgba(148,163,184,.1)}.cs-service:last-child{border-bottom:0}.cs-check{display:flex;align-items:center;gap:7px;height:44px;font-size:12px;color:#b8c6cc}.cs-check input{accent-color:var(--cs-primary)}
    .cs-day{display:grid;grid-template-columns:110px 1fr 1fr;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid rgba(148,163,184,.1)}.cs-day:last-child{border:0}.cs-day-name{display:flex;gap:8px;align-items:center;font-size:13px;font-weight:700}.cs-day input{border:1px solid rgba(148,163,184,.2);background:#071a22;color:#fff;border-radius:10px;padding:10px;accent-color:var(--cs-primary)}
    .cs-actions{position:fixed;bottom:0;right:260px;left:0;padding:14px clamp(18px,4vw,54px);background:rgba(7,23,30,.94);backdrop-filter:blur(12px);border-top:1px solid rgba(148,163,184,.14);display:flex;justify-content:flex-end;gap:10px}.cs-toast{position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#dff9f1;color:#075f4f;border-radius:12px;padding:11px 17px;font-weight:800;z-index:10001;box-shadow:0 12px 34px rgba(0,0,0,.24)}
    @media(max-width:800px){.cs-shell{display:block}.cs-side{position:relative;height:auto;padding:16px}.cs-tabs{display:flex;overflow:auto;margin-top:14px}.cs-tab{white-space:nowrap}.cs-main{padding:20px 14px 100px}.cs-grid,.cs-colors{grid-template-columns:1fr}.cs-service{grid-template-columns:1fr 1fr}.cs-service .cs-name{grid-column:1/-1}.cs-day{grid-template-columns:1fr 1fr}.cs-day-name{grid-column:1/-1}.cs-actions{right:0}.cs-top h1{font-size:22px}#clinic-settings-launcher{left:14px;bottom:14px}}
  `;

  function ensureStyle() {
    if (document.getElementById('clinic-settings-style')) return;
    const style = document.createElement('style');
    style.id = 'clinic-settings-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function applyBranding() {
    settings = read();
    document.documentElement.style.setProperty('--clinic-primary', settings.clinic.primary);
    document.documentElement.style.setProperty('--clinic-accent', settings.clinic.accent);
    const nextTitle = `${settings.clinic.name} — ${settings.clinic.specialty}`;
    if (document.title !== nextTitle) document.title = nextTitle;
    document.querySelectorAll('p,h1,h2,h3,span').forEach(node => {
      if (node.children.length) return;
      const value = (node.textContent || '').trim();
      if (value === 'تاج') node.textContent = settings.clinic.name;
      else if (value === 'منصة تاج') node.textContent = `منصة ${settings.clinic.name}`;
      else if (value === 'د. زياد محمد') node.textContent = settings.doctor.name;
      else if (value === 'طبيب جلدية وتجميل وليزر') node.textContent = settings.doctor.title;
      else if (value === 'الإسكندرية، مصر') node.textContent = settings.clinic.address;
      else if (value === '01014213373') node.textContent = settings.clinic.phone;
      else if (value.startsWith('© ') && value.includes('تاج')) node.textContent = value.replace('تاج', settings.clinic.name);
    });
  }

  function renderClinic() {
    const c = settings.clinic, d = settings.doctor;
    return `<section class="cs-card"><h3>هوية العيادة</h3><p class="cs-hint">البيانات التي تظهر للمريض في الموقع والحجز والرسائل.</p><div class="cs-grid">
      ${field('اسم العيادة', 'clinic.name', c.name)}${field('التخصص', 'clinic.specialty', c.specialty)}
      ${field('رقم الهاتف', 'clinic.phone', c.phone)}${field('البريد الإلكتروني', 'clinic.email', c.email, 'email')}
      ${field('العنوان', 'clinic.address', c.address, 'text', true)}${field('رابط الشعار', 'clinic.logo', c.logo, 'url', true)}
      <div class="cs-field full"><label>ألوان الهوية</label><div class="cs-colors"><div class="cs-color"><input type="color" data-path="clinic.primary" value="${esc(c.primary)}"><input type="text" data-path="clinic.primary" value="${esc(c.primary)}"></div><div class="cs-color"><input type="color" data-path="clinic.accent" value="${esc(c.accent)}"><input type="text" data-path="clinic.accent" value="${esc(c.accent)}"></div></div></div>
    </div></section><section class="cs-card"><h3>بيانات الطبيب</h3><p class="cs-hint">الاسم والصفة والتعريف المختصر المعروضون للمرضى.</p><div class="cs-grid">${field('اسم الطبيب', 'doctor.name', d.name)}${field('المسمى المهني', 'doctor.title', d.title)}${area('نبذة الطبيب', 'doctor.bio', d.bio)}</div></section>`;
  }

  function field(label, path, value, type = 'text', full = false) {
    return `<div class="cs-field${full ? ' full' : ''}"><label>${label}</label><input type="${type}" data-path="${path}" value="${esc(value)}"></div>`;
  }
  function area(label, path, value) {
    return `<div class="cs-field full"><label>${label}</label><textarea rows="4" data-path="${path}">${esc(value)}</textarea></div>`;
  }
  function renderServices() {
    return `<section class="cs-card"><h3>الخدمات والأسعار</h3><p class="cs-hint">يمكنك إضافة خدمة أو تعطيلها وتحديد السعر والمدة.</p><div data-services>${settings.services.map((service, index) => `<div class="cs-service" data-service="${index}"><div class="cs-field cs-name"><label>الخدمة</label><input data-service-key="name" value="${esc(service.name)}"></div><div class="cs-field"><label>السعر (ج.م)</label><input type="number" min="0" data-service-key="price" value="${Number(service.price) || 0}"></div><div class="cs-field"><label>المدة (دقيقة)</label><input type="number" min="5" step="5" data-service-key="duration" value="${Number(service.duration) || 30}"></div><label class="cs-check"><input type="checkbox" data-service-key="active" ${service.active ? 'checked' : ''}> مفعلة</label><button class="cs-btn danger" data-remove-service="${index}">حذف</button></div>`).join('')}</div><button class="cs-btn secondary" data-add-service>+ إضافة خدمة</button></section>`;
  }
  function renderSchedule() {
    const b = settings.booking;
    return `<section class="cs-card"><h3>ساعات العمل</h3><p class="cs-hint">عطّل اليوم المغلق وحدد بداية ونهاية العمل لكل يوم.</p>${days.map(([key, label]) => { const day = b.workingDays[key]; return `<div class="cs-day"><label class="cs-day-name"><input type="checkbox" data-day="${key}" data-day-key="enabled" ${day.enabled ? 'checked' : ''}>${label}</label><input type="time" data-day="${key}" data-day-key="from" value="${day.from}" ${day.enabled ? '' : 'disabled'}><input type="time" data-day="${key}" data-day-key="to" value="${day.to}" ${day.enabled ? '' : 'disabled'}></div>`; }).join('')}</section><section class="cs-card"><h3>قواعد الحجز والإجازات</h3><div class="cs-grid">${field('الحد الأقصى للحجوزات يوميًا', 'booking.maxDailyBookings', b.maxDailyBookings, 'number')}${field('فاصل بين المواعيد بالدقائق', 'booking.slotGapMinutes', b.slotGapMinutes, 'number')}${area('تواريخ الإجازات — كل تاريخ في سطر', 'booking.holidaysText', b.holidays.join('\n'))}</div></section>`;
  }
  function renderMessages() {
    const m = settings.messages;
    return `<section class="cs-card"><h3>نصوص الرسائل والتنبيهات</h3><p class="cs-hint">يمكن استخدام المتغيرات {clinic} و{date} و{time} داخل الرسالة.</p><div class="cs-grid">${area('تأكيد الحجز', 'messages.confirmation', m.confirmation)}${area('تذكير الموعد', 'messages.reminder', m.reminder)}${area('إلغاء الموعد', 'messages.cancellation', m.cancellation)}${area('رسالة المتابعة', 'messages.followUp', m.followUp)}</div></section>`;
  }
  function renderLimits() {
    return `<section class="cs-card"><h3>ملخص التشغيل</h3><p class="cs-hint">مراجعة سريعة قبل حفظ الإعدادات.</p><div class="cs-grid"><div><b>${esc(settings.clinic.name)}</b><p class="cs-hint">${esc(settings.clinic.specialty)}</p></div><div><b>${settings.services.filter(item => item.active).length} خدمات مفعلة</b><p class="cs-hint">بحد أقصى ${esc(settings.booking.maxDailyBookings)} حجز يوميًا</p></div><div><b>${days.filter(([key]) => settings.booking.workingDays[key].enabled).length} أيام عمل</b><p class="cs-hint">${settings.booking.holidays.length} أيام إجازة مسجلة</p></div><div><b>${esc(settings.doctor.name)}</b><p class="cs-hint">${esc(settings.doctor.title)}</p></div></div></section>`;
  }

  function tabBody() {
    if (activeTab === 'clinic') return renderClinic();
    if (activeTab === 'services') return renderServices();
    if (activeTab === 'schedule') return renderSchedule();
    if (activeTab === 'messages') return renderMessages();
    return renderLimits();
  }
  function openSettings() {
    ensureStyle();
    settings = read();
    history.pushState({}, '', SETTINGS_ROUTE);
    renderApp();
  }
  function closeSettings() {
    document.getElementById('clinic-settings-app')?.remove();
    if (location.pathname === SETTINGS_ROUTE) history.pushState({}, '', '/dashboard');
  }
  function renderApp() {
    let root = document.getElementById('clinic-settings-app');
    if (!root) { root = document.createElement('div'); root.id = 'clinic-settings-app'; document.body.appendChild(root); }
    root.style.setProperty('--cs-primary', settings.clinic.primary);
    root.style.setProperty('--cs-accent', settings.clinic.accent);
    root.innerHTML = `<div class="cs-shell"><aside class="cs-side"><div class="cs-brand"><h2>إعدادات العيادة</h2><p>تحكم كامل بدون تعديل الكود</p></div><nav class="cs-tabs">${[
      ['clinic','الهوية والطبيب'],['services','الخدمات والأسعار'],['schedule','العمل والحجوزات'],['messages','الرسائل'],['summary','مراجعة الإعدادات']
    ].map(([id,label]) => `<button class="cs-tab ${activeTab === id ? 'active' : ''}" data-tab="${id}">${label}</button>`).join('')}</nav></aside><main class="cs-main"><div class="cs-top"><div><h1>مركز إعدادات العيادة</h1><p>كل ما يحتاجه الطبيب لتخصيص وتشغيل نسخته.</p></div><button class="cs-close" data-close>رجوع للوحة التحكم</button></div><div data-tab-body>${tabBody()}</div></main></div><div class="cs-actions"><button class="cs-btn secondary" data-reset>استرجاع القيم الافتراضية</button><button class="cs-btn" data-save>حفظ وتطبيق الإعدادات</button></div>`;
    bindApp(root);
  }

  function setPath(path, value) {
    const parts = path.split('.');
    let target = settings;
    while (parts.length > 1) target = target[parts.shift()];
    target[parts[0]] = value;
  }
  function capture(root) {
    root.querySelectorAll('[data-path]').forEach(input => {
      let value = input.value;
      if (input.type === 'number') value = Number(value || 0);
      if (input.dataset.path === 'booking.holidaysText') settings.booking.holidays = value.split('\n').map(item => item.trim()).filter(Boolean);
      else setPath(input.dataset.path, value);
    });
    root.querySelectorAll('[data-service]').forEach(row => {
      const service = settings.services[Number(row.dataset.service)];
      row.querySelectorAll('[data-service-key]').forEach(input => {
        const key = input.dataset.serviceKey;
        service[key] = input.type === 'checkbox' ? input.checked : input.type === 'number' ? Number(input.value || 0) : input.value;
      });
    });
    root.querySelectorAll('[data-day]').forEach(input => {
      const value = input.type === 'checkbox' ? input.checked : input.value;
      settings.booking.workingDays[input.dataset.day][input.dataset.dayKey] = value;
    });
  }
  function bindApp(root) {
    root.querySelectorAll('[data-tab]').forEach(button => button.onclick = () => { capture(root); activeTab = button.dataset.tab; renderApp(); });
    root.querySelector('[data-close]').onclick = closeSettings;
    root.querySelector('[data-save]').onclick = () => {
      capture(root);
      if (!settings.clinic.name.trim() || !settings.doctor.name.trim()) return toast('اسم العيادة والطبيب مطلوبان');
      save(settings); applyBranding(); toast('تم حفظ وتطبيق الإعدادات'); renderApp();
    };
    root.querySelector('[data-reset]').onclick = () => { settings = clone(DEFAULTS); save(settings); applyBranding(); renderApp(); toast('تم استرجاع الإعدادات الافتراضية'); };
    root.querySelector('[data-add-service]')?.addEventListener('click', () => { capture(root); settings.services.push({ id: `svc-${Date.now()}`, name: 'خدمة جديدة', price: 0, duration: 30, active: true }); renderApp(); });
    root.querySelectorAll('[data-remove-service]').forEach(button => button.onclick = () => { capture(root); settings.services.splice(Number(button.dataset.removeService), 1); renderApp(); });
    root.querySelectorAll('[data-day-key="enabled"]').forEach(input => input.onchange = () => { capture(root); renderApp(); });
    root.querySelectorAll('input[type="color"]').forEach(input => input.oninput = () => { setPath(input.dataset.path, input.value); root.style.setProperty(input.dataset.path.endsWith('primary') ? '--cs-primary' : '--cs-accent', input.value); });
  }
  function toast(message) {
    document.querySelector('.cs-toast')?.remove();
    const node = document.createElement('div'); node.className = 'cs-toast'; node.textContent = message; document.body.appendChild(node);
    setTimeout(() => node.remove(), 2200);
  }
  function ensureLauncher() {
    const onDashboard = location.pathname.startsWith('/dashboard') && location.pathname !== '/login';
    const existing = document.getElementById('clinic-settings-launcher');
    if (!onDashboard) { existing?.remove(); if (location.pathname !== SETTINGS_ROUTE) document.getElementById('clinic-settings-app')?.remove(); return; }
    ensureStyle();
    if (!existing) {
      const button = document.createElement('button'); button.id = 'clinic-settings-launcher'; button.innerHTML = '<span>⚙</span><span>إعدادات العيادة</span>'; button.onclick = openSettings; document.body.appendChild(button);
    }
    if (location.pathname === SETTINGS_ROUTE && !document.getElementById('clinic-settings-app')) openSettings();
  }

  applyBranding();
  ensureLauncher();
  window.addEventListener('popstate', () => { ensureLauncher(); if (location.pathname !== SETTINGS_ROUTE) document.getElementById('clinic-settings-app')?.remove(); });
  window.addEventListener('clinic-settings-updated', applyBranding);
  setTimeout(applyBranding, 500);
  setTimeout(applyBranding, 1500);
  setInterval(ensureLauncher, 700);
})();
