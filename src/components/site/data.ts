// ============================================================
// BRAND CONFIG — Noir Planner (Demo Template — Tema Gelap)
// ============================================================
export const BRAND = {
  name: "Noir Planner",
  nameShort: "Noir",
  nameDisplay: ["Noir", "Planner"] as const,
  niche: "Luxury Wedding Planner",
  tagline: "Keistimewaan Tanpa Kompromi",
  heroDesc: "Noir Planner menghadirkan pengalaman pernikahan mewah yang tak tertandingi — di mana setiap detail dieksekusi dengan presisi, keanggunan, dan keunikan yang hanya untuk Anda.",
  aboutDesc: "Noir Planner lahir dari keyakinan bahwa pernikahan sejati adalah karya seni. Kami adalah tim kurasi eksklusif yang hanya menangani klien terpilih, memastikan setiap pernikahan menjadi sebuah mahakarya yang abadi — dari ambiance, lighting, hingga momen terakhir malam pernikahan Anda.",
  city: "Indonesia",
  address: "Layanan eksklusif di seluruh Indonesia",
  year: "2018",
  heroImg: "/img/wedding1.jpg",
  metaTitle: "Noir Planner — Luxury Wedding Planner Indonesia",
  metaDesc: "Wedding planner eksklusif untuk pernikahan mewah dan berkesan. Noir Planner menghadirkan keistimewaan tanpa kompromi untuk momen terpenting hidup Anda.",
};
// ============================================================

export const WHATSAPP_NUMBER = "6289677374440";
export const PHONE_DISPLAY = "0896-7737-4440";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Paket", href: "#paket" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#kontak" },
];

export const SERVICES = [
  {
    title: "Luxury Wedding Planning",
    desc: "Perencanaan pernikahan mewah dengan pendekatan eksklusif — setiap keputusan kami buat berdasarkan keunikan Anda.",
    icon: "Sparkles",
  },
  {
    title: "Konsep Eksklusif",
    desc: "Desainer konsep kami menciptakan visual pernikahan yang benar-benar unik — tidak ada dua pernikahan yang sama.",
    icon: "Star",
  },
  {
    title: "Vendor Premium",
    desc: "Akses eksklusif ke jaringan vendor terbaik — fotografer award-winning, katering haute cuisine, florist internasional.",
    icon: "Gift",
  },
  {
    title: "Day-of Direction",
    desc: "Eksekusi hari H dengan presisi militer. Tim kami memastikan setiap detik berjalan persis seperti yang direncanakan.",
    icon: "ClipboardList",
  },
  {
    title: "Private Coordination",
    desc: "Satu wedding director khusus untuk Anda — tersedia 24/7 selama proses perencanaan hingga hari H.",
    icon: "Heart",
  },
  {
    title: "Konsultasi Privat",
    desc: "Sesi konsultasi privat pertama gratis — untuk mengenal Anda dan memahami visi pernikahan impian Anda.",
    icon: "MessageCircle",
  },
];

export const GALLERY = [
  { src: "/img/wedding1.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding2.jpg", cat: "Dekorasi", h: "short" },
  { src: "/img/wedding3.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding4.jpg", cat: "Dekorasi", h: "tall" },
  { src: "/img/wedding5.jpg", cat: "Event", h: "tall" },
  { src: "/img/wedding6.jpg", cat: "Wedding", h: "short" },
  { src: "/img/wedding7.jpg", cat: "Dokumentasi", h: "short" },
  { src: "/img/wedding8.jpg", cat: "Wedding", h: "tall" },
  { src: "/img/wedding9.jpg", cat: "Dekorasi", h: "short" },
];

export const GALLERY_TABS = ["Semua", "Wedding", "Dekorasi", "Event", "Dokumentasi"] as const;

type Pkg = { name: string; tag?: string; price: number; popular?: boolean; features: string[] };

export const WO_PACKAGES: Pkg[] = [
  {
    name: "Obsidian",
    tag: "150 – 250 tamu",
    price: 12_000_000,
    features: [
      "Wedding director & 4 tim hari H",
      "Full briefing & technical meeting",
      "Custom rundown & timeline",
      "Personal assistant pengantin",
      "Konsultasi privat 3x",
    ],
  },
  {
    name: "Onyx",
    tag: "300 – 400 tamu",
    price: 18_000_000,
    popular: true,
    features: [
      "Wedding director senior & 7 tim",
      "Full briefing, TM & gladi resik",
      "Custom rundown & cue card",
      "Personal assistant kedua pengantin",
      "Full vendor coordination",
      "Konsultasi privat tak terbatas",
    ],
  },
  {
    name: "Eclipse",
    tag: "450 – 600 tamu",
    price: 25_000_000,
    features: [
      "Senior director & 10 tim hari H",
      "Full briefing & 2x gladi resik",
      "Custom concept & mood board",
      "VIP assistant seluruh keluarga",
      "Full vendor & catering direction",
      "Evaluasi & laporan pasca acara",
    ],
  },
  {
    name: "Noir Signature",
    tag: "600+ tamu / Ultra Luxury",
    price: 35_000_000,
    features: [
      "Executive director & 15+ tim",
      "Unlimited private meetings",
      "Bespoke concept & full styling",
      "24/7 concierge service",
      "International vendor access",
      "Full production hari H",
    ],
  },
];

