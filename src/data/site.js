// ---------------------------------------------------------------------------
// WOLFSE — Global site configuration & content data
// Tek kaynak (single source of truth). Tüm sayfalar bu veriden üretilir.
// Gerçek olmayan veriler TODO ile işaretlenmiştir; uydurma yapılmaz.
// ---------------------------------------------------------------------------

export const site = {
  brand: "WOLFSE",
  legalName: "WOLFSE", // TODO: resmi ünvan girilecek (ör. WOLFSE Metal San. ve Tic. Ltd. Şti.)
  domain: "https://www.wolfse.net",
  lang: "tr",
  locale: "tr_TR",
  // Seçilen ana slogan (gerekçe README ve marka notlarında açıklanmıştır)
  slogan: "Metalde Keskin Güç",
  tagline: "Lazer Kesimde Hız, Hassasiyet ve Güven",
  description:
    "WOLFSE; İzmir merkezli CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, abkant büküm ve kaynaklı imalat süreçlerinde hızlı teklif, hassas üretim ve güvenilir teslimat sunan modern B2B metal işleme partneridir.",
  descriptionEn:
    "WOLFSE is an İzmir (Türkiye) based metal processing and laser cutting company providing CNC fiber laser cutting, sheet metal laser cutting, tube and profile laser cutting, CNC press brake bending, welded fabrication and custom metal manufacturing services for industrial customers.",

  // İletişim — gerçek bilgi gelene kadar placeholder
  contact: {
    phoneDisplay: "0 (535) 699 72 73",
    phoneHref: "+905356997273",
    whatsappNumber: "905356997273",
    email: "erol@wolfse.net", // TODO: gerçek e-posta doğrulanacak
    salesEmail: "erol@wolfse.net", // TODO: gerçek e-posta doğrulanacak
    addressLine: "TODO: açık adres girilecek",
    district: "TODO: ilçe",
    city: "İzmir",
    postalCode: "TODO",
    country: "Türkiye",
    countryCode: "TR",
    // GeoCoordinates placeholder — gerçek koordinat gelince doldurulacak
    geo: { lat: "TODO", lng: "TODO" },
    mapsEmbed: "", // TODO: Google Maps embed URL
    workingHours: "Pazartesi–Cumartesi 08:30–18:00", // TODO: gerçek çalışma saatleri doğrulanacak
  },

  social: {
    linkedin: "", // TODO: LinkedIn URL
    instagram: "", // TODO: Instagram URL
    youtube: "", // TODO: YouTube URL
  },

  // Dönüşüm/analitik placeholder kimlikleri (gerçek ID gelince doldurulacak)
  analytics: {
    ga4: "G-XXXXXXXXXX", // TODO: GA4 Measurement ID
    googleAdsConversionId: "AW-XXXXXXXXXX", // TODO
    googleAdsConversionLabel: "XXXXXXXX", // TODO
    metaPixelId: "XXXXXXXXXXXXXXX", // TODO: Meta Pixel ID
    linkedinPartnerId: "XXXXXXX", // TODO: LinkedIn Insight Partner ID
  },

  // Form gönderim endpoint'i (CRM/e-posta entegrasyonuna hazır)
  // Boş bırakılırsa form mailto fallback ile çalışır.
  formEndpoint: "", // TODO: form backend / Formspree / API endpoint URL
  // Cloudflare Turnstile veya reCAPTCHA site anahtarı
  turnstileSiteKey: "", // TODO: Cloudflare Turnstile site key (önerilen)

  // IndexNow anahtarı (Bing/Yandex'e anlık güncelleme bildirimi için).
  // Boş bırakılabilir; INDEXNOW_KEY ortam değişkeni de kullanılabilir.
  // Üretmek için: node -e "console.log(require('crypto').randomUUID().replace(/-/g,''))"
  indexNowKey: "312cda39b21942439be3cb0dd58d3335", // public/<key>.txt ile eşleşmeli

  buildDate: new Date().toISOString().slice(0, 10),
};

// ---------------------------------------------------------------------------
// Ana navigasyon
// ---------------------------------------------------------------------------
export const nav = [
  {
    label: "Kurumsal",
    href: "/kurumsal",
    children: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Vizyon & Misyon", href: "/vizyon-misyon" },
      { label: "Değerlerimiz", href: "/degerlerimiz" },
      { label: "Kalite Yaklaşımı", href: "/kalite-yaklasimi" },
    ],
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [], // services'ten otomatik doldurulur
  },
  {
    label: "Sektörler",
    href: "/sektorler",
    children: [], // sectors'tan otomatik doldurulur
  },
  {
    label: "Teknik Bilgi",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Sık Sorulan Sorular", href: "/sss" },
      { label: "Malzeme & Kalınlık Rehberi", href: "/blog/malzeme-kalinlik-rehberi" },
      { label: "Lazer Kesim Toleransları", href: "/blog/lazer-kesim-toleranslari" },
      { label: "DXF/DWG Dosya Hazırlama", href: "/blog/dxf-dwg-dosya-hazirlama-rehberi" },
    ],
  },
  {
    label: "İletişim",
    href: "/iletisim",
    children: [
      { label: "Teklif Al", href: "/teklif-al" },
    ],
  },
];

