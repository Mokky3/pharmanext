export type Locale = "uz" | "ru" | "en";

export const locales: Locale[] = ["uz", "ru", "en"];
export const defaultLocale: Locale = "uz";

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: "Русский",
  en: "English",
};

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

const uz = {
  brand: {
    name: "PharmaNext",
    parent: "Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi huzurida",
  },
  nav: {
    home: "Bosh sahifa",
    about: "Biz haqimizda",
    programs: "Dasturlar",
    focus: "Yo'nalishlar",
    startups: "Startaplar",
    contact: "Aloqa",
    apply: "Ariza topshirish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
  },
  hero: {
    badge: "2026 oqimi uchun arizalar ochiq",
    titleA: "Sog'liqdagi",
    titleHighlight: "yangi avlod innovatsiyalari",
    titleB: "shu yerdan boshlanadi",
    subtitle:
      "PharmaNext — O'zbekistonning farma, medtex va deep-tech inkubatori hamda akseleratori. Biz jasur ilmiy g'oyalarni odamlar hayotini yaxshilaydigan kompaniyalarga aylantiramiz.",
    ctaPrimary: "Dasturga ariza topshirish",
    ctaSecondary: "Dasturlarni ko'rish",
    trust: "O'zbekiston Respublikasi Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi tashabbusi",
  },
  stats: [
    { value: "120+", label: "Qo'llab-quvvatlangan loyihalar" },
    { value: "40+", label: "Mentor va sohaviy ekspertlar" },
    { value: "15", label: "Hamkor klinika va laboratoriyalar" },
    { value: "6", label: "Markaziy Osiyo bozorlari" },
  ],
  heroVisual: {
    pharma: "Farma",
    medtech: "MedTex",
    growth: "O'sish",
    startups: "startaplar",
  },
  focusHome: {
    eyebrow: "Yo'nalishlarimiz",
    title: "Biz qo'llab-quvvatlaydigan chuqur texnologiyalar",
    subtitle:
      "Fundamental fandan tortib bozorga tayyor mahsulotgacha — sog'liqni saqlashning eng muhim sohalarida.",
    areas: [
      {
        title: "Farma va Biotex",
        desc: "Dori vositalari, generiklar, biosimilyarlar, klinik tadqiqotlar va GMP ishlab chiqarish.",
        tags: ["Dori ishlab chiqish", "Klinik tadqiqot", "GMP", "Biotexnologiya"],
      },
      {
        title: "MedTex va Raqamli salomatlik",
        desc: "Tibbiy asboblar, diagnostika, telemeditsina va sun'iy intellektga asoslangan sog'liqni saqlash.",
        tags: ["Tibbiy asboblar", "Diagnostika", "Telemeditsina", "Health AI"],
      },
      {
        title: "Deep Tech",
        desc: "Sun'iy intellekt, laboratoriya avtomatlashtirish, yangi materiallar va ilg'or muhandislik.",
        tags: ["AI / ML", "Bioengineering", "Avtomatlashtirish", "Materiallar"],
      },
    ],
  },
  programsHome: {
    eyebrow: "Dasturlar",
    title: "Ikki bosqich — g'oyadan global o'sishgacha",
    subtitle:
      "Loyihangiz qaysi bosqichda bo'lishidan qat'i nazar, sizga mos dastur mavjud.",
    items: [
      {
        tag: "Inkubator",
        name: "G'oyadan MVPgacha",
        duration: "6 oy",
        desc: "Ilmiy g'oya yoki erta bosqichdagi jamoalar uchun. Laboratoriya, mentorlik va dastlabki moliyalashtirish.",
        points: [
          "Laboratoriya va prototiplash infratuzilmasi",
          "Pre-seed grant va moliyalashtirish",
          "Mahsulot va biznes-model mentorligi",
          "Tartibga solish bo'yicha yo'l-yo'riq",
        ],
      },
      {
        tag: "Akselerator",
        name: "Masshtablash va investitsiya",
        duration: "4 oy",
        desc: "Daromad yoki klinik bosqichdagi startaplar uchun. Investorlar, bozorga chiqish va sheriklik.",
        points: [
          "Investorlar va kapital bilan bog'lash",
          "Markaziy Osiyo bozoriga chiqish",
          "Korporativ va klinik sheriklik",
          "Demo Day va keyingi raund moliyalashtirish",
        ],
      },
    ],
    cta: "Dastur tafsilotlari",
  },
  process: {
    eyebrow: "Qanday ishlaydi",
    title: "Arizadan Demo Day'gacha",
    subtitle: "Aniq, shaffof va natijaga yo'naltirilgan jarayon.",
    steps: [
      { num: "01", title: "Ariza", desc: "Onlayn ariza topshiring va g'oyangizni taqdim eting." },
      { num: "02", title: "Tanlov", desc: "Ekspertlar paneli loyihalarni baholaydi va suhbat o'tkazadi." },
      { num: "03", title: "Yaratish", desc: "Mentorlik, laboratoriya va moliyalashtirish bilan mahsulotni rivojlantiring." },
      { num: "04", title: "Masshtablash", desc: "Demo Day'da investorlar va sheriklarga taqdim eting." },
    ],
  },
  why: {
    eyebrow: "Nega PharmaNext",
    title: "Sog'liqni saqlash startapi uchun zarur bo'lgan barcha narsa",
    subtitle:
      "Biz nafaqat moliyalashtiramiz — butun ekotizimni bir joyga jamlaymiz.",
    items: [
      { title: "Tartibga solishda hamrohlik", desc: "Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi bilan ro'yxatdan o'tish va sertifikatlash yo'lida bevosita yordam." },
      { title: "Laboratoriya va klinika", desc: "Tadqiqot laboratoriyalari, klinik bazalar va sinov maydonchalariga kirish." },
      { title: "Kapital va investorlar", desc: "Grantlar, pre-seed va xalqaro investorlar tarmog'i bilan bog'lanish." },
      { title: "Ekspert mentorlik", desc: "Farma, tibbiyot va texnologiya sohasidagi 40+ tajribali mentor." },
      { title: "Bozorga chiqish", desc: "Markaziy Osiyo va undan tashqaridagi bozorlarga strategik kirish." },
      { title: "Global hamkorlik", desc: "Universitetlar, korporatsiyalar va xalqaro tashkilotlar bilan aloqalar." },
    ],
  },
  partners: {
    eyebrow: "Ekotizim",
    title: "Bizning sheriklar va ekotizim",
    names: [
      "Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi",
      "Sog'liqni saqlash vazirligi",
      "Tibbiyot universitetlari",
      "Innovatsion markazlar",
      "Xalqaro investorlar",
      "Klinik bazalar",
    ],
  },
  ctaBand: {
    title: "G'oyangizni hayotni o'zgartiradigan kompaniyaga aylantiring",
    subtitle: "2026-yil oqimiga arizalar ochiq. Joylar cheklangan.",
    primary: "Hozir ariza topshirish",
    secondary: "Biz bilan bog'lanish",
  },
  footer: {
    tagline: "O'zbekistonning farma, medtex va deep-tech inkubatori va akseleratori.",
    parent: "O'zbekiston Respublikasi Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi huzurida.",
    explore: "Bo'limlar",
    contactTitle: "Aloqa",
    address: "111809, Bog'zor ko'chasi 1, Bog'zor, Zangiota tumani, Toshkent viloyati",
    rights: "Barcha huquqlar himoyalangan.",
    builtFor: "Sog'lom kelajak uchun qurilgan.",
    legal: "Huquqiy",
    siteMap: "Sayt xaritasi",
    offer: "Ommaviy oferta",
    privacy: "Maxfiylik siyosati",
  },
  aboutPage: {
    hero: {
      eyebrow: "Biz haqimizda",
      title: "Sog'liqni saqlash innovatsiyalari uchun milliy platforma",
      subtitle:
        "PharmaNext Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi huzurida tashkil etilgan bo'lib, O'zbekistonda farma va tibbiyot texnologiyalari ekotizimini rivojlantirishga xizmat qiladi.",
    },
    mission: {
      title: "Bizning missiyamiz",
      desc: "Ilm-fan, tadbirkorlik va davlat resurslarini birlashtirib, sog'liqni saqlashda dunyo darajasidagi mahalliy kompaniyalarni yaratish.",
    },
    vision: {
      title: "Bizning vizyonimiz",
      desc: "O'zbekistonni Markaziy Osiyoda farma va deep-tech innovatsiyalarining yetakchi markaziga aylantirish.",
    },
    values: {
      title: "Bizning qadriyatlarimiz",
      items: [
        { title: "Ilmiy mukammallik", desc: "Har bir qarorimiz dalil va ilmiy asosga tayanadi." },
        { title: "Inson salomatligi", desc: "Pirovardida hamma narsa bemor va jamiyat manfaati uchun." },
        { title: "Shaffoflik", desc: "Ochiq tanlov, halol baholash va aniq natijalar." },
        { title: "Hamkorlik", desc: "Davlat, akademiya va biznesni bir maqsad atrofida birlashtiramiz." },
      ],
    },
    parentOrg: {
      title: "Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi bilan hamkorlikda",
      desc: "O'zbekiston Respublikasi Tibbiyot va farmatsevtika tarmog'ini rivojlantirish agentligi tibbiyot va farmatsevtika sohasini tartibga soluvchi va rivojlantiruvchi davlat organi hisoblanadi. PharmaNext uning innovatsion qanoti sifatida startaplar va davlat resurslari o'rtasida ko'prik vazifasini bajaradi.",
    },
  },
  programsPage: {
    hero: {
      eyebrow: "Dasturlar",
      title: "G'oyadan global kompaniyagacha bo'lgan yo'l",
      subtitle:
        "Har bir bosqich uchun moslashtirilgan dasturlar, infratuzilma va moliyalashtirish.",
    },
    detail: [
      {
        tag: "Inkubator",
        name: "G'oyadan MVPgacha",
        duration: "6 oy",
        forWhom: "Ilmiy g'oyalar, tadqiqotchilar va erta bosqichdagi jamoalar uchun",
        desc: "Inkubator dasturi g'oyangizni ishlaydigan prototip va validatsiyalangan biznes-modelga aylantirishga yordam beradi.",
        benefits: [
          "Pre-seed grant va boshlang'ich moliyalashtirish",
          "Tadqiqot laboratoriyasi va prototiplash uskunalari",
          "Haftalik mentorlik va mahsulot ustaxonalari",
          "Tartibga solish va intellektual mulk bo'yicha maslahat",
          "Jamoa va asoschilarni rivojlantirish",
        ],
      },
      {
        tag: "Akselerator",
        name: "Masshtablash va investitsiya",
        duration: "4 oy",
        forWhom: "Daromad yoki klinik bosqichdagi startaplar uchun",
        desc: "Akselerator dasturi tayyor mahsulotingizni bozorga olib chiqish va o'sishni tezlashtirishga qaratilgan.",
        benefits: [
          "Investorlar va venchur kapital bilan bog'lash",
          "Markaziy Osiyo bozoriga kirish strategiyasi",
          "Korporativ va klinik pilot loyihalar",
          "Sotuv, marketing va eksport qo'llab-quvvatlash",
          "Demo Day va keyingi raund tayyorgarligi",
        ],
      },
    ],
    eligibility: {
      title: "Kimlar ariza topshirishi mumkin",
      items: [
        "Farma, medtex yoki deep-tech sohasidagi jamoalar",
        "O'zbekistonda ishlash niyatida bo'lgan asoschilar",
        "Aniq muammoni hal qiladigan ilmiy yoki texnologik g'oya",
        "Vaqtini to'liq bag'ishlashga tayyor jamoa",
      ],
    },
    cta: "Ariza topshirish",
  },
  focusPage: {
    hero: {
      eyebrow: "Yo'nalishlar",
      title: "E'tibor qaratadigan sohalarimiz",
      subtitle:
        "Eng katta ta'sir ko'rsatadigan va O'zbekiston uchun strategik bo'lgan chuqur texnologiya sohalari.",
    },
    areas: [
      {
        title: "Farma va Biotex",
        desc: "Yangi va arzon dori vositalari, biotexnologiya hamda mahalliy ishlab chiqarishni rivojlantirish.",
        items: [
          "Dori vositalarini ishlab chiqish va reformulyatsiya",
          "Generiklar va biosimilyarlar",
          "Klinik tadqiqotlar va sinovlar",
          "GMP standartidagi ishlab chiqarish",
          "Tabiiy mahsulotlar va fitofarmatsevtika",
        ],
      },
      {
        title: "MedTex va Raqamli salomatlik",
        desc: "Tibbiy asboblar, diagnostika va bemorga yo'naltirilgan raqamli yechimlar.",
        items: [
          "Tibbiy asbob-uskunalar va qurilmalar",
          "Diagnostika va laborator yechimlar",
          "Telemeditsina va masofaviy monitoring",
          "Elektron sog'liqni saqlash va ma'lumotlar",
          "Sun'iy intellektga asoslangan tashxis",
        ],
      },
      {
        title: "Deep Tech",
        desc: "Sog'liqni saqlashni o'zgartiruvchi ilg'or fan va muhandislik.",
        items: [
          "Sun'iy intellekt va mashinali o'rganish",
          "Bioinformatika va genomika",
          "Laboratoriya avtomatlashtirish va robototexnika",
          "Yangi materiallar va nanotexnologiya",
          "Sog'liqni saqlash ma'lumotlari platformalari",
        ],
      },
    ],
  },
  startupsPage: {
    hero: {
      eyebrow: "Startaplar",
      title: "Bizning ekotizimdagi loyihalar",
      subtitle:
        "PharmaNext qo'llab-quvvatlayotgan jamoalar bilan tanishing. Ro'yxat doimiy yangilanib boriladi.",
    },
    note: "Hozirda PharmaNext ekotizimidagi loyihalar.",
    items: [
      { name: "MolGenix AI", sector: "Deep Tech", desc: "Dori kashfiyotini tezlashtiruvchi molekulyar va genomik tahlil uchun AI platforma." },
      { name: "Medical Sterilization Hub", sector: "MedTex", desc: "Klinika va shifoxonalar uchun markazlashtirilgan sterilizatsiya yechimlari va uskunalari." },
      { name: "Amnio-test", sector: "MedTex", desc: "Homila kasalliklarini erta aniqlash uchun prenatal diagnostika testlari." },
      { name: "TAOS", sector: "Deep Tech", desc: "Sifatli tibbiy yordamga kirishni yaxshilovchi texnologiyaga asoslangan loyiha." },
      { name: "AcquiLAB", sector: "Deep Tech", desc: "Tadqiqot laboratoriyalari uchun ma'lumotlarni yig'ish va avtomatlashtirish vositalari." },
      { name: "XavfsizDori", sector: "Farma", desc: "Soxta dorilarga qarshi dori autentifikatsiyasi va xavfsizlik platformasi." },
      { name: "FITCAPS AI", sector: "Raqamli salomatlik", desc: "Shaxsiy ehtiyojlarga moslashtirilgan, AI yordamida shaxsiylashtirilgan nutritsevtik kapsulalar." },
      { name: "CALMBIT", sector: "Raqamli salomatlik", desc: "Stress, uyqu va hissiy salomatlik uchun raqamli ruhiy sog'lomlik ilovasi." },
      { name: "ElectroReboot", sector: "MedTex", desc: "Reabilitatsiya va tiklanish uchun elektroterapiya va neyrostimulyatsiya qurilmalari." },
    ],
    joinTitle: "Ushbu ro'yxatda o'z startapingizni ko'rishni xohlaysizmi?",
    joinDesc: "Keyingi oqimga ariza topshiring va ekotizimimizga qo'shiling.",
    joinCta: "Ariza topshirish",
  },
  applyPage: {
    hero: {
      eyebrow: "Ariza topshirish",
      title: "Keyingi oqimga qo'shiling",
      subtitle:
        "Bir nechta daqiqada arizangizni topshiring. Bizning jamoamiz har bir loyihani diqqat bilan ko'rib chiqadi.",
    },
    lookingFor: {
      title: "Biz nimani izlaymiz",
      items: [
        "Aniq muammoni hal qiladigan kuchli g'oya",
        "Ilmiy yoki texnologik asos",
        "Sodiq va qobiliyatli jamoa",
        "O'sish va ta'sir ko'rsatish salohiyati",
      ],
    },
    form: {
      title: "Ariza shakli",
      name: "To'liq ism",
      email: "Elektron pochta",
      phone: "Telefon raqami",
      startup: "Startap / loyiha nomi",
      sector: "Yo'nalish",
      sectorOptions: ["Farma va Biotex", "MedTex va Raqamli salomatlik", "Deep Tech", "Boshqa"],
      stage: "Loyiha bosqichi",
      stageOptions: ["G'oya", "Prototip / MVP", "Daromad bor", "Masshtablashtirish"],
      message: "Loyihangiz haqida qisqacha",
      messagePlaceholder: "Qanday muammoni hal qilyapsiz va yechimingiz nimadan iborat?",
      submit: "Arizani yuborish",
      success: "Rahmat! Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
      required: "Majburiy maydon",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Aloqa",
      title: "Keling, suhbatlashamiz",
      subtitle:
        "Savollaringiz bormi yoki hamkorlik qilmoqchimisiz? Biz bilan bog'laning.",
    },
    channels: [
      { label: "Elektron pochta", value: "info@pharmanext.uz" },
      { label: "Telefon", value: "+998 71 200 00 00" },
      { label: "Manzil", value: "111809, Bog'zor ko'chasi 1, Bog'zor, Zangiota tumani, Toshkent viloyati" },
    ],
    formTitle: "Xabar yuborish",
    name: "Ismingiz",
    email: "Elektron pochta",
    subject: "Mavzu",
    message: "Xabar",
    submit: "Yuborish",
    success: "Rahmat! Xabaringiz yuborildi.",
  },
};

