<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&amp;family=Manrope:wght@400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-surface": "#e5e2e1",
                        "surface-tint": "#ffb5a0",
                        "surface-container-low": "#1c1b1b",
                        "secondary": "#cbc6b8",
                        "primary-fixed": "#ffdbd1",
                        "on-secondary-fixed-variant": "#49473c",
                        "on-primary-fixed-variant": "#872100",
                        "background": "#131313",
                        "tertiary-fixed": "#e4e2e1",
                        "on-primary-fixed": "#3b0900",
                        "tertiary-container": "#929090",
                        "on-tertiary-container": "#2a2a2a",
                        "primary-fixed-dim": "#ffb5a0",
                        "inverse-primary": "#b12e00",
                        "on-tertiary": "#303030",
                        "on-background": "#e5e2e1",
                        "on-error-container": "#ffdad6",
                        "tertiary-fixed-dim": "#c8c6c6",
                        "tertiary": "#c8c6c6",
                        "secondary-container": "#49473c",
                        "surface-container": "#20201f",
                        "on-tertiary-fixed-variant": "#474747",
                        "outline-variant": "#5b4039",
                        "secondary-fixed": "#e7e2d3",
                        "surface-variant": "#353535",
                        "on-tertiary-fixed": "#1b1c1c",
                        "on-secondary-container": "#b9b5a7",
                        "surface-dim": "#131313",
                        "error-container": "#93000a",
                        "surface": "#131313",
                        "on-primary": "#601500",
                        "surface-container-lowest": "#0e0e0e",
                        "primary-container": "#ff5724",
                        "on-surface-variant": "#e4beb4",
                        "on-secondary-fixed": "#1d1c13",
                        "on-secondary": "#323126",
                        "inverse-on-surface": "#313030",
                        "on-error": "#690005",
                        "inverse-surface": "#e5e2e1",
                        "secondary-fixed-dim": "#cbc6b8",
                        "surface-bright": "#393939",
                        "outline": "#ab8980",
                        "error": "#ffb4ab",
                        "primary": "#ffb5a0",
                        "surface-container-highest": "#353535",
                        "on-primary-container": "#541100",
                        "surface-container-high": "#2a2a2a"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "fontFamily": {
                        "headline": ["Inter"],
                        "body": ["Manrope"],
                        "label": ["Space Grotesk"]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        body {
            background-color: #131313;
            color: #e5e2e1;
            font-family: 'Manrope', sans-serif;
        }
        .hero-gradient {
            background: linear-gradient(180deg, rgba(19,19,19,0) 0%, rgba(19,19,19,1) 100%);
        }
        .tachometer-glow {
            box-shadow: 0 0 15px rgba(255, 87, 36, 0.3);
        }
    </style>
</head>
<body class="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
<!-- TopAppBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-2xl shadow-black/20 no-border tonal-shift">
<div class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
<div class="flex items-center gap-12">
<span class="text-2xl font-black tracking-tighter text-[#E4DFD0] uppercase font-headline">one2one</span>
<div class="hidden md:flex items-center gap-8">
<a class="font-label uppercase tracking-widest text-xs text-orange-500 border-b-2 border-orange-500 pb-1" href="#">Inventory</a>
<a class="font-label uppercase tracking-widest text-xs text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors" href="#">Heritage</a>
<a class="font-label uppercase tracking-widest text-xs text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors" href="#">Atelier</a>
<a class="font-label uppercase tracking-widest text-xs text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors" href="#">Journal</a>
</div>
</div>
<div class="flex items-center gap-6">
<button class="material-symbols-outlined text-[#E4DFD0]/70 hover:bg-[#353535]/50 transition-all duration-300 p-2 rounded-lg">search</button>
<button class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-label uppercase tracking-widest text-[10px] font-bold hover:translate-y-[-2px] transition-all duration-300 tachometer-glow active:scale-95">
                    Inquire Now
                </button>
<button class="md:hidden material-symbols-outlined text-[#E4DFD0]">menu</button>
</div>
</div>
</nav>
<main class="pt-32 pb-24 max-w-[1440px] mx-auto px-8">
<!-- Header Section -->
<header class="mb-16">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="max-w-2xl">
<span class="font-label text-primary-container uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">The Collection</span>
<h1 class="font-headline font-black text-6xl md:text-7xl tracking-tighter leading-none mb-6">CURATED<br/>PERFORMANCE.</h1>
<p class="font-body text-secondary max-w-md text-lg leading-relaxed opacity-80">
                        An elite assembly of engineered masterpieces, vetted for provenance and mechanical excellence.
                    </p>
</div>
<div class="flex items-center gap-4 font-label text-[10px] uppercase tracking-widest text-secondary/50">
<span class="text-on-surface">42 Units Available</span>
<span class="w-12 h-[1px] bg-outline-variant/30"></span>
<span>Global Logistics Enabled</span>
</div>
</div>
</header>
<div class="flex flex-col lg:flex-row gap-12">
<!-- SideNavBar (Filter Context) -->
<aside class="w-full lg:w-72 flex-shrink-0">
<div class="sticky top-32 space-y-12">
<!-- Brand Filter -->
<div class="space-y-4">
<label class="font-label uppercase tracking-widest text-[10px] font-bold text-primary-container">Manufacturer</label>
<div class="relative">
<select class="w-full bg-surface-container-low border-none text-on-surface font-body text-sm py-3 px-4 rounded-lg appearance-none focus:ring-1 focus:ring-primary-container transition-all">
<option>All Manufacturers</option>
<option>Porsche</option>
<option>Ferrari</option>
<option>McLaren</option>
<option>Aston Martin</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary/40">expand_more</span>
</div>
</div>
<!-- Year Slider -->
<div class="space-y-6">
<div class="flex justify-between items-center">
<label class="font-label uppercase tracking-widest text-[10px] font-bold text-primary-container">Year Range</label>
<span class="font-label text-[10px] text-secondary">1990 — 2024</span>
</div>
<div class="relative h-1.5 bg-surface-container-highest rounded-full">
<div class="absolute left-1/4 right-0 h-full bg-primary-container rounded-full"></div>
<div class="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-on-surface rounded-full shadow-lg border-2 border-primary-container cursor-pointer"></div>
<div class="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-on-surface rounded-full shadow-lg border-2 border-primary-container cursor-pointer"></div>
</div>
</div>
<!-- Body Style -->
<div class="space-y-4">
<label class="font-label uppercase tracking-widest text-[10px] font-bold text-primary-container">Configuration</label>
<div class="grid grid-cols-1 gap-2">
<button class="flex items-center justify-between px-4 py-3 bg-[#353535] text-white border-l-4 border-orange-600 font-label text-[10px] uppercase tracking-widest text-left transition-all">
                                Coupé <span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">check_circle</span>
</button>
<button class="flex items-center justify-between px-4 py-3 text-[#E4DFD0]/50 hover:bg-[#353535]/30 font-label text-[10px] uppercase tracking-widest text-left transition-all hover:translate-x-1">
                                SUV
                            </button>
<button class="flex items-center justify-between px-4 py-3 text-[#E4DFD0]/50 hover:bg-[#353535]/30 font-label text-[10px] uppercase tracking-widest text-left transition-all hover:translate-x-1">
                                Cabriolet
                            </button>
<button class="flex items-center justify-between px-4 py-3 text-[#E4DFD0]/50 hover:bg-[#353535]/30 font-label text-[10px] uppercase tracking-widest text-left transition-all hover:translate-x-1">
                                Track-Only
                            </button>
</div>
</div>
<!-- Mileage -->
<div class="space-y-6">
<div class="flex justify-between items-center">
<label class="font-label uppercase tracking-widest text-[10px] font-bold text-primary-container">Maximum Mileage</label>
<span class="font-label text-[10px] text-secondary">15,000 MI</span>
</div>
<input class="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" type="range"/>
</div>
<button class="w-full bg-[#1C1B1B] border border-outline-variant/20 py-4 font-label uppercase tracking-widest text-[10px] text-on-surface hover:bg-surface-container-highest transition-colors">
                        Reset Parameters
                    </button>
</div>
</aside>
<!-- Inventory Grid -->
<section class="flex-grow">
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
<!-- Card 1 -->
<div class="group cursor-pointer">
<div class="relative overflow-hidden mb-6 aspect-[16/10] bg-surface-container-low rounded-lg">
<img alt="Porsche 911" class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out" data-alt="Modern silver Porsche 911 parked on a moody coastal road with foggy atmosphere and cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKiFPf0YzShuACE01NrSRPPsQ7Wvonjl7hj37DY71Y_xpSlf9eumebnoV3T3ebvZ71eqvocheuLCeRh3djPtEZVyaQ_r0ksqwZ8PWDEXJrAdVaylO5mfXl8emZUVTOJ_QhCN2vSUvRx96CiBWnXTvVNqLj3Q5KecEGi2dr7G45iROS7BMwOzc7K4nQFNrt0d_gagbThQN2vH0-9LSCSc--K8KA3U9iP7JTWhWCrw8iObC9VfV9Sf2PyBDBD9ueM0zb0QCRRk4yMoa9"/>
<div class="absolute top-4 left-4">
<span class="bg-primary-container text-on-primary-container font-label text-[10px] uppercase font-black px-3 py-1 tracking-widest rounded-sm">Just Arrived</span>
</div>
</div>
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-headline font-bold text-2xl tracking-tight text-on-surface">911 GT3 Touring</h3>
<p class="font-label text-[10px] uppercase tracking-widest text-secondary mt-1">Porsche · Stuttgart</p>
</div>
<span class="font-label text-lg font-bold text-on-surface">$248,500</span>
</div>
<div class="flex gap-4 mt-6 pt-6 border-t border-outline-variant/10">
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Year</span>
<span class="font-label text-sm text-on-surface">2023</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Mileage</span>
<span class="font-label text-sm text-on-surface">1,420 MI</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Engine</span>
<span class="font-label text-sm text-on-surface">4.0L H6</span>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="group cursor-pointer">
<div class="relative overflow-hidden mb-6 aspect-[16/10] bg-surface-container-low rounded-lg">
<img alt="Ferrari" class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out" data-alt="Rosso Corsa Ferrari F8 Tributo detail shot showing aerodynamic lines in a clean professional studio setting with soft key light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3oCa1j0dlR1ENyL2yLmMaFSch1_hkPV1HRtUXwbSXU4Ev9z71l_ngZBZ-BH2OkDIVgtsdfcGYXWAaxscueGOGK43AVlGzF8qEtftQ1F-ATaMif2wdmtefdVu0wAa3Es-vJFMJrOyob6GhBrL86maEqHF3hfpH0We-vLiv0IAtCxnJw1pYSl_W5J9c56LD50KlGDu12JhBXBHqp6bb_kqLr59TLz5npTD_Zl2AMtCxhBzIbRHNTxPpnuDVzkK35ZxxS6a6C6cTl6Tl"/>
<div class="absolute top-4 left-4">
<span class="bg-[#1C1B1B]/80 backdrop-blur-md text-[#E4DFD0] font-label text-[10px] uppercase font-black px-3 py-1 tracking-widest rounded-sm">Reserved</span>
</div>
</div>
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-headline font-bold text-2xl tracking-tight text-on-surface">F8 Tributo</h3>
<p class="font-label text-[10px] uppercase tracking-widest text-secondary mt-1">Ferrari · Maranello</p>
</div>
<span class="font-label text-lg font-bold text-on-surface">$312,000</span>
</div>
<div class="flex gap-4 mt-6 pt-6 border-t border-outline-variant/10">
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Year</span>
<span class="font-label text-sm text-on-surface">2022</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Mileage</span>
<span class="font-label text-sm text-on-surface">850 MI</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Engine</span>
<span class="font-label text-sm text-on-surface">3.9L V8-T</span>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group cursor-pointer">
<div class="relative overflow-hidden mb-6 aspect-[16/10] bg-surface-container-low rounded-lg">
<img alt="Aston Martin" class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out" data-alt="British racing green Aston Martin Vantage profile shot in a historical urban alley with cobblestones and warm dusk lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw8OOdVDXhiEAVFNa_i_6efjcpUEP5-U5eR3CKMI4UMHrjHGs5oqKXg_xaFwqQ1CmoJ_zRJ527qfs7VIv7AeHWilRTbKzqFa_mFXZus6KLzw3Aa74dmPzJXqur4HjfYWZkxgYoAZSfWuE1iwcMxgJcZnxYVFq4llKjBR_oXdnVpy2ODfot4rhC4cYamSpfpHu1OpymvaOLZCQclnhuETUSw-zNGr0za_bIJTuHderDG8Kg-BsQH_nK6_5OkaNRLompZw-RoUR9D2xl"/>
</div>
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-headline font-bold text-2xl tracking-tight text-on-surface">Vantage F1 Edition</h3>
<p class="font-label text-[10px] uppercase tracking-widest text-secondary mt-1">Aston Martin · Gaydon</p>
</div>
<span class="font-label text-lg font-bold text-on-surface">$175,000</span>
</div>
<div class="flex gap-4 mt-6 pt-6 border-t border-outline-variant/10">
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Year</span>
<span class="font-label text-sm text-on-surface">2023</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Mileage</span>
<span class="font-label text-sm text-on-surface">2,100 MI</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Engine</span>
<span class="font-label text-sm text-on-surface">4.0L V8-T</span>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="group cursor-pointer">
<div class="relative overflow-hidden mb-6 aspect-[16/10] bg-surface-container-low rounded-lg">
<img alt="McLaren" class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-in-out" data-alt="Papaya orange McLaren 720S front 3/4 view on a modern architectural bridge with sharp shadows and high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAHfel6-2om-AEdjpAVK2c-S86VWDzHmm92D0Q3BTpHXwCntqxPjcu1n2WRDHpA7X5IYyRT8AEDSej0R8lyNQwwRkZbCU0JvW0rb4lQYQqCLPl7s5t_iIWi6gGwgL-1v3FVgnOBi8LCQdXiYZ82jMXzKnA59leAqzm044zw7-hHqAwE5JIEZ3TYshLWOhOBDzQtwgSNmHPnvHtNoxVVJWCUnt6CJiAalYvMIZrODk5VxfTkUTWtMMHxafGHB2Ow2Oo9uwkK_gH85dB"/>
</div>
<div class="flex justify-between items-start mb-2">
<div>
<h3 class="font-headline font-bold text-2xl tracking-tight text-on-surface">720S Performance</h3>
<p class="font-label text-[10px] uppercase tracking-widest text-secondary mt-1">McLaren · Woking</p>
</div>
<span class="font-label text-lg font-bold text-on-surface">$295,000</span>
</div>
<div class="flex gap-4 mt-6 pt-6 border-t border-outline-variant/10">
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Year</span>
<span class="font-label text-sm text-on-surface">2021</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Mileage</span>
<span class="font-label text-sm text-on-surface">4,500 MI</span>
</div>
<div class="flex flex-col">
<span class="font-label text-[9px] uppercase text-secondary/50 tracking-tighter">Engine</span>
<span class="font-label text-sm text-on-surface">4.0L V8-T</span>
</div>
</div>
</div>
</div>
<!-- Load More / Pagination -->
<div class="mt-24 flex flex-col items-center gap-8">
<div class="flex gap-2">
<button class="w-12 h-12 flex items-center justify-center bg-surface-container-highest border border-outline-variant/10 text-on-surface">1</button>
<button class="w-12 h-12 flex items-center justify-center hover:bg-surface-container-low transition-colors text-secondary">2</button>
<button class="w-12 h-12 flex items-center justify-center hover:bg-surface-container-low transition-colors text-secondary">3</button>
<span class="w-12 h-12 flex items-center justify-center text-secondary">...</span>
<button class="w-12 h-12 flex items-center justify-center hover:bg-surface-container-low transition-colors text-secondary">12</button>
</div>
<button class="flex items-center gap-4 font-label uppercase tracking-[0.3em] text-[10px] text-primary-container group">
<span class="w-8 h-[1px] bg-primary-container group-hover:w-16 transition-all duration-500"></span>
                        View All Archives
                    </button>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="w-full border-t border-[#353535]/10 bg-[#131313]">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-[1920px] mx-auto">
<div class="flex flex-col gap-2 mb-8 md:mb-0">
<span class="text-lg font-bold text-[#E4DFD0] font-headline tracking-tighter uppercase">one2one</span>
<span class="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40">© 2024 ONE2ONE PERFORMANCE LUXURY. ENGINEERED PRECISION.</span>
</div>
<div class="flex flex-wrap justify-center gap-10">
<a class="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Privacy</a>
<a class="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Terms</a>
<a class="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Dealer Network</a>
<a class="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Press Kit</a>
</div>
</div>
</footer>
</body></html>