// ---------------------------------------------------------------------------
// HİZMETLER
// ---------------------------------------------------------------------------
export const services = [
  {
    slug: "cnc-fiber-lazer-kesim",
    icon: "laser",
    title: "CNC Fiber Lazer Kesim",
    short:
      "Sac metal parçaların yüksek hız ve mikron seviyesinde hassasiyetle işlenmesi. Temiz kesim yüzeyi, çapaksız kenar ve teknik resme birebir uygun üretim.",
    cardText:
      "CNC fiber lazer kesim ile siyah sac, paslanmaz, alüminyum ve galvaniz malzemeleri yüksek hassasiyetle işliyoruz. Karmaşık geometriler, delik desenleri ve ince detaylar tek operasyonda, çapaksız ve tekrarlanabilir kalitede üretilir. DXF/DWG/STEP dosyanızı gönderin, hızlı teklif ve termin alın.",
    seoTitle: "CNC Fiber Lazer Kesim Hizmeti | Hassas Sac Kesim | WOLFSE",
    metaDescription:
      "WOLFSE, CNC fiber lazer kesim hizmetiyle sac metal parçalarınızı yüksek hassasiyet, hızlı termin ve projeye özel fason üretim yaklaşımıyla işler. Teklif için teknik dosyanızı gönderin.",
    h1: "CNC Fiber Lazer Kesim Hizmeti",
    intro:
      "CNC fiber lazer kesim, sac metal parçaların yüksek hız ve hassasiyetle işlenmesini sağlayan modern bir üretim yöntemidir. WOLFSE; teknik resme uygun üretim, temiz kesim yüzeyi ve hızlı teklif süreciyle sanayi müşterilerine güvenilir lazer kesim çözümleri sunar.",
    summary:
      "Bu sayfa WOLFSE'nin CNC fiber lazer kesim hizmetini, kesilebilen malzeme türlerini, dosya gereksinimlerini, toleransları ve teklif alma sürecini açıklar.",
    materials: [
      "Siyah (DKP/sıcak haddelenmiş) sac",
      "Paslanmaz çelik (304, 316 vb.)",
      "Alüminyum levha",
      "Galvaniz sac",
      "Bakır ve pirinç (talep üzerine değerlendirilir)",
    ],
    sectors: ["makine-imalati", "otomotiv-yan-sanayi", "celik-konstruksiyon", "enerji-ekipmanlari"],
    advantages: [
      "Yüksek kesim hızı ve kısa termin",
      "Mikron seviyesinde hassasiyet ve tekrarlanabilirlik",
      "Çapaksız, temiz kesim kenarı — ikincil işlem ihtiyacını azaltır",
      "Karmaşık geometri ve ince detayların tek operasyonda işlenmesi",
      "Düşük ısı etkisi (HAZ) ile malzeme deformasyonunun en aza inmesi",
      "Tek parçadan seri üretime esnek adet aralığı",
    ],
    fileReqs: [
      "Vektörel kesim dosyası: DXF veya DWG (tercih edilen)",
      "3B model: STEP / STP (büküm ve montaj parçaları için)",
      "Referans/teknik resim: PDF",
      "Malzeme cinsi, kalınlık (mm) ve adet bilgisi",
      "Varsa tolerans, büküm ve yüzey istekleri",
    ],
    quality:
      "Kesim toleransları parça geometrisine, malzemeye ve kalınlığa göre belirlenir. Standart sac lazer kesimde tipik konturlarda beklenen tolerans aralığı paylaşılır; kritik ölçüler için teknik resimde tolerans belirtilmesini öneririz. TODO: WOLFSE'nin makineye özel garanti ettiği tolerans değerleri eklenecek.",
    faqs: [
      {
        q: "Lazer kesim için hangi dosya formatları gerekir?",
        a: "Kesim için DXF veya DWG vektörel dosyaları tercih ederiz. Büküm ve montaj içeren parçalarda STEP (3B model) ve referans için PDF göndermeniz süreci hızlandırır.",
      },
      {
        q: "Sac lazer kesimde minimum adet var mı?",
        a: "Hayır. Tek parça prototipten seri üretime kadar çalışıyoruz. Adede göre birim maliyet ve termin teklifte netleştirilir.",
      },
      {
        q: "Kesim sonrası büküm ve kaynak yapılabilir mi?",
        a: "Evet. Lazer kesim, CNC abkant büküm ve kaynaklı imalatı tek tedarikçide birleştirerek montaja hazır parça teslim edebiliriz.",
      },
      {
        q: "Teklif almak için hangi bilgiler gerekir?",
        a: "Teknik dosya (DXF/DWG/STEP/PDF), malzeme cinsi, kalınlık, adet ve termin beklentiniz teklif için yeterlidir.",
      },
      {
        q: "Lazer kesim toleransı nasıl belirlenir?",
        a: "Tolerans; malzeme türü, sac kalınlığı ve parça geometrisine göre değişir. Kritik ölçülerinizi teknik resimde belirtirseniz üretilebilirlik analizinde değerlendirilir.",
      },
    ],
  },
  {
    slug: "sac-lazer-kesim",
    icon: "sheet",
    title: "Sac Lazer Kesim",
    short:
      "Siyah sac, paslanmaz, alüminyum ve galvaniz levhaların projeye özel ölçülerde, hassas ve hızlı kesimi. Prototipten seri üretime esnek çözümler.",
    cardText:
      "Farklı kalınlık ve cinslerdeki sac levhaları, teknik resminize birebir uygun şekilde keserek montaja hazır parçalar üretiyoruz. Nesting (yerleşim) optimizasyonu ile malzeme firesini azaltıyor, hem maliyet hem termin avantajı sağlıyoruz. Sac lazer kesim, abkant büküm ve kaynak süreçlerini birlikte yönetiyoruz.",
    seoTitle: "Sac Lazer Kesim | Siyah Sac, Paslanmaz, Alüminyum Kesim | WOLFSE",
    metaDescription:
      "WOLFSE sac lazer kesim hizmeti: siyah sac, paslanmaz, alüminyum ve galvaniz levhaların hassas, hızlı ve fireyi azaltan nesting ile kesimi. Teknik dosyanızı gönderin, teklif alın.",
    h1: "Sac Lazer Kesim Hizmeti",
    intro:
      "Sac lazer kesim; farklı cins ve kalınlıktaki metal levhaların yüksek hassasiyetle, ısı etkisi en aza indirilerek işlenmesini sağlar. WOLFSE, fire optimizasyonu ve hızlı termin yaklaşımıyla projelerinize uygun sac kesim çözümleri sunar.",
    summary:
      "Bu sayfa WOLFSE'nin sac lazer kesim hizmetini, işlenebilen malzeme ve kalınlıkları, fire optimizasyonunu ve teklif sürecini açıklar.",
    materials: [
      "Siyah sac (DKP / sıcak-soğuk haddelenmiş)",
      "Paslanmaz çelik levha (304, 316)",
      "Alüminyum levha",
      "Galvaniz / elektro galvaniz sac",
    ],
    sectors: ["makine-imalati", "otomotiv-yan-sanayi", "mobilya-dekoratif", "celik-konstruksiyon"],
    advantages: [
      "Teknik resme birebir uygun, tekrarlanabilir kesim",
      "Nesting ile fire optimizasyonu ve maliyet avantajı",
      "Geniş malzeme ve kalınlık aralığı",
      "İnce detay ve delik desenlerinde temiz sonuç",
      "Kesim + büküm + kaynak entegre üretim imkânı",
    ],
    fileReqs: [
      "DXF / DWG kesim dosyası",
      "PDF teknik resim (ölçü ve tolerans referansı)",
      "Malzeme cinsi ve kalınlık (mm)",
      "Adet ve termin beklentisi",
    ],
    quality:
      "Sac kesim kalitesi malzeme ve kalınlığa göre yönetilir; kenar kalitesi ve ölçü toleransı üretilebilirlik analizinde değerlendirilir. TODO: makineye özel kalınlık ve tolerans aralıkları eklenecek.",
    faqs: [
      { q: "Hangi sac kalınlıklarını kesebiliyorsunuz?", a: "Malzeme cinsine göre değişir. TODO: gerçek makine kapasitesine göre kalınlık aralıkları girilecek. Dosyanızı gönderdiğinizde uygunluğu netleştiririz." },
      { q: "Kendi sacımı getirebilir miyim?", a: "Malzemeyi biz tedarik edebileceğimiz gibi, müşteri temininde de çalışabiliriz. Detayı teklif aşamasında belirleriz." },
      { q: "Fire/hurda nasıl hesaplanıyor?", a: "Nesting optimizasyonu ile levha üzerinde maksimum verim hedeflenir; fire teklife şeffaf şekilde yansıtılır." },
      { q: "Kesilen parçalar bükülebilir mi?", a: "Evet, CNC abkant büküm hizmetimizle montaja hazır parça teslim edebiliriz." },
    ],
  },
  {
    slug: "boru-profil-lazer-kesim",
    icon: "tube",
    title: "Boru ve Profil Lazer Kesim",
    short:
      "Yuvarlak, kare, dikdörtgen boru ve profillerin üç boyutlu lazer kesimi; delik, kanal ve birleşim detaylarının hassas işlenmesi.",
    cardText:
      "Boru ve profil lazer kesim ile yuvarlak, kare ve dikdörtgen kesitli profillerde delik, kanal ve birleşim detaylarını hassas şekilde işliyoruz. Kaynaklı konstrüksiyon ve çelik yapı projelerinde montajı kolaylaştıran, açısal kesim ve geçme detayları sağlıyoruz.",
    seoTitle: "Boru ve Profil Lazer Kesim | 3B Profil Kesim | WOLFSE",
    metaDescription:
      "WOLFSE boru ve profil lazer kesim: yuvarlak, kare ve dikdörtgen profillerde hassas delik, kanal ve birleşim detayları. Çelik konstrüksiyon ve makine imalatı için teklif alın.",
    h1: "Boru ve Profil Lazer Kesim Hizmeti",
    intro:
      "Boru ve profil lazer kesim; yuvarlak ve köşeli kesitli profillerin üç boyutlu, hassas ve tekrarlanabilir şekilde işlenmesini sağlar. WOLFSE, çelik konstrüksiyon ve makine imalatı projelerinde montaj kolaylığı sağlayan birleşim detayları sunar.",
    summary:
      "Bu sayfa WOLFSE'nin boru-profil lazer kesim hizmetini, işlenebilen profil tiplerini, uygulama alanlarını ve teklif sürecini açıklar.",
    materials: [
      "Yuvarlak boru (siyah / paslanmaz)",
      "Kare ve dikdörtgen profil",
      "Köşebent ve özel kesitler (talep üzerine)",
    ],
    sectors: ["celik-konstruksiyon", "makine-imalati", "tarim-makineleri", "mobilya-dekoratif"],
    advantages: [
      "3B kesim ile karmaşık birleşim ve geçme detayları",
      "Açısal (gönye) kesimlerle montaj kolaylığı",
      "Delik, kanal ve markalama tek operasyonda",
      "Tekrarlanabilir kalite ile seri profil üretimi",
      "Kaynaklı imalata hazır parça teslimi",
    ],
    fileReqs: [
      "3B model: STEP / STP (profil kesimde tercih edilir)",
      "DXF / DWG ve PDF referans",
      "Profil tipi, kesit ölçüsü ve et kalınlığı",
      "Adet ve termin beklentisi",
    ],
    quality:
      "Profil kesim toleransı kesit tipine ve et kalınlığına göre yönetilir. TODO: boru-profil lazer makinesinin çap/kesit ve uzunluk kapasitesi eklenecek.",
    faqs: [
      { q: "Hangi profil tiplerini kesebiliyorsunuz?", a: "Yuvarlak, kare ve dikdörtgen profiller başta olmak üzere çeşitli kesitler. TODO: makinenin desteklediği çap/kesit aralığı girilecek." },
      { q: "Maksimum profil boyu nedir?", a: "TODO: makine çalışma boyu kapasitesi girilecek. Projenizi gönderdiğinizde uygunluğu teyit ederiz." },
      { q: "Açısal/gönye kesim yapılıyor mu?", a: "Evet, 3B kesim ile açısal ve birleşim detayları işlenebilir." },
    ],
  },
  {
    slug: "cnc-abkant-bukum",
    icon: "bend",
    title: "CNC Abkant Büküm",
    short:
      "Kesilen sac parçaların CNC abkant pres ile hassas, açı kontrollü ve tekrarlanabilir bükümü. Karmaşık büküm sıralamaları için çözüm.",
    cardText:
      "CNC abkant büküm ile lazer kesim parçalarınıza hassas açılar ve tekrarlanabilir form veriyoruz. Doğru bıçak/V-kanal seçimi, açı kontrolü ve büküm sıralaması ile ölçüsel sapmayı en aza indiriyoruz. Kesim ve büküm tek tedarikçide birleşerek montaja hazır parça sağlar.",
    seoTitle: "CNC Abkant Büküm | Hassas Sac Büküm Hizmeti | WOLFSE",
    metaDescription:
      "WOLFSE CNC abkant büküm: hassas açı kontrolü, tekrarlanabilir form ve doğru büküm sıralaması ile sac parçaların bükümü. Lazer kesim + büküm tek tedarikçide. Teklif alın.",
    h1: "CNC Abkant Büküm Hizmeti",
    intro:
      "CNC abkant büküm; sac parçaların programlanabilir, açı kontrollü ve tekrarlanabilir şekilde bükülmesini sağlar. WOLFSE, lazer kesim ve büküm süreçlerini birleştirerek ölçüsel tutarlılığı yüksek, montaja hazır parçalar üretir.",
    summary:
      "Bu sayfa WOLFSE'nin CNC abkant büküm hizmetini, büküm gereksinimlerini, malzeme uygunluğunu ve teklif sürecini açıklar.",
    materials: ["Siyah sac", "Paslanmaz çelik", "Alüminyum", "Galvaniz sac"],
    sectors: ["makine-imalati", "otomotiv-yan-sanayi", "enerji-ekipmanlari", "mobilya-dekoratif"],
    advantages: [
      "Programlanabilir, tekrarlanabilir büküm açıları",
      "Karmaşık büküm sıralamalarının doğru yönetimi",
      "Lazer kesim ile entegre, montaja hazır parça",
      "Büküm payı (k-faktörü) hesabıyla ölçüsel tutarlılık",
      "Prototipten seri üretime esneklik",
    ],
    fileReqs: [
      "STEP / STP 3B model (büküm açıları için tercih edilir)",
      "Açılım (flat pattern) DXF",
      "PDF teknik resim (büküm açıları, iç radyus, yön)",
      "Malzeme, kalınlık, adet ve termin",
    ],
    quality:
      "Büküm açısı toleransı malzeme, kalınlık ve büküm yarıçapına göre yönetilir; büküm payı hesabı açılım ölçülerini etkiler. TODO: abkant presin tonaj ve uzunluk kapasitesi eklenecek.",
    faqs: [
      { q: "Büküm için hangi dosyayı göndermeliyim?", a: "İdeali STEP 3B model + açılım DXF + PDF teknik resimdir. Büküm açıları ve iç radyusu belirtmeniz önemlidir." },
      { q: "Maksimum büküm uzunluğu nedir?", a: "TODO: abkant pres uzunluk ve tonaj kapasitesi girilecek." },
      { q: "Büküm payı/k-faktörü hesabını siz mi yapıyorsunuz?", a: "Evet, malzeme ve kalınlığa göre büküm payını hesaplayarak açılım ölçülerini belirleriz." },
    ],
  },
  {
    slug: "kaynakli-imalat",
    icon: "weld",
    title: "Kaynaklı İmalat",
    short:
      "MIG/MAG ve TIG kaynak ile sac ve profil parçaların montajı; konstrüksiyon, şasi ve gövde imalatında dayanıklı, temiz kaynak dikişleri.",
    cardText:
      "Kaynaklı imalat ile lazer kesim ve bükümden gelen parçaları MIG/MAG ve TIG yöntemleriyle birleştiriyoruz. Çelik konstrüksiyon, şasi, gövde ve muhafaza imalatında dayanıklı, temiz ve ölçüsel olarak tutarlı kaynaklı gruplar üretiyoruz. Talep üzerine yüzey işlemine hazır teslim.",
    seoTitle: "Kaynaklı İmalat | MIG/MAG & TIG Kaynak Hizmeti | WOLFSE",
    metaDescription:
      "WOLFSE kaynaklı imalat: MIG/MAG ve TIG kaynak ile sac ve profil gruplarının montajı. Konstrüksiyon, şasi ve gövde imalatında dayanıklı, temiz kaynak. Teklif alın.",
    h1: "Kaynaklı İmalat Hizmeti",
    intro:
      "Kaynaklı imalat; lazer kesim ve büküm ile hazırlanan parçaların montaj ve kaynak yöntemleriyle birleştirilerek fonksiyonel gruplara dönüştürülmesidir. WOLFSE, ölçüsel tutarlılığı koruyan, dayanıklı kaynaklı imalat çözümleri sunar.",
    summary:
      "Bu sayfa WOLFSE'nin kaynaklı imalat hizmetini, kaynak yöntemlerini, uygulama alanlarını ve teklif sürecini açıklar.",
    materials: ["Karbon çeliği / siyah sac ve profil", "Paslanmaz çelik (TIG)", "Alüminyum (TIG, talep üzerine)"],
    sectors: ["celik-konstruksiyon", "makine-imalati", "tarim-makineleri", "savunma-endustriyel"],
    advantages: [
      "MIG/MAG ve TIG yöntemleriyle malzemeye uygun kaynak",
      "Aparat/fikstür ile tekrarlanabilir montaj ölçüleri",
      "Lazer kesim + büküm + kaynak entegre süreç",
      "Temiz dikiş ve gerektiğinde kaynak temizliği",
      "Yüzey işlemine / boyaya hazır teslim",
    ],
    fileReqs: [
      "Montaj (assembly) STEP modeli",
      "Parça ve montaj PDF teknik resimleri",
      "Kaynak yöntemi ve dikiş istekleri (varsa)",
      "Adet ve termin beklentisi",
    ],
    quality:
      "Kaynak kalitesi yöntem, malzeme ve montaj toleransına göre yönetilir; kritik gruplarda fikstür kullanılır. TODO: kaynak istasyonu sayısı ve sertifikasyon durumu eklenecek.",
    faqs: [
      { q: "Hangi kaynak yöntemlerini kullanıyorsunuz?", a: "Malzeme ve uygulamaya göre MIG/MAG ve TIG. Paslanmaz ve alüminyumda genellikle TIG tercih edilir." },
      { q: "Kaynaklı grupları boyaya hazır teslim ediyor musunuz?", a: "Evet, talep üzerine kaynak temizliği sonrası yüzey işlemi/boya öncesi teslim edilir." },
      { q: "Kaynakçı sertifikasyonunuz var mı?", a: "TODO: sertifikasyon bilgisi (varsa) eklenecek; uydurma beyan yapılmaz." },
    ],
  },
  {
    slug: "metal-yuzey-islemleri",
    icon: "surface",
    title: "Metal Yüzey İşlemleri",
    short:
      "Çapak alma, taşlama, kumlama ve boya/kaplama öncesi yüzey hazırlığı; talep üzerine boya, galvaniz ve eloksal yönlendirmesi.",
    cardText:
      "Metal yüzey işlemleri ile kesim ve kaynak sonrası parçaların çapak alma, taşlama ve yüzey hazırlığını yapıyoruz. Talep üzerine boya, toz boya, galvaniz ve eloksal gibi kaplama süreçlerini iş ortaklarımızla koordine ederek bitmiş ürün teslimi sağlıyoruz.",
    seoTitle: "Metal Yüzey İşlemleri | Çapak Alma, Boya & Kaplama | WOLFSE",
    metaDescription:
      "WOLFSE metal yüzey işlemleri: çapak alma, taşlama, kumlama ve boya/kaplama öncesi hazırlık. Talep üzerine toz boya, galvaniz ve eloksal koordinasyonu. Teklif alın.",
    h1: "Metal Yüzey İşlemleri Hizmeti",
    intro:
      "Metal yüzey işlemleri; üretim sonrası parçaların görsel ve fonksiyonel kalitesini artıran çapak alma, taşlama ve kaplama öncesi hazırlık adımlarını kapsar. WOLFSE, talep üzerine kaplama süreçlerini koordine ederek bitmiş ürün teslim eder.",
    summary:
      "Bu sayfa WOLFSE'nin metal yüzey işlemleri hizmetini, uygulanabilen işlemleri ve teklif sürecini açıklar.",
    materials: ["Siyah sac/çelik", "Paslanmaz", "Alüminyum", "Galvaniz"],
    sectors: ["mobilya-dekoratif", "makine-imalati", "otomotiv-yan-sanayi", "enerji-ekipmanlari"],
    advantages: [
      "Çapak alma ve kenar yumuşatma",
      "Taşlama ve yüzey düzeltme",
      "Boya/kaplama öncesi yüzey hazırlığı",
      "Toz boya, galvaniz, eloksal koordinasyonu (iş ortaklarıyla)",
      "Bitmiş ürün teslimi seçeneği",
    ],
    fileReqs: [
      "Parça teknik resmi / referans görsel",
      "İstenen yüzey kalitesi ve renk (RAL) bilgisi",
      "Adet ve termin beklentisi",
    ],
    quality:
      "Yüzey kalitesi istenen standarda göre tanımlanır; kaplama süreçleri iş ortaklarıyla koordine edilir. TODO: sahip olunan/koordine edilen yüzey işlemi türleri netleştirilecek.",
    faqs: [
      { q: "Boya hizmeti veriyor musunuz?", a: "Yüzey hazırlığını yapıyor, boya/toz boya gibi kaplamaları iş ortaklarımızla koordine ederek bitmiş ürün teslim ediyoruz. TODO: bünyede yapılan işlemler netleştirilecek." },
      { q: "Paslanmaz parçalarda yüzey işlemi yapılıyor mu?", a: "Evet, paslanmazda kaynak temizliği ve istenen yüzey kalitesine yönelik işlemler değerlendirilir." },
    ],
  },
  {
    slug: "fason-metal-imalat",
    icon: "custom",
    title: "Projeye Özel Fason İmalat",
    short:
      "Lazer kesim, büküm, kaynak ve yüzey işlemlerini birleştiren anahtar teslim fason üretim; tek tedarikçiden montaja hazır parça ve grup.",
    cardText:
      "Projeye özel fason imalat ile lazer kesim, abkant büküm, kaynak ve yüzey işlemlerini tek çatı altında birleştiriyoruz. Teknik resminizden montaja hazır parça veya komple gruba kadar süreci yönetiyor; üretilebilirlik analizi, maliyet ve termin şeffaflığıyla güvenilir bir fason üretim ortağı oluyoruz.",
    seoTitle: "Projeye Özel Fason Metal İmalat | Anahtar Teslim Üretim | WOLFSE",
    metaDescription:
      "WOLFSE fason metal imalat: lazer kesim, büküm, kaynak ve yüzey işlemlerini birleştiren anahtar teslim üretim. Üretilebilirlik analizi, şeffaf maliyet ve termin. Teklif alın.",
    h1: "Projeye Özel Fason Metal İmalat",
    intro:
      "Fason metal imalat; tasarımdan/teknik resimden başlayarak kesim, büküm, kaynak ve yüzey işlemlerinin tek tedarikçide yönetilmesidir. WOLFSE, üretilebilirlik analizi ve şeffaf süreç yönetimiyle projelerinizi montaja hazır şekilde teslim eder.",
    summary:
      "Bu sayfa WOLFSE'nin projeye özel fason metal imalat hizmetini, kapsamını, süreç akışını ve teklif sürecini açıklar.",
    materials: ["Siyah sac & profil", "Paslanmaz", "Alüminyum", "Galvaniz"],
    sectors: ["makine-imalati", "otomotiv-yan-sanayi", "celik-konstruksiyon", "enerji-ekipmanlari", "tarim-makineleri", "savunma-endustriyel"],
    advantages: [
      "Tek tedarikçiden uçtan uca üretim (kesim→büküm→kaynak→yüzey)",
      "Üretilebilirlik (DFM) analizi ve maliyet optimizasyonu",
      "Şeffaf maliyet ve termin yönetimi",
      "Prototip + seri üretim esnekliği",
      "Tedarik zincirini sadeleştiren tek muhatap",
    ],
    fileReqs: [
      "STEP montaj modeli ve/veya parça DXF/DWG",
      "PDF teknik resimler (tolerans, yüzey, kaynak notları)",
      "Malzeme, kalınlık, adet, termin",
      "Varsa numune/referans ürün bilgisi",
    ],
    quality:
      "Süreç; üretilebilirlik analizi, kontrol ve ölçümle yönetilir. Kritik ölçüler teknik resimde tanımlanır. TODO: kalite kontrol ekipmanları ve varsa kalite belgeleri eklenecek.",
    faqs: [
      { q: "Sadece çizim/numune ile üretim yapılır mı?", a: "Numune ve/veya çizimle çalışabiliriz; en sağlıklısı STEP + PDF teknik resimdir. Numuneden tersine modelleme talebinizi değerlendiririz." },
      { q: "Seri üretim yapıyor musunuz?", a: "Evet, prototip onayı sonrası tekrarlanabilir kalitede seri üretim sağlıyoruz." },
      { q: "Tek parça mı yoksa komple grup mu teslim ediyorsunuz?", a: "İhtiyacınıza göre tek parça, yarı mamul veya montajlı komple grup teslim edebiliriz." },
    ],
  },
];