export const DEKOR_PACKAGES: Pkg[] = [
  { name: "Dark Romance", tag: "Elegan & Dramatis", price: 15_000_000, features: ["Pelaminan luxury", "Backdrop velvet custom", "Dark floral arrangement", "Photobooth editorial", "Ambient lighting"] },
  { name: "Midnight Bloom", tag: "Premium Floral", price: 22_000_000, popular: true, features: ["Pelaminan grand", "Full dark floral concept", "Chandelier & draping", "Photobooth cinematic", "Full lighting design"] },
  { name: "Noir Luxe", tag: "Black Tie Event", price: 32_000_000, features: ["Ballroom luxury concept", "Full fresh flower dark palette", "Custom stage & backdrop", "3D lighting sculpture", "Full area styling"] },
  { name: "Grand Noir", tag: "Ultra Premium", price: 55_000_000, features: ["Bespoke ballroom concept", "International floral design", "Luxury stage production", "Immersive lighting show", "Full experience design"] },
];

export const DOKUM_PACKAGES: Pkg[] = [
  { name: "Paket Cinematic I", tag: "Akad only", price: 6_000_000, features: ["1 fotografer editorial", "1 sinematografer", "300 foto edit premium", "Cinematic video 2 menit", "Soft file + USB"] },
  { name: "Paket Cinematic II", tag: "Full Day", price: 9_500_000, popular: true, features: ["2 fotografer editorial", "2 sinematografer", "500 foto edit", "Cinematic video 4 menit", "Album luxury cetak"] },
  { name: "Paket Director's Cut", tag: "Pre + Full Day", price: 14_000_000, features: ["Tim sinematik 5 orang", "Pre-wedding session", "Same day edit", "Feature film 7 menit", "Album box premium"] },
  { name: "Paket Noir Signature", tag: "Full Production", price: 20_000_000, features: ["Full production team", "Drone coverage", "Feature film 10 menit", "Behind the scenes cut", "Album & photobook luxury"] },
];

export const PROCESS_STEPS = [
  { n: "01", title: "Konsultasi Privat", desc: "Kami mengenal Anda lebih dalam — visi, kepribadian, dan impian pernikahan Anda.", icon: "MessageCircle" },
  { n: "02", title: "Konsep Eksklusif", desc: "Tim kreatif kami merancang konsep unik yang benar-benar milik Anda seorang.", icon: "ClipboardList" },
  { n: "03", title: "Eksekusi Presisi", desc: "Hari H dijalankan dengan ketepatan penuh. Anda menikmati, kami memimpin.", icon: "HeartHandshake" },
  { n: "04", title: "Warisan Abadi", desc: "Dokumentasi sinematik premium yang akan Anda kenang selamanya.", icon: "Image" },
];

export const TESTIMONIALS = [
  {
    quote: "Noir Planner benar-benar membawa pernikahan kami ke level yang tidak pernah kami bayangkan. Konsepnya begitu unik, eksekusinya sangat presisi. Seluruh tamu terpesona dan kami merasa seperti royalti.",
    name: "Anastasia & Reza",
    date: "Juni 2026",
    avatar: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=200&q=80",
  },
  {
    quote: "Pengalaman bekerja dengan Noir sungguh berbeda kelas. Mereka tidak hanya mengorganisir — mereka menciptakan sebuah karya seni. Setiap detail sempurna, setiap momen terasa magical.",
    name: "Isabella & Adrian",
    date: "Mei 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "Noir Planner memahami bahwa pernikahan kami bukan sekadar acara — ini adalah ekspresi diri kami. Dan mereka mewujudkannya dengan sangat indah. Tidak ada satu pun yang mengecewakan.",
    name: "Clarissa & David",
    date: "April 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const BLOG_POSTS = [
  {
    title: "Tren Pernikahan Luxury 2026: Dark & Moody yang Sedang Mendunia",
    cat: "Inspirasi",
    date: "15 Mei 2026",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    title: "Mengapa Pernikahan Premium Membutuhkan Wedding Planner Eksklusif",
    cat: "Panduan",
    date: "5 April 2026",
    img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  },
  {
    title: "Dekorasi Ballroom Mewah: Panduan Memilih Konsep yang Tepat",
    cat: "Tips",
    date: "20 Maret 2026",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80",
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