export type Dictionary = typeof uz;

const ru: Dictionary = {
  brand: {
    name: "PharmaNext",
    parent: "При Агентстве по развитию медицинской и фармацевтической отрасли",
  },
  nav: {
    home: "Главная",
    about: "О нас",
    programs: "Программы",
    focus: "Направления",
    startups: "Стартапы",
    contact: "Контакты",
    apply: "Подать заявку",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  hero: {
    badge: "Приём заявок на поток 2026 открыт",
    titleA: "Новое поколение",
    titleHighlight: "инноваций в здравоохранении",
    titleB: "начинается здесь",
    subtitle:
      "PharmaNext — это фарма-, медтех- и deep-tech инкубатор и акселератор Узбекистана. Мы превращаем смелые научные идеи в компании, улучшающие жизнь людей.",
    ctaPrimary: "Подать заявку в программу",
    ctaSecondary: "Смотреть программы",
    trust: "Инициатива Агентства по развитию медицинской и фармацевтической отрасли Республики Узбекистан",
  },
  stats: [
    { value: "120+", label: "Поддержанных проектов" },
    { value: "40+", label: "Менторов и отраслевых экспертов" },
    { value: "15", label: "Партнёрских клиник и лабораторий" },
    { value: "6", label: "Рынков Центральной Азии" },
  ],
  heroVisual: {
    pharma: "Фарма",
    medtech: "МедТех",
    growth: "Рост",
    startups: "стартапы",
  },
  focusHome: {
    eyebrow: "Наши направления",
    title: "Глубокие технологии, которые мы поддерживаем",
    subtitle:
      "От фундаментальной науки до готового продукта — в важнейших областях здравоохранения.",
    areas: [
      {
        title: "Фарма и Биотех",
        desc: "Разработка лекарств, дженерики, биосимиляры, клинические исследования и GMP-производство.",
        tags: ["Разработка лекарств", "Клинические исследования", "GMP", "Биотех"],
      },
      {
        title: "МедТех и Цифровое здоровье",
        desc: "Медицинские устройства, диагностика, телемедицина и здравоохранение на основе ИИ.",
        tags: ["Мед. устройства", "Диагностика", "Телемедицина", "Health AI"],
      },
      {
        title: "Deep Tech",
        desc: "Искусственный интеллект, лабораторная автоматизация, новые материалы и передовая инженерия.",
        tags: ["AI / ML", "Биоинженерия", "Автоматизация", "Материалы"],
      },
    ],
  },
  programsHome: {
    eyebrow: "Программы",
    title: "Два этапа — от идеи до глобального роста",
    subtitle: "Независимо от стадии вашего проекта, у нас есть подходящая программа.",
    items: [
      {
        tag: "Инкубатор",
        name: "От идеи до MVP",
        duration: "6 месяцев",
        desc: "Для научных идей и команд ранней стадии. Лаборатория, менторство и первичное финансирование.",
        points: [
          "Лаборатория и инфраструктура для прототипирования",
          "Pre-seed грант и финансирование",
          "Менторство по продукту и бизнес-модели",
          "Сопровождение по регуляторным вопросам",
        ],
      },
      {
        tag: "Акселератор",
        name: "Масштабирование и инвестиции",
        duration: "4 месяца",
        desc: "Для стартапов на стадии выручки или клиники. Инвесторы, выход на рынок и партнёрства.",
        points: [
          "Связь с инвесторами и капиталом",
          "Выход на рынок Центральной Азии",
          "Корпоративные и клинические партнёрства",
          "Demo Day и финансирование следующего раунда",
        ],
      },
    ],
    cta: "Подробнее о программе",
  },
  process: {
    eyebrow: "Как это работает",
    title: "От заявки до Demo Day",
    subtitle: "Понятный, прозрачный и ориентированный на результат процесс.",
    steps: [
      { num: "01", title: "Заявка", desc: "Подайте онлайн-заявку и представьте свою идею." },
      { num: "02", title: "Отбор", desc: "Экспертная панель оценивает проекты и проводит интервью." },
      { num: "03", title: "Создание", desc: "Развивайте продукт с менторством, лабораторией и финансированием." },
      { num: "04", title: "Масштаб", desc: "Представьте проект инвесторам и партнёрам на Demo Day." },
    ],
  },
  why: {
    eyebrow: "Почему PharmaNext",
    title: "Всё необходимое для стартапа в здравоохранении",
    subtitle: "Мы не просто финансируем — мы собираем всю экосистему в одном месте.",
    items: [
      { title: "Регуляторное сопровождение", desc: "Прямая помощь в регистрации и сертификации вместе с Агентством по развитию медицинской и фармацевтической отрасли." },
      { title: "Лаборатории и клиники", desc: "Доступ к исследовательским лабораториям, клиническим базам и площадкам для испытаний." },
      { title: "Капитал и инвесторы", desc: "Гранты, pre-seed и сеть международных инвесторов." },
      { title: "Экспертное менторство", desc: "Более 40 опытных менторов в фарме, медицине и технологиях." },
      { title: "Выход на рынок", desc: "Стратегический доступ к рынкам Центральной Азии и за её пределами." },
      { title: "Глобальные партнёрства", desc: "Связи с университетами, корпорациями и международными организациями." },
    ],
  },
  partners: {
    eyebrow: "Экосистема",
    title: "Наши партнёры и экосистема",
    names: [
      "Агентство по развитию медицинской и фармацевтической отрасли",
      "Министерство здравоохранения",
      "Медицинские университеты",
      "Инновационные центры",
      "Международные инвесторы",
      "Клинические базы",
    ],
  },
  ctaBand: {
    title: "Превратите идею в компанию, меняющую жизни",
    subtitle: "Приём заявок на поток 2026 открыт. Количество мест ограничено.",
    primary: "Подать заявку сейчас",
    secondary: "Связаться с нами",
  },
  footer: {
    tagline: "Фарма-, медтех- и deep-tech инкубатор и акселератор Узбекистана.",
    parent: "При Агентстве по развитию медицинской и фармацевтической отрасли Республики Узбекистан.",
    explore: "Разделы",
    contactTitle: "Контакты",
    address: "111809, ул. Богзор 1, Богзор, Зангиатинский район, Ташкентская область",
    rights: "Все права защищены.",
    builtFor: "Создано для здорового будущего.",
    legal: "Правовое",
    siteMap: "Карта сайта",
    offer: "Публичная оферта",
    privacy: "Политика конфиденциальности",
  },
  aboutPage: {
    hero: {
      eyebrow: "О нас",
      title: "Национальная платформа для инноваций в здравоохранении",
      subtitle:
        "PharmaNext создан при Агентстве по развитию медицинской и фармацевтической отрасли и служит развитию экосистемы фармацевтики и медицинских технологий в Узбекистане.",
    },
    mission: {
      title: "Наша миссия",
      desc: "Объединять науку, предпринимательство и государственные ресурсы для создания локальных компаний мирового уровня в здравоохранении.",
    },
    vision: {
      title: "Наше видение",
      desc: "Сделать Узбекистан ведущим центром фарма- и deep-tech инноваций в Центральной Азии.",
    },
    values: {
      title: "Наши ценности",
      items: [
        { title: "Научное превосходство", desc: "Каждое решение опирается на доказательства и науку." },
        { title: "Здоровье человека", desc: "В конечном счёте всё ради блага пациента и общества." },
        { title: "Прозрачность", desc: "Открытый отбор, честная оценка и понятные результаты." },
        { title: "Партнёрство", desc: "Объединяем государство, академию и бизнес вокруг общей цели." },
      ],
    },
    parentOrg: {
      title: "В партнёрстве с Агентством по развитию медицинской и фармацевтической отрасли",
      desc: "Агентство по развитию медицинской и фармацевтической отрасли Республики Узбекистан — государственный орган, регулирующий и развивающий медицинскую и фармацевтическую сферу. PharmaNext выступает его инновационным крылом, соединяя стартапы и государственные ресурсы.",
    },
  },
  programsPage: {
    hero: {
      eyebrow: "Программы",
      title: "Путь от идеи до глобальной компании",
      subtitle: "Программы, инфраструктура и финансирование, адаптированные под каждый этап.",
    },
    detail: [
      {
        tag: "Инкубатор",
        name: "От идеи до MVP",
        duration: "6 месяцев",
        forWhom: "Для научных идей, исследователей и команд ранней стадии",
        desc: "Программа инкубатора помогает превратить вашу идею в работающий прототип и проверенную бизнес-модель.",
        benefits: [
          "Pre-seed грант и стартовое финансирование",
          "Исследовательская лаборатория и оборудование для прототипирования",
          "Еженедельное менторство и продуктовые воркшопы",
          "Консультации по регуляторике и интеллектуальной собственности",
          "Развитие команды и основателей",
        ],
      },
      {
        tag: "Акселератор",
        name: "Масштабирование и инвестиции",
        duration: "4 месяца",
        forWhom: "Для стартапов на стадии выручки или клиники",
        desc: "Программа акселератора направлена на вывод готового продукта на рынок и ускорение роста.",
        benefits: [
          "Связь с инвесторами и венчурным капиталом",
          "Стратегия выхода на рынок Центральной Азии",
          "Корпоративные и клинические пилотные проекты",
          "Поддержка продаж, маркетинга и экспорта",
          "Подготовка к Demo Day и следующему раунду",
        ],
      },
    ],
    eligibility: {
      title: "Кто может подать заявку",
      items: [
        "Команды в сфере фармы, медтеха или deep-tech",
        "Основатели, намеренные работать в Узбекистане",
        "Научная или технологическая идея, решающая чёткую проблему",
        "Команда, готовая полностью посвятить себя проекту",
      ],
    },
    cta: "Подать заявку",
  },
  focusPage: {
    hero: {
      eyebrow: "Направления",
      title: "Сферы нашего внимания",
      subtitle:
        "Области глубоких технологий с наибольшим влиянием и стратегическим значением для Узбекистана.",
    },
    areas: [
      {
        title: "Фарма и Биотех",
        desc: "Новые и доступные лекарства, биотехнологии и развитие локального производства.",
        items: [
          "Разработка и реформулирование лекарств",
          "Дженерики и биосимиляры",
          "Клинические исследования и испытания",
          "Производство по стандарту GMP",
          "Натуральные продукты и фитофармацевтика",
        ],
      },
      {
        title: "МедТех и Цифровое здоровье",
        desc: "Медицинские устройства, диагностика и цифровые решения, ориентированные на пациента.",
        items: [
          "Медицинское оборудование и устройства",
          "Диагностика и лабораторные решения",
          "Телемедицина и удалённый мониторинг",
          "Электронное здравоохранение и данные",
          "Диагностика на основе ИИ",
        ],
      },
      {
        title: "Deep Tech",
        desc: "Передовая наука и инженерия, меняющие здравоохранение.",
        items: [
          "Искусственный интеллект и машинное обучение",
          "Биоинформатика и геномика",
          "Лабораторная автоматизация и робототехника",
          "Новые материалы и нанотехнологии",
          "Платформы данных в здравоохранении",
        ],
      },
    ],
  },
  startupsPage: {
    hero: {
      eyebrow: "Стартапы",
      title: "Проекты нашей экосистемы",
      subtitle:
        "Познакомьтесь с командами, которые поддерживает PharmaNext. Список постоянно обновляется.",
    },
    note: "Проекты, входящие в экосистему PharmaNext.",
    items: [
      { name: "MolGenix AI", sector: "Deep Tech", desc: "ИИ-платформа для молекулярного и геномного анализа, ускоряющая разработку лекарств." },
      { name: "Medical Sterilization Hub", sector: "МедТех", desc: "Централизованные решения и оборудование для стерилизации для клиник и больниц." },
      { name: "Amnio-test", sector: "МедТех", desc: "Пренатальная диагностика для раннего выявления патологий плода." },
      { name: "TAOS", sector: "Deep Tech", desc: "Технологический проект, улучшающий доступ к качественной медицинской помощи." },
      { name: "AcquiLAB", sector: "Deep Tech", desc: "Инструменты сбора данных и автоматизации для исследовательских лабораторий." },
      { name: "XavfsizDori", sector: "Фарма", desc: "Платформа аутентификации и безопасности лекарств для борьбы с подделками." },
      { name: "FITCAPS AI", sector: "Цифровое здоровье", desc: "Нутрицевтические капсулы с ИИ-персонализацией под индивидуальные потребности." },
      { name: "CALMBIT", sector: "Цифровое здоровье", desc: "Цифровое приложение для ментального здоровья: стресс, сон и эмоции." },
      { name: "ElectroReboot", sector: "МедТех", desc: "Устройства электротерапии и нейростимуляции для реабилитации и восстановления." },
    ],
    joinTitle: "Хотите увидеть свой стартап в этом списке?",
    joinDesc: "Подайте заявку на следующий поток и присоединяйтесь к нашей экосистеме.",
    joinCta: "Подать заявку",
  },
  applyPage: {
    hero: {
      eyebrow: "Подать заявку",
      title: "Присоединяйтесь к следующему потоку",
      subtitle:
        "Подайте заявку за несколько минут. Наша команда внимательно рассмотрит каждый проект.",
    },
    lookingFor: {
      title: "Что мы ищем",
      items: [
        "Сильная идея, решающая чёткую проблему",
        "Научная или технологическая основа",
        "Преданная и способная команда",
        "Потенциал роста и влияния",
      ],
    },
    form: {
      title: "Форма заявки",
      name: "Полное имя",
      email: "Электронная почта",
      phone: "Номер телефона",
      startup: "Название стартапа / проекта",
      sector: "Направление",
      sectorOptions: ["Фарма и Биотех", "МедТех и Цифровое здоровье", "Deep Tech", "Другое"],
      stage: "Стадия проекта",
      stageOptions: ["Идея", "Прототип / MVP", "Есть выручка", "Масштабирование"],
      message: "Кратко о вашем проекте",
      messagePlaceholder: "Какую проблему вы решаете и в чём ваше решение?",
      submit: "Отправить заявку",
      success: "Спасибо! Ваша заявка принята. Мы скоро свяжемся с вами.",
      required: "Обязательное поле",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Контакты",
      title: "Давайте поговорим",
      subtitle: "Есть вопросы или хотите сотрудничать? Свяжитесь с нами.",
    },
    channels: [
      { label: "Электронная почта", value: "info@pharmanext.uz" },
      { label: "Телефон", value: "+998 71 200 00 00" },
      { label: "Адрес", value: "111809, ул. Богзор 1, Богзор, Зангиатинский район, Ташкентская область" },
    ],
    formTitle: "Отправить сообщение",
    name: "Ваше имя",
    email: "Электронная почта",
    subject: "Тема",
    message: "Сообщение",
    submit: "Отправить",
    success: "Спасибо! Ваше сообщение отправлено.",
  },
};

const en: Dictionary = {
  brand: {
    name: "PharmaNext",
    parent: "Under the Agency for Medical and Pharmaceutical Industry Development",
  },
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    focus: "Focus Areas",
    startups: "Startups",
    contact: "Contact",
    apply: "Apply",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Applications open for the 2026 cohort",
    titleA: "The next generation of",
    titleHighlight: "health innovation",
    titleB: "starts here",
    subtitle:
      "PharmaNext is Uzbekistan's pharma, medtech and deep-tech incubator and accelerator. We turn bold science into companies that improve lives.",
    ctaPrimary: "Apply to the program",
    ctaSecondary: "Explore programs",
    trust: "An initiative of the Agency for Medical and Pharmaceutical Industry Development of the Republic of Uzbekistan",
  },
  stats: [
    { value: "120+", label: "Projects supported" },
    { value: "40+", label: "Mentors & industry experts" },
    { value: "15", label: "Partner clinics & labs" },
    { value: "6", label: "Central Asian markets" },
  ],
  heroVisual: {
    pharma: "Pharma",
    medtech: "MedTech",
    growth: "Growth",
    startups: "startups",
  },
  focusHome: {
    eyebrow: "Our focus",
    title: "The deep technologies we back",
    subtitle: "From fundamental science to market-ready products — across the areas that matter most for health.",
    areas: [
      {
        title: "Pharma & Biotech",
        desc: "Drug development, generics, biosimilars, clinical research and GMP manufacturing.",
        tags: ["Drug development", "Clinical research", "GMP", "Biotech"],
      },
      {
        title: "MedTech & Digital Health",
        desc: "Medical devices, diagnostics, telemedicine and AI-driven healthcare.",
        tags: ["Medical devices", "Diagnostics", "Telemedicine", "Health AI"],
      },
      {
        title: "Deep Tech",
        desc: "Artificial intelligence, lab automation, novel materials and frontier engineering.",
        tags: ["AI / ML", "Bioengineering", "Automation", "Materials"],
      },
    ],
  },
  programsHome: {
    eyebrow: "Programs",
    title: "Two stages — from idea to global growth",
    subtitle: "Whatever stage your venture is at, there's a program built for it.",
    items: [
      {
        tag: "Incubator",
        name: "Idea to MVP",
        duration: "6 months",
        desc: "For scientific ideas and early-stage teams. Lab access, mentorship and initial funding.",
        points: [
          "Lab and prototyping infrastructure",
          "Pre-seed grant and funding",
          "Product and business-model mentorship",
          "Regulatory guidance",
        ],
      },
      {
        tag: "Accelerator",
        name: "Scale & invest",
        duration: "4 months",
        desc: "For revenue- or clinical-stage startups. Investors, market entry and partnerships.",
        points: [
          "Connections to investors and capital",
          "Entry into the Central Asian market",
          "Corporate and clinical partnerships",
          "Demo Day and follow-on funding",
        ],
      },
    ],
    cta: "Program details",
  },
  process: {
    eyebrow: "How it works",
    title: "From application to Demo Day",
    subtitle: "A clear, transparent and results-driven process.",
    steps: [
      { num: "01", title: "Apply", desc: "Submit an online application and pitch your idea." },
      { num: "02", title: "Select", desc: "An expert panel evaluates projects and conducts interviews." },
      { num: "03", title: "Build", desc: "Develop your product with mentorship, lab access and funding." },
      { num: "04", title: "Scale", desc: "Pitch to investors and partners at Demo Day." },
    ],
  },
  why: {
    eyebrow: "Why PharmaNext",
    title: "Everything a health startup needs, in one place",
    subtitle: "We don't just fund — we bring the entire ecosystem together.",
    items: [
      { title: "Regulatory navigation", desc: "Direct support with registration and certification together with the Agency for Medical and Pharmaceutical Industry Development." },
      { title: "Labs & clinics", desc: "Access to research labs, clinical sites and testing grounds." },
      { title: "Capital & investors", desc: "Grants, pre-seed and a network of international investors." },
      { title: "Expert mentorship", desc: "40+ experienced mentors across pharma, medicine and technology." },
      { title: "Market access", desc: "Strategic entry into Central Asia and beyond." },
      { title: "Global partnerships", desc: "Ties with universities, corporations and international organizations." },
    ],
  },
  partners: {
    eyebrow: "Ecosystem",
    title: "Our partners & ecosystem",
    names: [
      "Agency for Medical and Pharmaceutical Industry Development",
      "Ministry of Health",
      "Medical universities",
      "Innovation centers",
      "International investors",
      "Clinical sites",
    ],
  },
  ctaBand: {
    title: "Turn your idea into a life-changing company",
    subtitle: "Applications for the 2026 cohort are open. Places are limited.",
    primary: "Apply now",
    secondary: "Get in touch",
  },
  footer: {
    tagline: "Uzbekistan's pharma, medtech and deep-tech incubator and accelerator.",
    parent: "Under the Agency for Medical and Pharmaceutical Industry Development of the Republic of Uzbekistan.",
    explore: "Explore",
    contactTitle: "Contact",
    address: "111809, 1 Bogzor street, Bogzor, Zangiota district, Tashkent region",
    rights: "All rights reserved.",
    builtFor: "Built for a healthier future.",
    legal: "Legal",
    siteMap: "Site map",
    offer: "Public offer",
    privacy: "Privacy policy",
  },
  aboutPage: {
    hero: {
      eyebrow: "About us",
      title: "A national platform for health innovation",
      subtitle:
        "PharmaNext was established under the Agency for Medical and Pharmaceutical Industry Development to grow Uzbekistan's pharmaceutical and medical-technology ecosystem.",
    },
    mission: {
      title: "Our mission",
      desc: "To combine science, entrepreneurship and public resources to build world-class local companies in healthcare.",
    },
    vision: {
      title: "Our vision",
      desc: "To make Uzbekistan the leading hub for pharma and deep-tech innovation in Central Asia.",
    },
    values: {
      title: "Our values",
      items: [
        { title: "Scientific excellence", desc: "Every decision is grounded in evidence and science." },
        { title: "Human health", desc: "Ultimately, everything serves the patient and society." },
        { title: "Transparency", desc: "Open selection, fair evaluation and clear outcomes." },
        { title: "Partnership", desc: "We unite government, academia and business around one goal." },
      ],
    },
    parentOrg: {
      title: "In partnership with the Agency for Medical and Pharmaceutical Industry Development",
      desc: "The Agency for Medical and Pharmaceutical Industry Development of the Republic of Uzbekistan is the state body that regulates and develops the medical and pharmaceutical sector. PharmaNext acts as its innovation arm, bridging startups and public resources.",
    },
  },
  programsPage: {
    hero: {
      eyebrow: "Programs",
      title: "The path from idea to global company",
      subtitle: "Programs, infrastructure and funding tailored to every stage.",
    },
    detail: [
      {
        tag: "Incubator",
        name: "Idea to MVP",
        duration: "6 months",
        forWhom: "For scientific ideas, researchers and early-stage teams",
        desc: "The incubator program helps you turn your idea into a working prototype and a validated business model.",
        benefits: [
          "Pre-seed grant and initial funding",
          "Research lab and prototyping equipment",
          "Weekly mentorship and product workshops",
          "Regulatory and intellectual-property advice",
          "Team and founder development",
        ],
      },
      {
        tag: "Accelerator",
        name: "Scale & invest",
        duration: "4 months",
        forWhom: "For revenue- or clinical-stage startups",
        desc: "The accelerator program focuses on taking your ready product to market and accelerating growth.",
        benefits: [
          "Connections to investors and venture capital",
          "Central Asia market-entry strategy",
          "Corporate and clinical pilot projects",
          "Sales, marketing and export support",
          "Demo Day and next-round preparation",
        ],
      },
    ],
    eligibility: {
      title: "Who can apply",
      items: [
        "Teams in pharma, medtech or deep-tech",
        "Founders intending to operate in Uzbekistan",
        "A scientific or technological idea solving a clear problem",
        "A team ready to commit full-time",
      ],
    },
    cta: "Apply now",
  },
  focusPage: {
    hero: {
      eyebrow: "Focus areas",
      title: "The fields we focus on",
      subtitle:
        "Deep-technology areas with the greatest impact and strategic value for Uzbekistan.",
    },
    areas: [
      {
        title: "Pharma & Biotech",
        desc: "New and affordable medicines, biotechnology and the growth of local manufacturing.",
        items: [
          "Drug development and reformulation",
          "Generics and biosimilars",
          "Clinical research and trials",
          "GMP-standard manufacturing",
          "Natural products and phytopharmaceuticals",
        ],
      },
      {
        title: "MedTech & Digital Health",
        desc: "Medical devices, diagnostics and patient-centric digital solutions.",
        items: [
          "Medical equipment and devices",
          "Diagnostics and lab solutions",
          "Telemedicine and remote monitoring",
          "eHealth and health data",
          "AI-driven diagnosis",
        ],
      },
      {
        title: "Deep Tech",
        desc: "Frontier science and engineering that reshape healthcare.",
        items: [
          "Artificial intelligence and machine learning",
          "Bioinformatics and genomics",
          "Lab automation and robotics",
          "Novel materials and nanotechnology",
          "Healthcare data platforms",
        ],
      },
    ],
  },
  startupsPage: {
    hero: {
      eyebrow: "Startups",
      title: "Ventures in our ecosystem",
      subtitle:
        "Meet the teams PharmaNext supports. This list is updated continuously.",
    },
    note: "Ventures currently part of the PharmaNext ecosystem.",
    items: [
      { name: "MolGenix AI", sector: "Deep Tech", desc: "An AI platform for molecular and genomic analysis that accelerates drug discovery." },
      { name: "Medical Sterilization Hub", sector: "MedTech", desc: "Centralized sterilization solutions and equipment for clinics and hospitals." },
      { name: "Amnio-test", sector: "MedTech", desc: "Prenatal diagnostic testing for early detection of fetal conditions." },
      { name: "TAOS", sector: "Deep Tech", desc: "A technology-driven venture improving access to quality healthcare." },
      { name: "AcquiLAB", sector: "Deep Tech", desc: "Laboratory data acquisition and automation tools for research labs." },
      { name: "XavfsizDori", sector: "Pharma", desc: "A drug authentication and safety platform to fight counterfeit medicines." },
      { name: "FITCAPS AI", sector: "Digital Health", desc: "AI-personalized nutraceutical capsules tailored to individual health needs." },
      { name: "CALMBIT", sector: "Digital Health", desc: "A digital mental-wellness app for stress, sleep and emotional health." },
      { name: "ElectroReboot", sector: "MedTech", desc: "Electrotherapy and neurostimulation devices for rehabilitation and recovery." },
    ],
    joinTitle: "Want to see your startup on this list?",
    joinDesc: "Apply to the next cohort and join our ecosystem.",
    joinCta: "Apply now",
  },
  applyPage: {
    hero: {
      eyebrow: "Apply",
      title: "Join the next cohort",
      subtitle:
        "Submit your application in a few minutes. Our team reviews every project carefully.",
    },
    lookingFor: {
      title: "What we look for",
      items: [
        "A strong idea that solves a clear problem",
        "A scientific or technological foundation",
        "A committed and capable team",
        "Potential for growth and impact",
      ],
    },
    form: {
      title: "Application form",
      name: "Full name",
      email: "Email",
      phone: "Phone number",
      startup: "Startup / project name",
      sector: "Focus area",
      sectorOptions: ["Pharma & Biotech", "MedTech & Digital Health", "Deep Tech", "Other"],
      stage: "Project stage",
      stageOptions: ["Idea", "Prototype / MVP", "Has revenue", "Scaling"],
      message: "Tell us about your project",
      messagePlaceholder: "What problem are you solving and what is your solution?",
      submit: "Submit application",
      success: "Thank you! Your application has been received. We'll be in touch soon.",
      required: "Required field",
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's talk",
      subtitle: "Have questions or want to partner with us? Get in touch.",
    },
    channels: [
      { label: "Email", value: "info@pharmanext.uz" },
      { label: "Phone", value: "+998 71 200 00 00" },
      { label: "Address", value: "111809, 1 Bogzor street, Bogzor, Zangiota district, Tashkent region" },
    ],
    formTitle: "Send a message",
    name: "Your name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    submit: "Send",
    success: "Thank you! Your message has been sent.",
  },
};

export const translations: Record<Locale, Dictionary> = { uz, ru, en };
