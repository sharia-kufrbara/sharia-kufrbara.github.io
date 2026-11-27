// Catalog of the library. To add material: add an item under the right course and topic.
// Item kinds: summary | card | podcast | book | slides | video | game | interactive | exam | homework
// Flags: ai = AI-generated, arch = from the archive of an earlier cohort (2022-2024).
window.CONFIG = {
  // Apps Script web app URL (student uploads + approved items). Empty = uploads not connected yet.
  api: ""
};

window.KINDS = {
  summary: "تلخيص",
  card: "بطاقة مراجعة",
  podcast: "بودكاست",
  book: "كتاب",
  slides: "عرض",
  video: "فيديو",
  game: "لعبة",
  interactive: "مراجعة تفاعلية",
  exam: "أسئلة امتحان",
  homework: "وظيفة"
};

var ARCH_NOTE = "مواد هذا الفصل من أرشيف دفعة سابقة (2022-2024)، وقد يختلف ترتيب المساقات أو المحاضِر من دفعة لأخرى.";

window.TERMS = [
  { id: "y1s1", title: "السنة الأولى", sub: "الفصل الأول" },
  { id: "y1s2", title: "السنة الأولى", sub: "الفصل الثاني", note: ARCH_NOTE },
  { id: "y1s3", title: "السنة الأولى", sub: "الفصل الثالث", note: ARCH_NOTE },
  { id: "y2s1", title: "السنة الثانية", sub: "الفصل الأول", note: ARCH_NOTE },
  { id: "y2s2", title: "السنة الثانية", sub: "الفصل الثاني", note: ARCH_NOTE }
];

