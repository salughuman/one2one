export type Vehicle = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  bhp: string;
  engine: string;
  transmission: string;
  mileage: string;
  price: string;
  badge: string;
  badgeClass: string;
  alt: string;
  src: string;
  color: string;
  interior: string;
  acceleration: string;
  topSpeed: string;
  description: string;
  narrative: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "porsche-911-gt3",
    title: "911 GT3",
    subtitle: "Porsche",
    year: "2022", bhp: "503 BHP", engine: "4.0L Flat-6 NA", transmission: "7-Speed PDK",
    mileage: "1,240 KM", price: "€245,000",
    badge: "Available", badgeClass: "bg-accent text-white",
    color: "Shark Blue", interior: "Black Alcantara / Leather",
    acceleration: "3.4s 0–100", topSpeed: "318 KM/H",
    alt: "2022 Porsche 911 GT3 in Shark Blue in a minimalist studio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjGT9MuJnJ4mbGeucz8oKNJ9lxosYrzVkwf9cvykkbLjxp2F8THHGKh5QV3C7ted78LMX619cfPUwAoeUUeZ0ymmFMq0FVrA0Odu3z9l6SIRoePcjrvVNqGjw8KorD77bKgS1Vsl9icvluM1BzGrvRx4kuqM_6tnDSvlZ0XExrXwRrMQxZTYd04nyHlj6w1zUeEEin7kUywMjgzbcA9BVCC6OCzCr78d2gMZMUtvKVni_tp1PoGe_bB1Oh32aXPzEBWCYlKTYUY-e",
    description: "Clubsport Package. Carbon fibre bucket seats. Front-axle lift system. Fully documented service history through the official Porsche network.",
    narrative: "This particular 911 GT3 represents the pinnacle of atmospheric precision. Finished in the iconic Shark Blue with Satin Black wheels, equipped with the desirable Clubsport Package and carbon fibre bucket seats. Its history is fully documented through the official Porsche network, supplemented by our comprehensive Car-Pass verification.",
  },
  {
    id: "ferrari-f8-tributo",
    title: "F8 Tributo",
    subtitle: "Ferrari",
    year: "2022", bhp: "710 BHP", engine: "3.9L V8 Twin-Turbo", transmission: "7-Speed DCT",
    mileage: "850 KM", price: "€312,000",
    badge: "Reserved", badgeClass: "bg-surface-border/80 backdrop-blur-md text-content-primary",
    color: "Rosso Corsa", interior: "Nero Leather",
    acceleration: "2.9s 0–100", topSpeed: "340 KM/H",
    alt: "Ferrari F8 Tributo in Rosso Corsa in a professional studio",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3oCa1j0dlR1ENyL2yLmMaFSch1_hkPV1HRtUXwbSXU4Ev9z71l_ngZBZ-BH2OkDIVgtsdfcGYXWAaxscueGOGK43AVlGzF8qEtftQ1F-ATaMif2wdmtefdVu0wAa3Es-vJFMJrOyob6GhBrL86maEqHF3hfpH0We-vLiv0IAtCxnJw1pYSl_W5J9c56LD50KlGDu12JhBXBHqp6bb_kqLr59TLz5npTD_Zl2AMtCxhBzIbRHNTxPpnuDVzkK35ZxxS6a6C6cTl6Tl",
    description: "Rosso Corsa over Nero leather. Full Ferrari service history. Delivery mileage only. Supplied with all original documentation.",
    narrative: "One of the most visceral mid-engined Ferraris of the modern era. This F8 Tributo presents in immaculate Rosso Corsa with delivery mileage, full Ferrari service history, and all original documentation. A rare opportunity to acquire a near-new example of this celebrated model.",
  },
  {
    id: "aston-martin-vantage-f1",
    title: "Vantage F1 Edition",
    subtitle: "Aston Martin",
    year: "2023", bhp: "535 BHP", engine: "4.0L V8 Twin-Turbo", transmission: "8-Speed Auto",
    mileage: "2,100 KM", price: "€175,000",
    badge: "Available", badgeClass: "bg-accent text-white",
    color: "British Racing Green", interior: "Obsidian Black Leather",
    acceleration: "3.6s 0–100", topSpeed: "314 KM/H",
    alt: "Aston Martin Vantage F1 Edition in British Racing Green",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw8OOdVDXhiEAVFNa_i_6efjcpUEP5-U5eR3CKMI4UMHrjHGs5oqKXg_xaFwqQ1CmoJ_zRJ527qfs7VIv7AeHWilRTbKzqFa_mFXZus6KLzw3Aa74dmPzJXqur4HjfYWZkxgYoAZSfWuE1iwcMxgJcZnxYVFq4llKjBR_oXdnVpy2ODfot4rhC4cYamSpfpHu1OpymvaOLZCQclnhuETUSw-zNGr0za_bIJTuHderDG8Kg-BsQH_nK6_5OkaNRLompZw-RoUR9D2xl",
    description: "Official F1 Safety Car Edition. Lime Green contrast stitching. Full Aston Martin service history. Supplied with all original documentation.",
    narrative: "The Vantage F1 Edition is the most focused, track-biased Vantage ever produced. This example in British Racing Green with Lime Green contrast stitching is one of a limited run, presented with full Aston Martin service history and all original documentation.",
  },
  {
    id: "mclaren-720s",
    title: "720S Performance",
    subtitle: "McLaren",
    year: "2021", bhp: "720 BHP", engine: "4.0L V8 Twin-Turbo", transmission: "7-Speed SSG",
    mileage: "4,500 KM", price: "€295,000",
    badge: "Available", badgeClass: "bg-accent text-white",
    color: "Papaya Orange", interior: "Carbon Black Alcantara",
    acceleration: "2.9s 0–100", topSpeed: "341 KM/H",
    alt: "McLaren 720S Performance in Papaya Orange",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAHfel6-2om-AEdjpAVK2c-S86VWDzHmm92D0Q3BTpHXwCntqxPjcu1n2WRDHpA7X5IYyRT8AEDSej0R8lyNQwwRkZbCU0JvW0rb4lQYQqCLPl7s5t_iIWi6gGwgL-1v3FVgnOBi8LCQdXiYZ82jMXzKnA59leAqzm044zw7-hHqAwE5JIEZ3TYshLWOhOBDzQtwgSNmHPnvHtNoxVVJWCUnt6CJiAalYvMIZrODk5VxfTkUTWtMMHxafGHB2Ow2Oo9uwkK_gH85dB",
    description: "Performance Pack. Electrochromic roof. MSO Carbon fibre interior. Full McLaren service history.",
    narrative: "The 720S Performance represents the apex of McLaren's Super Series. This Papaya Orange example is equipped with the Performance Pack, electrochromic roof, and MSO Carbon fibre interior. Presented with full McLaren service history and a comprehensive pre-delivery inspection.",
  },
  {
    id: "lamborghini-huracan-sto",
    title: "Huracán STO",
    subtitle: "Lamborghini",
    year: "2023", bhp: "640 BHP", engine: "5.2L V10 NA", transmission: "7-Speed LDF",
    mileage: "980 KM", price: "€349,000",
    badge: "New Arrival", badgeClass: "bg-accent text-white",
    color: "Arancio Borealis", interior: "Nero Alcantara",
    acceleration: "3.0s 0–100", topSpeed: "310 KM/H",
    alt: "Lamborghini Huracán STO in Arancio Borealis",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H",
    description: "Super Trofeo Omologata. Full carbon fibre body panels. Nero Alcantara interior. Delivery mileage.",
    narrative: "The Huracán STO is Lamborghini's most track-focused road car — a homologation special derived directly from the Super Trofeo race series. This near-new example in Arancio Borealis with full carbon fibre body panels is presented with delivery mileage and full Lamborghini documentation.",
  },
  {
    id: "ferrari-f40",
    title: "F40",
    subtitle: "Ferrari",
    year: "1991", bhp: "471 BHP", engine: "2.9L V8 Twin-Turbo", transmission: "5-Speed Manual",
    mileage: "12,400 KM", price: "Price on Request",
    badge: "Consignment", badgeClass: "bg-surface-border/80 backdrop-blur-md text-content-primary",
    color: "Rosso Corsa", interior: "Minimal Racing Interior",
    acceleration: "4.1s 0–100", topSpeed: "324 KM/H",
    alt: "Ferrari F40 in Rosso Corsa — a collector icon",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9oC8B-_U4t7zPdmt9qhC-VuaQB7uxX0vu2zRwj64lTPS5Qexi2n82JWj7gDMn6uKWtn3WMdsAAHXoEuD7JjjVm8bhiEBhM-63BAXwXRtQDEGN_uTT42knliw-TVoAHnlzKO8NhTv7MTw-74xZVjkGPB2UVHo5C4l3M9ToQvvO27GFN44esixqnxEq0KskgkXXI47MEgHgIahZo_R1iYYyeHjj0cSQRbrmuK8JIIiN-kg7hCbaXGy",
    description: "Matching numbers. Full documented history. One of the most significant collector Ferraris of the 20th century.",
    narrative: "The Ferrari F40 needs no introduction. This matching-numbers example presents with full documented history and has been maintained to an exceptional standard. One of the most significant collector Ferraris of the 20th century — available through private enquiry only.",
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}