// ---------------------------------------------------------------------------
// SEKTÖRLER
// ---------------------------------------------------------------------------
export const sectors = [
  {
    slug: "makine-imalati",
    title: "Makine İmalatı",
    icon: "gear",
    short:
      "Makine gövdeleri, şase, muhafaza ve fonksiyonel sac parçalarda hassas lazer kesim ve büküm.",
    text:
      "Makine imalatçıları için gövde, şase, kapak, muhafaza ve fonksiyonel sac parçaları teknik resme uygun, tekrarlanabilir kalitede üretiyoruz. Lazer kesim, büküm ve kaynağı birleştirerek montaj sürenizi kısaltıyoruz.",
  },
  {
    slug: "otomotiv-yan-sanayi",
    title: "Otomotiv Yan Sanayi",
    icon: "car",
    short:
      "Yan sanayi parçalarında tekrarlanabilir kalite, ölçüsel tutarlılık ve seri üretim disiplini.",
    text:
      "Otomotiv yan sanayi için braket, bağlantı parçası ve sac form parçalarını ölçüsel tutarlılıkla üretiyoruz. Seri üretimde tekrarlanabilir kalite ve termin disiplini önceliğimizdir.",
  },
  {
    slug: "celik-konstruksiyon",
    title: "İnşaat & Çelik Konstrüksiyon",
    icon: "building",
    short:
      "Profil ve sac elemanlarda hassas kesim, birleşim detayları ve kaynaklı imalat.",
    text:
      "Çelik konstrüksiyon projelerinde profil-boru lazer kesim, birleşim/gusset detayları ve kaynaklı imalatı bir arada sunuyoruz. Montajı hızlandıran hassas birleşim geometrileri sağlıyoruz.",
  },
  {
    slug: "enerji-ekipmanlari",
    title: "Enerji Ekipmanları",
    icon: "energy",
    short:
      "Pano, taşıyıcı, muhafaza ve ekipman parçalarında hassas ve güvenilir üretim.",
    text:
      "Enerji sektörü için pano gövdeleri, taşıyıcı konstrüksiyonlar ve ekipman muhafazalarını paslanmaz ve galvaniz dahil çeşitli malzemelerde üretiyoruz. Dayanıklılık ve ölçüsel hassasiyet esastır.",
  },
  {
    slug: "tarim-makineleri",
    title: "Tarım Makineleri",
    icon: "tractor",
    short:
      "Dayanıklı sac ve profil parçalarda kesim, büküm ve kaynaklı imalat.",
    text:
      "Tarım makineleri için yüksek dayanım gerektiren sac ve profil parçaları, kesim-büküm-kaynak entegrasyonuyla üretiyoruz. Saha koşullarına uygun sağlam imalat hedeflenir.",
  },
  {
    slug: "mobilya-dekoratif",
    title: "Mobilya & Dekoratif Metal",
    icon: "deco",
    short:
      "Dekoratif paneller, mobilya ayakları ve metal aksesuar­larda temiz kesim ve yüzey kalitesi.",
    text:
      "Mobilya ve dekoratif metal projelerinde dekoratif kesim desenleri, metal ayak/iskelet ve aksesuarları estetik yüzey kalitesiyle üretiyoruz. Paslanmaz ve alüminyumda temiz görünüm önceliklidir.",
  },
  {
    slug: "savunma-endustriyel",
    title: "Savunma & Endüstriyel Parçalar",
    icon: "shield",
    short:
      "Hassasiyet ve tekrarlanabilirlik gerektiren endüstriyel parçalarda kontrollü üretim.",
    text:
      "Savunma ve endüstriyel uygulamalarda hassasiyet, izlenebilirlik ve tekrarlanabilirlik gerektiren parçaları kontrollü süreçlerle üretiyoruz. Gizlilik ve teknik gerekliliklere uyum esastır. TODO: ilgili kalite/uyum belgeleri (varsa) eklenecek.",
  },
];