window.COURSES = [
  /* ---------- السنة الأولى · الفصل الأول ---------- */
  {
    id: "ulum-quran",
    term: "y1s1",
    title: "علوم القرآن الكريم",
    blurb: "نزول القرآن، جمعه، المكي والمدني، الترجمة، وأشهر الكتب والمؤلفين.",
    topics: [
      {
        title: "المادة كاملة",
        items: [
          { kind: "summary", title: "ملخص محاضرات علوم القرآن الكريم", note: "PDF · 33 صفحة", url: "files/ulum-quran/lectures-summary.pdf" },
          { kind: "interactive", title: "عدة الامتحان: ملخص، حيل للحفظ، بطاقات واختبار", note: "صفحة تفاعلية", url: "ulum-quran-kit/index.html", ai: true },
          { kind: "video", title: "تحدّي ليلة الامتحان", note: "24 دقيقة · 10 مراحل · 55 سؤالًا", url: "files/ulum-quran/exam-night-challenge.mp4", ai: true },
          { kind: "game", title: "لعبة الحفظ: السؤال الخطأ يعود حتى يُحفظ", note: "تعمل على الهاتف", url: "ulum-quran-kit/game.html", ai: true }
        ]
      },
      {
        title: "أشهر كتب علوم القرآن ومؤلفوها",
        items: [
          { kind: "podcast", title: "الروابط الذهنية لأشهر كتب علوم القرآن", url: "files/ulum-quran/kutub-mnemonics.m4a", ai: true },
          { kind: "podcast", title: "مراجعة: الكتب والمؤلفون", url: "ulum-quran-kit/podcast-1-kutub.mp3", ai: true }
        ]
      },
      {
        title: "الفرق بين القرآن والحديث القدسي والحديث النبوي",
        items: [
          { kind: "podcast", title: "الفرق بين القرآن والحديث القدسي والنبوي", url: "files/ulum-quran/quran-qudsi-nabawi.m4a", ai: true }
        ]
      },
      {
        title: "ترجمة القرآن",
        items: [
          { kind: "podcast", title: "لماذا تحرم الترجمة الحرفية للقرآن؟", url: "files/ulum-quran/tarjama-harfiyya.m4a", ai: true },
          { kind: "slides", title: "أحكام ترجمة القرآن وقراءته في الصلاة", note: "PDF", url: "files/ulum-quran/tarjama-slides.pdf", ai: true }
        ]
      },
      {
        title: "نزول القرآن: مدته، أول ما نزل وآخر ما نزل، أسباب النزول",
        items: [
          { kind: "podcast", title: "مراجعة: النزول وأسباب النزول", url: "ulum-quran-kit/podcast-2-nuzul-asbab.mp3", ai: true }
        ]
      },
      {
        title: "المكي والمدني، جمع القرآن وترتيب السور",
        items: [
          { kind: "podcast", title: "مراجعة: المكي والمدني والجمع والسور", url: "ulum-quran-kit/podcast-3-makki-jam-suwar.mp3", ai: true }
        ]
      },
      {
        title: "الرسم العثماني، الأحرف السبعة والقرّاء",
        items: [
          { kind: "podcast", title: "مراجعة: الرسم والأحرف والقرّاء", url: "ulum-quran-kit/podcast-4-rasm-ahruf-qurra.mp3", ai: true }
        ]
      }
    ]
  },
  {
    id: "aqida-1",
    term: "y1s1",
    title: "العقيدة الإسلامية 1",
    blurb: "أركان الإيمان ومسائل العقيدة.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات العقيدة 1", note: "PDF · 28 صفحة", url: "files/aqida-1/archive-summary.pdf", arch: true },
          { kind: "summary", title: "مادة الامتحان الفصلي: الإيمان والإسلام وما بعدهما", note: "PDF · 18 صفحة", url: "files/aqida-1/archive-final-material.pdf", arch: true },
          { kind: "interactive", title: "مفكرة أساسيات العقيدة الإسلامية ومباحثها: اسأل المادة، فيديو شرح واختبار", note: "NotebookLM · تُفتح بحساب جوجل", url: "https://notebooklm.link.google/3vdzmXzpsVGL" },
          { kind: "exam", title: "امتحان تدريبي صعب جدًّا: 50 سؤالًا اختيار من متعدد", note: "PDF · المحاضرات ص 15 إلى 57 ووظائف الملائكة · المفتاح في آخر الملف", url: "files/aqida-1/mcq-exam-50.pdf", ai: true }
        ]
      },
      {
        title: "الإيمان بالملائكة ووظائفهم",
        items: [
          { kind: "summary", title: "تلخيص: وظائف الملائكة وأصنافهم", note: "PDF · 5 صفحات", url: "files/aqida-1/wazaif-al-malaika-summary.pdf", ai: true }
        ]
      }
    ]
  },
  {
    id: "sira",
    term: "y1s1",
    title: "السيرة النبوية",
    blurb: "سيرة النبي صلى الله عليه وسلم من المولد إلى الوفاة.",
    topics: [
      {
        title: "مقدمات في السيرة النبوية",
        items: [
          { kind: "card", title: "الأسباب التي جعلت الجزيرة العربية مهدًا لنشأة الإسلام", note: "سؤال مهم · صورة", url: "files/sira/card-jazira-asbab.jpg", ai: true },
          { kind: "card", title: "الفرق بين العقيدة والتشريع", note: "سؤال مهم للامتحان · صورة", url: "files/sira/card-aqida-tashri.jpg", ai: true },
          { kind: "card", title: "حديث: «وإن الله نظر إلى أهل الأرض فمقتهم»", note: "طلب الأستاذ التركيز عليه · صورة", url: "files/sira/card-hadith-ahl-alard.jpg", ai: true }
        ]
      },
      {
        title: "نسب النبي صلى الله عليه وسلم",
        items: [
          { kind: "card", title: "نسب النبي صلى الله عليه وسلم حتى فهر", note: "للحفظ قبل الامتحان · صورة", url: "files/sira/card-nasab.jpg", ai: true }
        ]
      },
      {
        title: "وظائف المساق",
        items: [
          { kind: "homework", title: "وظيفة بحثية: صفة الأمّي للنبي، هل هي مدح أم قدح؟ مع مصدرين", note: "البحث في المكتبة الشاملة · صورة", url: "files/sira/card-wazifa-ummi.jpg", ai: true }
        ]
      },
      {
        title: "تلخيصات فقه السيرة",
        items: [
          { kind: "summary", title: "تلخيص فقه السيرة للبوطي: مادة الامتحان الشهري (الشريحة 2)", note: "PDF · 14 صفحة", url: "files/sira/archive-monthly-part2-buti.pdf", arch: true },
          { kind: "summary", title: "مادة الامتحان الفصلي في فقه السيرة", note: "PDF · 40 صفحة", url: "files/sira/archive-final-material.pdf", arch: true }
        ]
      },
      {
        title: "أسئلة ونماذج امتحانات",
        items: [
          { kind: "exam", title: "أسئلة منوعة مع أجوبتها: مادة الامتحان الشهري (الشريحة 1)", note: "PDF · 8 صفحات", url: "files/sira/archive-monthly-part1-qa.pdf", arch: true },
          { kind: "exam", title: "نماذج أسئلة في السيرة النبوية", note: "PDF · 12 صفحة", url: "files/sira/archive-question-samples.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "fiqh-tahara-salah",
    term: "y1s1",
    title: "فقه الطهارة والصلاة",
    blurb: "عبادات 1: أحكام الطهارة والصلاة.",
    topics: [
      {
        title: "أحكام الطهارة",
        items: [
          { kind: "summary", title: "أسهل طريقة لفهم مادة النجاسة: أقسامها وكيفية التطهّر", note: "ملخص بصري من الكتاب · PDF · 4 صفحات", url: "files/fiqh-tahara-salah/najasa-visual.pdf", ai: true },
          { kind: "summary", title: "أسهل طريقة لفهم مادة الاستنجاء", note: "ملخص بصري من الكتاب (ص 54-56) · PDF · 3 صفحات", url: "files/fiqh-tahara-salah/istinja-visual.pdf", ai: true },
          { kind: "summary", title: "تلخيص الطهارة: فقه العبادات 1", note: "PDF · 8 صفحات", url: "files/fiqh-tahara-salah/archive-tahara.pdf", arch: true }
        ]
      },
      {
        title: "الغسل وأحكام الصلاة",
        items: [
          { kind: "summary", title: "مادة الامتحان الفصلي في فقه العبادات: من الاغتسال إلى الصلاة", note: "PDF · 30 صفحة", url: "files/fiqh-tahara-salah/archive-final-material.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "fiqh-zawaj-talaq",
    term: "y1s1",
    title: "فقه الزواج والطلاق",
    blurb: "أحكام الأسرة: الزواج، الطلاق والعدة.",
    topics: [
      {
        title: "مادة الامتحان",
        items: [
          { kind: "card", title: "مادة امتحان أول نصفية (19.12.2026): العناوين وأرقام الصفحات", note: "صورة", url: "files/fiqh-zawaj-talaq/card-exam-scope.jpg", ai: true }
        ]
      },
      {
        title: "المادة كاملة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات فقه الزواج والطلاق", note: "PDF · 40 صفحة", url: "files/fiqh-zawaj-talaq/archive-summary.pdf", arch: true }
        ]
      },
      { title: "مكانة الزواج وأهمية الأسرة في الإسلام", items: [] },
      {
        title: "أحكام الزواج",
        items: [
          { kind: "card", title: "الفرق بين الزواج الباطل والزواج الفاسد", note: "مقارنة وسؤال امتحان · صورة", url: "files/fiqh-zawaj-talaq/card-batil-fasid.jpg", ai: true }
        ]
      },
      {
        title: "أحكام الطلاق والعدة الشرعية",
        items: [
          { kind: "card", title: "الفرق بين الطلاق الرجعي والطلاق البائن", note: "خلاصة وسؤال امتحان · صورة", url: "files/fiqh-zawaj-talaq/card-rajii-bain.jpg", ai: true }
        ]
      }
    ]
  },
  {
    id: "tajwid-1",
    term: "y1s1",
    title: "أحكام التجويد 1",
    blurb: "من أرشيف دفعة سابقة: دُرِّس في الفصل الأول عندها، وقد يأتي في فصل آخر.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات أحكام التجويد 1", note: "PDF · 18 صفحة", url: "files/tajwid-1/summary.pdf", arch: true }
        ]
      }
    ]
  },

  /* ---------- السنة الأولى · الفصل الثاني ---------- */
  {
    id: "usul-fiqh",
    term: "y1s2",
    title: "أصول الفقه",
    blurb: "مباحث الحكم الشرعي: التكليفي والوضعي.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات أصول الفقه: مباحث الحكم الشرعي", note: "PDF · 28 صفحة", url: "files/usul-fiqh/summary.pdf", arch: true }
        ]
      },
      {
        title: "الحكم الوضعي: السبب، الشرط والمانع",
        items: [
          { kind: "summary", title: "مخطط: أقسام الشرط", note: "PDF · صفحة واحدة", url: "files/usul-fiqh/shart-map.pdf", arch: true },
          { kind: "summary", title: "مخطط: الحكم الوضعي والمانع", note: "PDF · صفحة واحدة", url: "files/usul-fiqh/mani-map.pdf", arch: true }
        ]
      },
      {
        title: "أسئلة",
        items: [
          { kind: "exam", title: "أسئلة أصول الفقه مع أجوبتها", note: "PDF · 8 صفحات", url: "files/usul-fiqh/questions.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "tafsir-tahlili",
    term: "y1s2",
    title: "التفسير التحليلي",
    blurb: "قسم نظري وقسم تطبيقي في تفسير القرآن الكريم.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات التفسير التحليلي", note: "PDF · 29 صفحة", url: "files/tafsir-tahlili/summary.pdf", arch: true }
        ]
      },
      {
        title: "كتب ومراجع",
        items: [
          { kind: "book", title: "في ظلال القرآن، سيد قطب (الجزء 3)", note: "ملف كبير، يُفتح من جوجل درايف", url: "https://drive.google.com/file/d/1R8xlQkZ4aHkxiCAroNlByjmt3YTMPgYs/view" }
        ]
      }
    ]
  },
  {
    id: "tajwid-2",
    term: "y1s2",
    title: "أحكام التجويد 2",
    blurb: "تتمة أحكام التجويد.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات التجويد 2", note: "PDF · 21 صفحة", url: "files/tajwid-2/summary.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "ulum-hadith",
    term: "y1s2",
    title: "علوم الحديث",
    blurb: "مصطلح الحديث وأقسامه.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات علوم الحديث", note: "PDF · 30 صفحة", url: "files/ulum-hadith/summary.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "fiqh-ibadat-2",
    term: "y1s2",
    title: "فقه العبادات 2",
    blurb: "الزكاة، الصوم والحج.",
    topics: [
      {
        title: "الزكاة",
        items: [
          { kind: "summary", title: "تلخيص الزكاة: شروطها وأحكامها", note: "PDF · 10 صفحات", url: "files/fiqh-ibadat-2/zakah.pdf", arch: true },
          { kind: "summary", title: "أنصبة الثروة الحيوانية: الإبل والبقر والغنم", note: "PDF · 3 صفحات", url: "files/fiqh-ibadat-2/ansiba.pdf", arch: true }
        ]
      },
      {
        title: "الصوم",
        items: [
          { kind: "summary", title: "تلخيص الصوم", note: "PDF · 7 صفحات", url: "files/fiqh-ibadat-2/sawm.pdf", arch: true }
        ]
      },
      {
        title: "الحج والعمرة",
        items: [
          { kind: "summary", title: "المحاضرة الثامنة: الحج والعمرة", note: "PDF · 5 صفحات", url: "files/fiqh-ibadat-2/hajj-lecture-8.pdf", arch: true }
        ]
      },
      {
        title: "أسئلة",
        items: [
          { kind: "exam", title: "أسئلة فقه العبادات مع أجوبتها", note: "PDF · صفحتان", url: "files/fiqh-ibadat-2/questions.pdf", arch: true }
        ]
      }
    ]
  },

  /* ---------- السنة الأولى · الفصل الثالث ---------- */
  {
    id: "aqida-2",
    term: "y1s3",
    title: "العقيدة الإسلامية 2",
    blurb: "الإيمان بالأنبياء والرسل وما يتبعه.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات العقيدة 2", note: "PDF · 32 صفحة", url: "files/aqida-2/summary.pdf", arch: true }
        ]
      }
    ]
  },

  /* ---------- السنة الثانية · الفصل الأول ---------- */
  {
    id: "adillat-tashri",
    term: "y2s1",
    title: "أدلة التشريع",
    blurb: "مصادر التشريع الإسلامي.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص أدلة التشريع (مصادر التشريع)", note: "PDF · 12 صفحة", url: "files/adillat-tashri/summary.pdf", arch: true }
        ]
      },
      {
        title: "أسئلة",
        items: [
          { kind: "exam", title: "سؤال وجواب: مادة الامتحان الشهري", note: "PDF · 5 صفحات", url: "files/adillat-tashri/monthly-qa.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "hadith-tahlili-1",
    term: "y2s1",
    title: "الحديث التحليلي 1",
    blurb: "حفظ الأربعين النووية وشرحها.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات الحديث التحليلي 1", note: "PDF · 16 صفحة", url: "files/hadith-tahlili-1/summary.pdf", arch: true }
        ]
      },
      {
        title: "الأربعون النووية",
        items: [
          { kind: "summary", title: "25 حديثًا من الأربعين النووية للحفظ", note: "PDF · 5 صفحات", url: "files/hadith-tahlili-1/arbain-25.pdf", arch: true },
          { kind: "book", title: "الوافي في شرح الأربعين النووية", note: "ملف كبير، يُفتح من جوجل درايف", url: "https://drive.google.com/file/d/1YGoedW2WCAxkNIGGIcdCY4FQ5w8_xwrE/view" }
        ]
      }
    ]
  },
  {
    id: "takhrij-hadith",
    term: "y2s1",
    title: "تخريج الحديث",
    blurb: "طرق تخريج الحديث وشجرة الإسناد.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تخريج الحديث: المحاضرة الأولى", note: "PDF · صفحتان", url: "files/takhrij-hadith/summary.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "manahij-mufassirin",
    term: "y2s1",
    title: "مناهج المفسرين",
    blurb: "أعلام المفسرين ومناهجهم في التفسير.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات مناهج المفسرين", note: "PDF · 32 صفحة", url: "files/manahij-mufassirin/summary.pdf", arch: true },
          { kind: "book", title: "دوسية مناهج المفسرين", note: "PDF · 36 صفحة", url: "files/manahij-mufassirin/dossier.pdf", arch: true }
        ]
      },
      {
        title: "عبد الله بن عباس ومنهجه في التفسير",
        items: [
          { kind: "summary", title: "عبد الله بن عباس ومنهجه في التفسير", note: "PDF مصوّر · 5 صفحات", url: "files/manahij-mufassirin/ibn-abbas.pdf", arch: true }
        ]
      }
    ]
  },

  /* ---------- السنة الثانية · الفصل الثاني ---------- */
  {
    id: "ayman-nudhur",
    term: "y2s2",
    title: "الأيمان والنذور",
    blurb: "أحكام اليمين والنذر.",
    topics: [
      {
        title: "الكفارات والنذر",
        items: [
          { kind: "slides", title: "الأيمان والنذور: الكفارات والنذر", note: "PDF · 22 شريحة", url: "files/ayman-nudhur/kaffarat-nadhr.pdf" }
        ]
      },
      {
        title: "أسئلة",
        items: [
          { kind: "exam", title: "أسئلة في موضوع الأيمان والنذور مع أجوبتها", note: "PDF · 8 صفحات", url: "files/ayman-nudhur/questions.pdf", arch: true },
          { kind: "exam", title: "أسئلة امتحان الأيمان والنذور", note: "PDF · 11 صفحة", url: "files/ayman-nudhur/exam-questions.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "ijaz-quran",
    term: "y2s2",
    title: "إعجاز القرآن",
    blurb: "الإعجاز البياني وتاريخ الإعجاز.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص إعجاز القرآن البياني", note: "PDF · 37 صفحة", url: "files/ijaz-quran/summary.pdf", arch: true },
          { kind: "summary", title: "تاريخ الإعجاز عند المحدَثين", note: "PDF · 17 صفحة", url: "files/ijaz-quran/tarikh-muhdathin.pdf", arch: true },
          { kind: "summary", title: "جدول كتب الإعجاز ومؤلفيها", note: "PDF · صفحة واحدة", url: "files/ijaz-quran/books-table.pdf", arch: true }
        ]
      },
      {
        title: "أسئلة",
        items: [
          { kind: "exam", title: "أسئلة مع أجوبة: الإعجاز عند المحدَثين", note: "PDF · 8 صفحات", url: "files/ijaz-quran/qa.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "tajwid-3",
    term: "y2s2",
    title: "أحكام التجويد 3",
    blurb: "أحكام اللام والراء، الوقف وما بعدها.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات التجويد 3", note: "PDF · 20 صفحة", url: "files/tajwid-3/summary.pdf", arch: true }
        ]
      }
    ]
  },
  {
    id: "fann-khataba",
    term: "y2s2",
    title: "فن الخطابة",
    blurb: "إعداد الخطبة وإلقاؤها.",
    topics: [
      {
        title: "تلخيص المادة",
        items: [
          { kind: "summary", title: "تلخيص محاضرات فن الخطابة", note: "PDF · 16 صفحة", url: "files/fann-khataba/summary.pdf", arch: true }
        ]
      }
    ]
  }
];
