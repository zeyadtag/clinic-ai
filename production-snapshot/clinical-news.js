(() => {
  const ROUTE = '/dashboard/clinical-updates';
  const DETAILS = {
    'أجهزة الطاقة لعلاج حب الشباب في البشرة الملونة': {
      intro: 'مراجعة مهنية مختصرة لأحدث ما نُشر حول استخدام أجهزة الطاقة في علاج حب الشباب لدى أصحاب البشرة الملونة.',
      points: [
        'اختيار نوع الجهاز وإعداداته يجب أن يراعي درجة لون البشرة واحتمال التصبغ التالي للالتهاب.',
        'الأجهزة قد تكون خيارًا مساعدًا، ولا تُعد بديلًا تلقائيًا للعلاج الدوائي المناسب لكل حالة.',
        'يجب توثيق شدة الحالة والصور قبل العلاج ومتابعة التصبغ والندبات بعد الجلسات.',
      ],
      action: 'راجع نوع البشرة، نشاط الالتهاب، تاريخ التصبغ والعلاجات السابقة قبل مناقشة جلسات الطاقة.',
    },
    'طفح دوائي جلدي مرتبط باستخدام Tirzepatide': {
      intro: 'تنبيه سريري عن تقارير طفح جلدي دوائي محتمل بالتزامن مع استخدام Tirzepatide.',
      points: [
        'اسأل عن توقيت بدء الدواء وظهور الطفح وأي أدوية أو مكملات بدأت في الفترة نفسها.',
        'افحص علامات الخطورة مثل إصابة الأغشية المخاطية، الحمى، ألم الجلد أو انتشار سريع.',
        'لا يُوقف علاج مزمن أو يُعاد استخدامه إلا بعد تقييم الطبيب المسؤول وموازنة المخاطر.',
      ],
      action: 'وثّق شكل الطفح وتوقيته، ونسّق مع الطبيب الواصف عند الاشتباه في تفاعل دوائي.',
    },
    'أحدث الأبحاث المنشورة Online First في الجلدية': {
      intro: 'قائمة متجددة للأبحاث التي تنشرها JAMA Dermatology إلكترونيًا قبل إدراجها في العدد النهائي.',
      points: [
        'ركّز على نوع الدراسة، حجم العينة والنتائج المطلقة قبل تطبيق أي استنتاج سريري.',
        'فرّق بين النتائج الاستكشافية والإرشادات التي تصلح لتغيير الممارسة اليومية.',
        'استخدم البحث الأصلي لمراجعة المنهجية والتعارضات والقيود عند اتخاذ قرار علاجي.',
      ],
      action: 'احفظ الأبحاث المرتبطة بأكثر الحالات شيوعًا في العيادة لمناقشتها في المراجعة الأسبوعية.',
    },
    'الإرشادات السريرية الحالية للأمراض الجلدية': {
      intro: 'مدخل منظم لأحدث إرشادات الأكاديمية الأمريكية للأمراض الجلدية حسب المرض والتدخل العلاجي.',
      points: [
        'تحقق من تاريخ آخر تحديث ومن الفئة العمرية وشدة المرض التي تغطيها كل توصية.',
        'طبّق الإرشاد مع مراعاة موانع الاستعمال، الحمل، الأمراض المصاحبة وتوفر العلاج محليًا.',
        'الإرشادات تدعم قرار الطبيب ولا تستبدل التقييم الفردي للمريض.',
      ],
      action: 'ابدأ بالإرشاد الخاص بالتشخيص الأكثر تكرارًا لديك وحوّل أهم نقاطه إلى قائمة مراجعة.',
    },
  };

  const css = `
    .tag-news-toggle{margin-top:14px;width:100%;border:1px solid rgba(31,184,153,.28);border-radius:12px;background:rgba(31,184,153,.08);color:#2f9f8d;padding:10px 14px;font:700 12px Tajawal,sans-serif;cursor:pointer;transition:.2s}
    .tag-news-toggle:hover{background:rgba(31,184,153,.15)}
    .tag-news-detail{margin-top:12px;border-radius:14px;background:rgba(31,184,153,.06);border:1px solid rgba(31,184,153,.18);padding:15px;color:inherit}
    .tag-news-detail[hidden]{display:none}
    .tag-news-intro{font-size:13px;line-height:1.9;color:rgba(226,232,240,.78);margin:0}
    .tag-news-points{margin:12px 0 0;padding:0 18px 0 0;display:grid;gap:7px;font-size:12px;line-height:1.8;color:rgba(226,232,240,.72)}
    .tag-news-action{margin:13px 0 0;border-right:3px solid #1fb899;padding:8px 11px;background:rgba(31,184,153,.08);font-size:12px;line-height:1.8;color:rgba(226,232,240,.86)}
    .tag-news-source-note{margin:10px 0 0;font-size:10px;line-height:1.7;color:rgba(148,163,184,.78)}
    @media (prefers-color-scheme:light){.tag-news-intro,.tag-news-points,.tag-news-action{color:#334155}.tag-news-source-note{color:#64748b}}
  `;

  const onPage = () => location.pathname.replace(/\/$/, '') === ROUTE;
  const clean = (value) => (value || '').replace(/\s+/g, ' ').trim();
  const safe = (value) => String(value || '').replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  function genericDetail(article) {
    const paragraphs = [...article.querySelectorAll('p')].map((node) => clean(node.textContent));
    const summary = paragraphs.find((text) => text.length > 45 && !text.includes('آخر مزامنة'));
    return {
      intro: summary || 'ملخص عربي سريع لمساعدة الطبيب على معرفة أهمية التحديث قبل مراجعة المصدر العلمي.',
      points: [
        'راجع نوع الدراسة والفئة التي تناولها التحديث قبل تطبيق نتائجه.',
        'اربط المعلومة بتاريخ المريض، علاجاته الحالية وعوامل الخطورة الخاصة به.',
        'استخدم المرجع الأصلي للتحقق من الجرعات، القيود والتفاصيل المنهجية.',
      ],
      action: 'اعتبر هذا الملخص نقطة بداية للمراجعة، وليس توصية علاجية مستقلة.',
    };
  }

  function enhance() {
    if (!onPage()) return;
    document.querySelectorAll('main article').forEach((article) => {
      if (article.dataset.tagNewsReady) return;
      const heading = article.querySelector('h3');
      if (!heading) return;
      const title = clean(heading.textContent);
      const detail = DETAILS[title] || genericDetail(article);
      const button = document.createElement('button');
      const panel = document.createElement('section');
      const panelId = `tag-news-${Math.random().toString(36).slice(2)}`;
      button.type = 'button';
      button.className = 'tag-news-toggle';
      button.textContent = 'عرض التفاصيل داخل المنصة';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', panelId);
      panel.id = panelId;
      panel.className = 'tag-news-detail';
      panel.hidden = true;
      panel.innerHTML = `<p class="tag-news-intro">${safe(detail.intro)}</p><ul class="tag-news-points">${detail.points.map((point) => `<li>${safe(point)}</li>`).join('')}</ul><p class="tag-news-action"><b>ما الذي يفعله الطبيب؟</b> ${safe(detail.action)}</p><p class="tag-news-source-note">ملخص تعليمي داخل المنصة. يظل رابط البحث الأصلي متاحًا للتحقق العلمي الكامل.</p>`;
      button.addEventListener('click', () => {
        panel.hidden = !panel.hidden;
        button.textContent = panel.hidden ? 'عرض التفاصيل داخل المنصة' : 'إخفاء التفاصيل';
        button.setAttribute('aria-expanded', String(!panel.hidden));
      });
      article.append(button, panel);
      article.dataset.tagNewsReady = 'true';
    });
  }

  if (!document.getElementById('tag-news-style')) {
    const style = document.createElement('style');
    style.id = 'tag-news-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  setInterval(enhance, 500);
  new MutationObserver(enhance).observe(document.documentElement, {childList: true, subtree: true});
})();