// ---------------------------------------------------------------------------
// MAKİNE PARKURU — gerçek kapasiteler TODO ile işaretli (uydurma yapılmaz)
// ---------------------------------------------------------------------------
export const machines = [
  {
    name: "Fiber Lazer Kesim Makinesi",
    icon: "laser",
    specs: [
      ["Lazer gücü", "TODO: kW bilgisi girilecek"],
      ["Çalışma alanı", "TODO: mm x mm girilecek"],
      ["Maks. sac kalınlığı", "TODO: malzemeye göre girilecek"],
      ["Otomasyon", "TODO: yükleme/boşaltma bilgisi"],
    ],
    note: "Sac metal parçaların yüksek hız ve hassasiyetle kesimi.",
  },
  {
    name: "Boru-Profil Lazer Kesim Makinesi",
    icon: "tube",
    specs: [
      ["Çap/kesit aralığı", "TODO: çap/aralık bilgisi girilecek"],
      ["Maks. profil boyu", "TODO: mm girilecek"],
      ["İşlenebilir profil", "Yuvarlak, kare, dikdörtgen (TODO doğrulanacak)"],
    ],
    note: "Boru ve profillerde 3B hassas kesim ve birleşim detayları.",
  },
  {
    name: "CNC Abkant Pres",
    icon: "bend",
    specs: [
      ["Tonaj", "TODO: tonaj girilecek"],
      ["Büküm uzunluğu", "TODO: mm girilecek"],
      ["Eksen sayısı", "TODO: girilecek"],
    ],
    note: "Hassas açı kontrolü ve tekrarlanabilir büküm.",
  },
  {
    name: "Kaynak İstasyonları",
    icon: "weld",
    specs: [
      ["İstasyon sayısı", "TODO: adet girilecek"],
      ["Yöntemler", "MIG/MAG, TIG (TODO doğrulanacak)"],
    ],
    note: "Sac ve profil gruplarının montaj ve kaynağı.",
  },
  {
    name: "Ölçüm ve Kontrol Ekipmanları",
    icon: "measure",
    specs: [
      ["Ekipmanlar", "TODO: kumpas, mihengir, mastar vb. listelenecek"],
      ["Kalite süreci", "TODO: kontrol planı netleştirilecek"],
    ],
    note: "Ölçüsel kontrol ve kalite güvence.",
  },
  {
    name: "Yardımcı Üretim Ekipmanları",
    icon: "tools",
    specs: [
      ["Ekipmanlar", "TODO: çapak alma, taşlama, kaldırma vb. listelenecek"],
    ],
    note: "Tamamlayıcı işlemler ve elleçleme.",
  },
];

