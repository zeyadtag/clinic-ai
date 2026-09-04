(() => {
  const STORAGE_KEY = 'taj_clinical_orders_v1';
  const DB_NAME = 'taj-clinical-order-files';
  const VISIT_ROUTE = /^\/dashboard\/visits\/([^/]+)\/?$/;
  const PATIENT_ROUTE = /^\/dashboard\/patients\/([^/]+)\/?$/;
  const catalog = {
    lab: ['صورة دم كاملة CBC', 'وظائف كبد LFT', 'وظائف كلى KFT', 'دهون كاملة Lipid profile', 'سكر تراكمي HbA1c', 'وظائف الغدة الدرقية TSH', 'Ferritin ومخزون الحديد', 'Vitamin D', 'اختبار حمل'],
    imaging: ['تصوير جلدي Dermoscopy', 'تصوير موحد قبل/بعد', 'فحص Wood’s lamp', 'موجات صوتية Ultrasound'],
    pathology: ['خزعة جلدية Histopathology', 'فحص فطريات KOH', 'مزرعة بكتيرية وحساسية', 'مزرعة فطرية'],
    other: ['طلب طبي آخر']
  };
  const kindLabels = { lab: 'تحاليل معملية', imaging: 'تصوير', pathology: 'باثولوجي/مزرعة', other: 'طلب آخر' };
  const statusLabels = { requested: 'مطلوب', received: 'وصلت النتيجة', reviewed: 'راجعها الطبيب' };
  const priorityLabels = { routine: 'روتيني', soon: 'خلال أيام', urgent: 'عاجل' };
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const uid = () => `order-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const read = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; } };
  const write = orders => { localStorage.setItem(STORAGE_KEY, JSON.stringify(orders)); window.dispatchEvent(new Event('clinic-orders-updated')); };
  const formatDate = value => { if (!value) return 'بدون موعد محدد'; try { return new Intl.DateTimeFormat('ar-EG', { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`)); } catch { return value; } };
  let activePath = location.pathname;

  const css = `
    #clinical-orders-panel{direction:rtl;border:1px solid rgba(59,130,246,.25);border-radius:20px;background:linear-gradient(145deg,rgba(59,130,246,.07),rgba(255,255,255,.02));padding:19px;box-shadow:0 14px 38px rgba(2,6,23,.08);color:inherit}
    #clinical-orders-panel *{box-sizing:border-box}.co-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap}.co-head h3{font-size:17px;font-weight:800;margin:0}.co-head p{font-size:12px;line-height:1.7;opacity:.58;margin:4px 0 0}.co-count{border:1px solid rgba(59,130,246,.25);background:rgba(59,130,246,.1);color:#2563eb;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:800;white-space:nowrap}
    .co-toggle,.co-primary,.co-secondary,.co-danger{border:0;border-radius:11px;padding:10px 13px;font:800 12px Tajawal,Arial;cursor:pointer}.co-toggle,.co-primary{background:#2563eb;color:#fff}.co-secondary{background:rgba(148,163,184,.14);color:inherit}.co-danger{background:rgba(244,63,94,.1);color:#e11d48}.co-form{margin-top:15px;padding:15px;border:1px solid rgba(148,163,184,.17);border-radius:15px;background:rgba(255,255,255,.38)}.co-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.co-field{display:grid;gap:6px}.co-field.full{grid-column:1/-1}.co-field label{font-size:11px;font-weight:800;opacity:.65}.co-field input,.co-field select,.co-field textarea{width:100%;border:1px solid rgba(148,163,184,.24);background:rgba(255,255,255,.72);color:inherit;border-radius:11px;padding:10px 11px;font:500 12px Tajawal,Arial;outline:none}.co-field input:focus,.co-field select:focus,.co-field textarea:focus{border-color:#2563eb}.co-form-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}
    .co-list{display:grid;gap:10px;margin-top:14px}.co-empty{border:1px dashed rgba(148,163,184,.28);border-radius:13px;padding:15px;text-align:center;font-size:12px;opacity:.55}.co-card{border:1px solid rgba(148,163,184,.18);background:rgba(255,255,255,.5);border-radius:15px;padding:14px}.co-card-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.co-name{font-size:14px;font-weight:800}.co-meta{font-size:11px;opacity:.58;margin-top:4px}.co-status{border-radius:999px;padding:5px 8px;font-size:10px;font-weight:800;white-space:nowrap}.co-status.requested{background:rgba(245,158,11,.12);color:#b56b00}.co-status.received{background:rgba(59,130,246,.12);color:#2563eb}.co-status.reviewed{background:rgba(16,185,129,.12);color:#087f67}.co-instructions,.co-result{font-size:12px;line-height:1.7;margin:9px 0 0;padding:9px 10px;border-radius:10px;background:rgba(148,163,184,.08)}.co-result b{display:block;color:#2563eb;margin-bottom:2px}.co-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:11px}.co-file{display:none}.co-receive{margin-top:10px;padding-top:10px;border-top:1px solid rgba(148,163,184,.15)}.co-file-name{font-size:11px;color:#2563eb}.co-review-note{width:100%;margin-top:7px;border:1px solid rgba(148,163,184,.22);border-radius:10px;padding:9px;font:500 12px Tajawal,Arial;background:rgba(255,255,255,.65);color:inherit}.co-priority-urgent{color:#e11d48;font-weight:800}.co-priority-soon{color:#b56b00;font-weight:800}.co-banner{margin-top:10px;border-radius:11px;background:rgba(16,185,129,.09);color:#087f67;padding:9px 11px;font-size:11px;font-weight:700}
    @media(prefers-color-scheme:dark){.co-form,.co-card,.co-field input,.co-field select,.co-field textarea,.co-review-note{background:rgba(2,6,23,.28)}}@media(max-width:650px){#clinical-orders-panel{padding:15px}.co-grid{grid-template-columns:1fr}.co-field.full{grid-column:auto}.co-form-actions,.co-actions{flex-direction:column}.co-form-actions button,.co-actions button,.co-actions label{width:100%;text-align:center}}
  `;

  function ensureStyle() {
    if (document.getElementById('clinical-orders-style')) return;
    const style = document.createElement('style'); style.id = 'clinical-orders-style'; style.textContent = css; document.head.appendChild(style);
  }
  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('files');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  async function saveFile(orderId, file) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').put(file, orderId);
      tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
    });
  }
  async function getFile(orderId) {
    const db = await openDb();
    return new Promise((resolve, reject) => {
      const request = db.transaction('files').objectStore('files').get(orderId);
      request.onsuccess = () => resolve(request.result || null); request.onerror = () => reject(request.error);
    });
  }
  async function removeFile(orderId) {
    const db = await openDb();
    return new Promise(resolve => {
      const tx = db.transaction('files', 'readwrite'); tx.objectStore('files').delete(orderId); tx.oncomplete = resolve; tx.onerror = resolve;
    });
  }
  function pageContext() {
    const visit = location.pathname.match(VISIT_ROUTE), patient = location.pathname.match(PATIENT_ROUTE);
    if (!visit && !patient) return null;
    const h1 = document.querySelector('main h1') || document.querySelector('h1');
    const patientName = (h1?.textContent || '').trim();
    if (!patientName || /المواعيد|المرضى|لوحة|غير موجود|not found/i.test(patientName)) return null;
    return { mode: visit ? 'visit' : 'patient', referenceId: (visit || patient)[1], patientName };
  }
  function findNotesField() {
    const span = [...document.querySelectorAll('label span')].find(node => (node.textContent || '').trim() === 'ملاحظات الطبيب');
    return span?.closest('label')?.querySelector('textarea') || null;
  }
  function setReactValue(input, value) {
    const setter = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value')?.set;
    if (setter) setter.call(input, value); else input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true })); input.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function appendToVisitNotes(order) {
    const input = findNotesField(); if (!input) return;
    const line = `طلب ${kindLabels[order.kind]}: ${order.name} — ${priorityLabels[order.priority]}${order.dueDate ? ` — قبل ${order.dueDate}` : ''}`;
    if ((input.value || '').includes(line)) return;
    setReactValue(input, input.value ? `${input.value}\n${line}` : line);
  }
  function relevantOrders(context) {
    return read().filter(order => order.patientName === context.patientName || (context.mode === 'visit' && order.visitId === context.referenceId));
  }
  function options(kind, selected = '') {
    return catalog[kind].map(item => `<option ${item === selected ? 'selected' : ''}>${esc(item)}</option>`).join('');
  }
  function formHtml() {
    const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10);
    return `<div class="co-form" data-co-form><div class="co-grid"><div class="co-field"><label>نوع الطلب</label><select data-co-kind>${Object.entries(kindLabels).map(([value,label]) => `<option value="${value}">${label}</option>`).join('')}</select></div><div class="co-field"><label>الفحص أو الإجراء</label><select data-co-name>${options('lab')}</select></div><div class="co-field"><label>الأولوية</label><select data-co-priority><option value="routine">روتيني</option><option value="soon">خلال أيام</option><option value="urgent">عاجل</option></select></div><div class="co-field"><label>المطلوب قبل تاريخ</label><input type="date" data-co-due value="${nextWeek}"></div><div class="co-field full"><label>تعليمات للمريض أو المعمل</label><textarea rows="2" data-co-instructions placeholder="مثال: صيام 8 ساعات أو إحضار النتائج السابقة"></textarea></div></div><div class="co-form-actions"><button type="button" class="co-secondary" data-co-cancel>إلغاء</button><button type="button" class="co-primary" data-co-create>إنشاء الطلب</button></div></div>`;
  }
  function cardHtml(order) {
    const priorityClass = order.priority === 'urgent' ? 'co-priority-urgent' : order.priority === 'soon' ? 'co-priority-soon' : '';
    return `<article class="co-card" data-order="${order.id}"><div class="co-card-top"><div><div class="co-name">${esc(order.name)}</div><div class="co-meta">${esc(kindLabels[order.kind])} · <span class="${priorityClass}">${esc(priorityLabels[order.priority])}</span> · ${formatDate(order.dueDate)}</div></div><span class="co-status ${order.status}">${statusLabels[order.status]}</span></div>${order.instructions ? `<p class="co-instructions">${esc(order.instructions)}</p>` : ''}${order.status !== 'requested' ? `<div class="co-result"><b>ملخص النتيجة</b>${esc(order.resultNote || 'تم استلام ملف النتيجة.')}${order.fileName ? `<div class="co-file-name">الملف: ${esc(order.fileName)}</div>` : ''}</div>` : ''}<div class="co-actions">${order.status === 'requested' ? `<label class="co-primary">رفع النتيجة<input class="co-file" type="file" accept="image/*,.pdf" data-co-file></label><button type="button" class="co-secondary" data-co-result-text>إضافة نتيجة نصية</button>` : ''}${order.status === 'received' ? `<button type="button" class="co-primary" data-co-reviewed>تمت المراجعة</button>` : ''}${order.fileName ? `<button type="button" class="co-secondary" data-co-open>عرض الملف</button>` : ''}<button type="button" class="co-danger" data-co-delete>حذف</button></div><div data-co-inline></div></article>`;
  }
  function render(root, context) {
    const orders = relevantOrders(context).sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    root.querySelector('.co-count').textContent = `${orders.length} طلب`;
    root.querySelector('.co-list').innerHTML = orders.length ? orders.map(cardHtml).join('') : '<div class="co-empty">لا توجد طلبات تحاليل أو تصوير لهذا المريض.</div>';
    bindCards(root, context);
  }
  function updateOrder(id, changes) {
    const orders = read(); const index = orders.findIndex(item => item.id === id); if (index < 0) return;
    orders[index] = { ...orders[index], ...changes, updatedAt: new Date().toISOString() }; write(orders);
  }
  function bindCards(root, context) {
    root.querySelectorAll('[data-order]').forEach(card => {
      const id = card.dataset.order;
      card.querySelector('[data-co-file]')?.addEventListener('change', async event => {
        const file = event.target.files?.[0]; if (!file) return;
        if (file.size > 8 * 1024 * 1024) return alert('الحد الأقصى للملف 8 ميجابايت.');
        await saveFile(id, file); updateOrder(id, { status: 'received', fileName: file.name, fileType: file.type, resultNote: 'تم رفع النتيجة وتنتظر مراجعة الطبيب.' }); render(root, context);
      });
      card.querySelector('[data-co-result-text]')?.addEventListener('click', () => {
        const host = card.querySelector('[data-co-inline]'); host.innerHTML = `<div class="co-receive"><textarea class="co-review-note" rows="2" placeholder="اكتب ملخص النتيجة"></textarea><div class="co-actions"><button type="button" class="co-primary" data-save-result>حفظ النتيجة</button></div></div>`;
        host.querySelector('[data-save-result]').onclick = () => { const note = host.querySelector('textarea').value.trim(); if (!note) return; updateOrder(id, { status: 'received', resultNote: note }); render(root, context); };
      });
      card.querySelector('[data-co-reviewed]')?.addEventListener('click', () => { updateOrder(id, { status: 'reviewed', reviewedAt: new Date().toISOString() }); render(root, context); });
      card.querySelector('[data-co-open]')?.addEventListener('click', async () => { const file = await getFile(id); if (!file) return alert('ملف النتيجة غير متاح على هذا الجهاز.'); window.open(URL.createObjectURL(file), '_blank', 'noopener'); });
      card.querySelector('[data-co-delete]')?.addEventListener('click', async () => { if (!confirm('حذف هذا الطلب ونتيجته من الجهاز؟')) return; await removeFile(id); write(read().filter(item => item.id !== id)); render(root, context); });
    });
  }
  function bind(root, context) {
    root.querySelector('[data-co-new]').onclick = () => {
      const host = root.querySelector('[data-co-form-host]'); host.innerHTML = formHtml();
      const kind = host.querySelector('[data-co-kind]'), name = host.querySelector('[data-co-name]');
      kind.onchange = () => name.innerHTML = options(kind.value);
      host.querySelector('[data-co-cancel]').onclick = () => host.innerHTML = '';
      host.querySelector('[data-co-create]').onclick = () => {
        const order = { id: uid(), patientName: context.patientName, visitId: context.mode === 'visit' ? context.referenceId : null, kind: kind.value, name: name.value, priority: host.querySelector('[data-co-priority]').value, dueDate: host.querySelector('[data-co-due]').value, instructions: host.querySelector('[data-co-instructions]').value.trim(), status: 'requested', resultNote: '', fileName: '', createdAt: new Date().toISOString() };
        const orders = read(); orders.push(order); write(orders); if (context.mode === 'visit') appendToVisitNotes(order); host.innerHTML = '<div class="co-banner">تم إنشاء الطلب وإضافته إلى ملاحظات الزيارة.</div>'; render(root, context);
      };
    };
    render(root, context);
  }
  function mount() {
    const context = pageContext();
    if (!context) { document.getElementById('clinical-orders-panel')?.remove(); return; }
    const existing = document.getElementById('clinical-orders-panel');
    if (existing?.dataset.patient === context.patientName && existing.dataset.mode === context.mode) return;
    existing?.remove(); ensureStyle();
    let anchor;
    if (context.mode === 'visit') {
      const followLabel = [...document.querySelectorAll('label span')].find(node => (node.textContent || '').includes('موعد المتابعة'));
      anchor = followLabel?.closest('.rounded-card') || followLabel?.parentElement?.parentElement;
    } else {
      const h1 = document.querySelector('main h1') || document.querySelector('h1'); anchor = h1?.parentElement?.parentElement;
    }
    if (!anchor?.parentElement) return;
    const root = document.createElement('section'); root.id = 'clinical-orders-panel'; root.dataset.patient = context.patientName; root.dataset.mode = context.mode;
    root.innerHTML = `<div class="co-head"><div><h3>طلبات التحاليل والتصوير</h3><p>أنشئ الطلب وتابع وصول النتيجة ومراجعتها من مكان واحد.</p></div><div><span class="co-count">0 طلب</span> <button type="button" class="co-toggle" data-co-new>+ طلب جديد</button></div></div><div data-co-form-host></div><div class="co-list"></div>`;
    if (context.mode === 'visit') anchor.parentElement.insertBefore(root, anchor); else anchor.insertAdjacentElement('afterend', root);
    bind(root, context);
  }
  window.addEventListener('clinic-orders-updated', () => { const root = document.getElementById('clinical-orders-panel'), context = pageContext(); if (root && context) render(root, context); });
  setInterval(() => { if (location.pathname !== activePath) { activePath = location.pathname; document.getElementById('clinical-orders-panel')?.remove(); } mount(); }, 700);
})();
