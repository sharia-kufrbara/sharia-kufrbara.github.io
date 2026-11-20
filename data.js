// Catalog of the library. To add material: add an item under the right course and topic.
// Item kinds: summary | podcast | book | slides | video | game | interactive | exam
window.CONFIG = {
  // Apps Script web app URL (student uploads + approved items). Empty = uploads not connected yet.
  api: ""
};

window.KINDS = {
  summary: "تلخيص",
  podcast: "بودكاست",
  book: "كتاب",
  slides: "عرض",
  video: "فيديو",
  game: "لعبة",
  interactive: "مراجعة تفاعلية",
  exam: "أسئلة امتحان"
};

window.TERMS = [
  { id: "y1s1", title: "السنة الأولى", sub: "الفصل الأول", open: true },
  { id: "next", title: "باقي الفصول", sub: "تُضاف عند بدايتها", open: false }
];

window.COURSES = [
  {
    id: "ulum-quran",
    term: "y1s1",
    title: "علوم القرآن الكريم",
    blurb: "نزول القرآن، جمعه، المكي والمدني، الترجمة، وأشهر الكتب والمؤلفين.",
    topics: [
      {
        title: "المادة كاملة",
        items: [
          { kind: "summary", title: "ملخص محاضرات علوم القرآن الكريم", note: "ملف PDF من 33 صفحة", url: "files/ulum-quran/lectures-summary.pdf" },
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
      { title: "الإيمان بالملائكة ووظائفهم", items: [] }
    ]
  },
  {
    id: "sira",
    term: "y1s1",
    title: "السيرة النبوية",
    blurb: "سيرة النبي صلى الله عليه وسلم من المولد إلى الوفاة.",
    topics: [
      { title: "مقدمات في السيرة النبوية", items: [] }
    ]
  },
  {
    id: "fiqh-tahara-salah",
    term: "y1s1",
    title: "فقه الطهارة والصلاة",
    blurb: "عبادات 1: أحكام الطهارة والصلاة.",
    topics: [
      { title: "أحكام الطهارة", items: [] },
      { title: "أحكام الصلاة", items: [] }
    ]
  },
  {
    id: "fiqh-zawaj-talaq",
    term: "y1s1",
    title: "فقه الزواج والطلاق",
    blurb: "أحكام الأسرة: الزواج، الطلاق والعدة.",
    topics: [
      { title: "مكانة المرأة وأهمية الأسرة في الإسلام", items: [] },
      { title: "أحكام الزواج", items: [] },
      { title: "أحكام الطلاق والعدة الشرعية", items: [] }
    ]
  }
];