// ---------------------------------------------------------------------------
// BLOG / TEKNİK BİLGİ
// ---------------------------------------------------------------------------
export const posts = [
  {
    slug: "lazer-kesim-nedir-sac-imalatta-avantajlari",
    title: "Lazer Kesim Nedir? Sac İmalatta Avantajları",
    date: "2026-02-10",
    category: "Teknik Rehber",
    excerpt:
      "Lazer kesimin çalışma prensibi, fiber lazerin avantajları ve sac imalatında neden tercih edildiği; hassasiyet, hız ve maliyet açısından değerlendirme.",
    seoTitle: "Lazer Kesim Nedir? Sac İmalatta Avantajları | WOLFSE",
    metaDescription:
      "Lazer kesim nedir, fiber lazer nasıl çalışır ve sac imalatında avantajları neler? Hassasiyet, hız ve maliyet açısından WOLFSE teknik rehberi.",
    body: [
      ["h2", "Lazer Kesim Nedir?"],
      ["p", "Lazer kesim; yoğunlaştırılmış bir lazer ışınının malzeme yüzeyinde eritme/buharlaştırma yaparak ve yardımcı gazla atılan malzemeyi uzaklaştırarak parçayı kesmesi prensibine dayanır. Fiber lazer teknolojisi, yüksek verim ve özellikle ince-orta kalınlık sac metalde yüksek kesim hızı sunar."],
      ["h2", "Fiber Lazerin Avantajları"],
      ["ul", [
        "Yüksek kesim hızı ve düşük işletme maliyeti",
        "İnce ve orta kalınlık sacda mükemmel kenar kalitesi",
        "Düşük ısı etkisi bölgesi (HAZ) ile az deformasyon",
        "Karmaşık geometrilerin tek operasyonda işlenmesi",
        "Yansıtıcı malzemelerde (alüminyum, bakır) iyi performans",
      ]],
      ["h2", "Sac İmalatında Neden Lazer Kesim?"],
      ["p", "Sac imalatında lazer kesim; kalıp maliyeti olmadan esnek üretim, hızlı prototipleme ve seri üretimde tekrarlanabilir kalite sağlar. Nesting ile fire azaltılır, ikincil işlem ihtiyacı düşer."],
      ["p", "WOLFSE; lazer kesimi abkant büküm ve kaynaklı imalatla birleştirerek montaja hazır parça teslim eder. Projeniz için teknik dosyanızı gönderin, hızlı teklif alın."],
    ],
  },
  {
    slug: "abkant-bukumde-dogru-teknik-resim",
    title: "Abkant Bükümde Doğru Teknik Resim Nasıl Hazırlanır?",
    date: "2026-03-05",
    category: "Teknik Rehber",
    excerpt:
      "Büküm payı (k-faktörü), iç radyus, büküm yönü ve açılım ölçüleri: abkant büküm için hatasız teknik resim hazırlamanın püf noktaları.",
    seoTitle: "Abkant Bükümde Doğru Teknik Resim Nasıl Hazırlanır? | WOLFSE",
    metaDescription:
      "Abkant büküm için teknik resim hazırlama: büküm payı (k-faktörü), iç radyus, büküm yönü ve açılım. WOLFSE'den uygulamalı rehber.",
    body: [
      ["h2", "Neden Doğru Teknik Resim Önemli?"],
      ["p", "Abkant bükümde ölçüsel doğruluk, açılım (flat pattern) ölçülerinin doğru hesaplanmasına bağlıdır. Eksik veya hatalı teknik resim, prototip tekrarına ve termin gecikmesine yol açar."],
      ["h2", "Belirtilmesi Gereken Bilgiler"],
      ["ul", [
        "Malzeme cinsi ve kalınlık (büküm payını doğrudan etkiler)",
        "İç büküm yarıçapı (iç radyus)",
        "Her büküm için açı ve yön (yukarı/aşağı)",
        "Kritik ölçüler ve toleranslar",
        "Büküm sıralaması kısıtları (varsa)",
      ]],
      ["h2", "Büküm Payı ve K-Faktörü"],
      ["p", "Büküm sırasında nötr eksenin yer değiştirmesi nedeniyle açılım boyu, dış ölçülerin toplamından farklıdır. K-faktörü; malzeme, kalınlık ve radyusa göre değişir. WOLFSE açılım hesabını sizin için yapar; ancak 3B STEP modeli göndermeniz en sağlıklı sonucu verir."],
      ["h2", "Dosya Önerisi"],
      ["p", "İdeal gönderim: STEP 3B model + açılım DXF + ölçülü PDF teknik resim. Büküm detayları için DXF/DWG dosya hazırlama rehberimize de göz atın."],
    ],
  },
  {
    slug: "dxf-dwg-dosya-hazirlama-rehberi",
    title: "DXF ve DWG Dosyası Gönderirken Dikkat Edilmesi Gerekenler",
    date: "2026-03-28",
    category: "Dosya Rehberi",
    excerpt:
      "Kapalı konturlar, birim/ölçek, çift çizgiler, yazı/ölçü katmanları ve katman düzeni: lazer kesim için temiz DXF/DWG hazırlama kontrol listesi.",
    seoTitle: "DXF/DWG Dosyası Gönderirken Dikkat Edilecekler | WOLFSE",
    metaDescription:
      "Lazer kesim için DXF/DWG hazırlama: kapalı konturlar, doğru birim/ölçek, çift çizgi temizliği ve katman düzeni. WOLFSE dosya hazırlama rehberi.",
    body: [
      ["h2", "Temiz Dosya = Hızlı Teklif"],
      ["p", "Düzgün hazırlanmış bir kesim dosyası; teklif süresini kısaltır, hata riskini azaltır ve üretilebilirliği artırır. Aşağıdaki kontrol listesi yaygın sorunları önler."],
      ["h2", "Kontrol Listesi"],
      ["ul", [
        "Tüm kesim konturları KAPALI olmalı (açık polyline kesim hatası yaratır)",
        "Birim ve ölçek net olmalı (mm önerilir, 1:1)",
        "Üst üste binen/çift çizgiler temizlenmeli",
        "Yazı, ölçü ve referans çizgileri ayrı katmanda veya kaldırılmış olmalı",
        "Yalnızca kesilecek geometri kesim katmanında kalmalı",
        "Çok küçük delik/detayların kalınlığa uygunluğu kontrol edilmeli",
      ]],
      ["h2", "Büküm ve 3B Parçalar"],
      ["p", "Bükümlü parçalarda yalnızca açılım DXF yeterli olmayabilir; STEP 3B model ve büküm açılarını içeren PDF göndermek hataları önler. Abkant büküm için teknik resim rehberimize bakın."],
      ["h2", "Kabul Edilen Formatlar"],
      ["p", "WOLFSE; DXF, DWG, STEP/STP ve referans için PDF kabul eder. Teklif formunda dosyanızı yükleyebilir veya WhatsApp ile gönderebilirsiniz."],
    ],
  },
  {
    slug: "malzeme-kalinlik-rehberi",
    title: "Malzeme ve Kalınlık Rehberi: Lazer Kesimde Doğru Seçim",
    date: "2026-04-15",
    category: "Malzeme Rehberi",
    excerpt:
      "Siyah sac, paslanmaz, alüminyum ve galvaniz: malzeme türlerine göre lazer kesim davranışı, tipik kullanım alanları ve kalınlık seçiminde dikkat edilecekler.",
    seoTitle: "Malzeme ve Kalınlık Rehberi | Lazer Kesim | WOLFSE",
    metaDescription:
      "Lazer kesimde malzeme ve kalınlık seçimi: siyah sac, paslanmaz, alüminyum ve galvaniz özellikleri, kullanım alanları ve seçim ipuçları. WOLFSE rehberi.",
    body: [
      ["h2", "Malzeme Türleri ve Davranışları"],
      ["p", "Her malzeme lazer kesimde farklı davranır. Doğru malzeme ve kalınlık seçimi; maliyet, dayanım ve görünümü doğrudan etkiler."],
      ["h3", "Siyah Sac (Karbon Çeliği)"],
      ["p", "Ekonomik ve dayanıklıdır; konstrüksiyon ve genel imalatta yaygındır. Korozyona karşı boya/kaplama gerektirir."],
      ["h3", "Paslanmaz Çelik"],
      ["p", "Korozyon direnci ve hijyen gerektiren uygulamalarda (gıda, kimya, dekorasyon) tercih edilir. 304 ve 316 yaygın kalitelerdir."],
      ["h3", "Alüminyum"],
      ["p", "Hafiflik ve korozyon direnci öne çıkar; otomotiv, elektronik ve taşınabilir ekipmanlarda kullanılır."],
      ["h3", "Galvaniz Sac"],
      ["p", "Çinko kaplama ile korozyona karşı korunur; pano, havalandırma ve dış ortam uygulamalarında yaygındır."],
      ["h2", "Kalınlık Seçimi"],
      ["p", "Kalınlık; dayanım, ağırlık ve maliyet dengesine göre seçilir. WOLFSE'nin işleyebildiği kalınlık aralıkları için TODO: gerçek makine kapasitesi paylaşılacak. Projenizi gönderin, uygunluğu birlikte değerlendirelim."],
    ],
  },
  {
    slug: "lazer-kesim-toleranslari",
    title: "Lazer Kesim Toleransları: Neye Göre Belirlenir?",
    date: "2026-05-02",
    category: "Teknik Rehber",
    excerpt:
      "Lazer kesimde tolerans kavramı; malzeme, kalınlık ve geometrinin tolerans üzerindeki etkisi ve kritik ölçülerin teknik resimde nasıl belirtileceği.",
    seoTitle: "Lazer Kesim Toleransları Neye Göre Belirlenir? | WOLFSE",
    metaDescription:
      "Lazer kesim toleransları: malzeme, kalınlık ve geometrinin etkisi, kritik ölçü belirtimi ve tolerans yönetimi. WOLFSE teknik rehberi.",
    body: [
      ["h2", "Tolerans Nedir?"],
      ["p", "Tolerans; bir ölçünün kabul edilebilir sapma aralığıdır. Lazer kesimde tolerans; malzeme türü, sac kalınlığı, parça boyutu ve geometriye göre değişir."],
      ["h2", "Toleransı Etkileyen Faktörler"],
      ["ul", [
        "Malzeme cinsi ve kalınlık (kalın malzemede sapma artar)",
        "Parça boyutu (büyük parçalarda ısıl etki birikimi)",
        "Geometri karmaşıklığı ve ince detaylar",
        "Sonraki işlemler (büküm, kaynak ölçüyü etkiler)",
      ]],
      ["h2", "Kritik Ölçüleri Belirtin"],
      ["p", "Tüm ölçülere dar tolerans vermek maliyeti artırır. Yalnızca fonksiyonel/kritik ölçülere tolerans tanımlamak hem maliyet hem üretilebilirlik açısından doğrudur. Kritik ölçülerinizi PDF teknik resimde net belirtin."],
      ["p", "WOLFSE, makineye özel olarak garanti ettiği tolerans değerlerini teklif aşamasında paylaşır. TODO: makineye özel standart tolerans aralıkları eklenecek."],
    ],
  },
];

// ---------------------------------------------------------------------------
// GENEL SSS (SSS sayfası)
// ---------------------------------------------------------------------------
export const generalFaqs = [
  { q: "WOLFSE hangi hizmetleri sunuyor?", a: "CNC fiber lazer kesim, sac lazer kesim, boru-profil lazer kesim, CNC abkant büküm, kaynaklı imalat, metal yüzey işlemleri ve projeye özel fason metal imalat." },
  { q: "Teklif almak için ne göndermeliyim?", a: "Teknik dosya (DXF/DWG/STEP/PDF), malzeme cinsi, kalınlık, adet ve termin beklentinizi gönderin. Teklif formundan dosya yükleyebilir veya WhatsApp ile iletebilirsiniz." },
  { q: "Minimum sipariş adedi var mı?", a: "Hayır. Tek parça prototipten seri üretime kadar çalışıyoruz." },
  { q: "Hangi dosya formatlarını kabul ediyorsunuz?", a: "Kesim için DXF/DWG, 3B için STEP/STP, referans için PDF. Görsel olarak JPG/PNG de gönderebilirsiniz." },
  { q: "Kesim, büküm ve kaynağı birlikte yaptırabilir miyim?", a: "Evet. Süreçleri tek tedarikçide birleştirerek montaja hazır parça teslim ediyoruz." },
  { q: "Hangi malzemeleri işliyorsunuz?", a: "Siyah sac, paslanmaz çelik, alüminyum ve galvaniz başta olmak üzere çeşitli metaller. Bakır/pirinç talep üzerine değerlendirilir." },
  { q: "Teklif ne kadar sürede dönüyor?", a: "Dosyanız eksiksizse hızlı geri dönüş hedefliyoruz. TODO: taahhüt edilen ortalama teklif süresi netleştirilecek." },
  { q: "Nakliye/teslimat yapıyor musunuz?", a: "Teslimat seçeneklerini teklif aşamasında konuşuyoruz. TODO: lojistik kapsamı netleştirilecek." },
];

// İletişim sayfası seçenekleri
export const quoteServiceOptions = [
  "Sac lazer kesim",
  "Boru/profil lazer kesim",
  "CNC abkant büküm",
  "Kaynaklı imalat",
  "Fason metal imalat",
  "Diğer",
];

export const quoteMaterialOptions = [
  "Siyah sac",
  "Paslanmaz",
  "Alüminyum",
  "Galvaniz",
  "Diğer",
];
