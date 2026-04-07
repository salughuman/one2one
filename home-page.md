<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&amp;family=Manrope:wght@400;500;600&amp;family=Space+Grotesk:wght@300;400;500;700&amp;display=swap" rel="stylesheet"/>
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
        body { font-family: 'Manrope', sans-serif; background-color: #131313; color: #e5e2e1; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
        .active-fill { font-variation-settings: 'FILL' 1; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .motion-reveal {
            animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
        }
        @keyframes reveal {
            to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .stagger-1 { animation-delay: 80ms; }
        .stagger-2 { animation-delay: 160ms; }
        .stagger-3 { animation-delay: 240ms; }

        .fluid-h2 { font-size: clamp(2rem, 5vw, 3rem); }
        .fluid-quote { font-size: clamp(1.125rem, 2vw, 1.25rem); }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- TopAppBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-2xl shadow-black/20">
<div class="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
<div class="text-2xl font-black tracking-tighter text-[#E4DFD0] uppercase font-headline">
                one2one
            </div>
<div class="hidden md:flex gap-12">
<a class="font-label text-orange-500 border-b-2 border-orange-500 pb-1 uppercase tracking-widest text-xs" href="#">Inventory</a>
<a class="font-label text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors uppercase tracking-widest text-xs" href="#">Heritage</a>
<a class="font-label text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors uppercase tracking-widest text-xs" href="#">Atelier</a>
<a class="font-label text-[#E4DFD0]/70 hover:text-[#E4DFD0] transition-colors uppercase tracking-widest text-xs" href="#">Journal</a>
</div>
<div class="flex items-center gap-6">
<button class="hidden lg:block font-label text-xs uppercase tracking-widest bg-primary-container text-on-primary-container px-6 py-3 rounded-lg scale-95 active:scale-90 transition-transform">
                    Inquire Now
                </button>
<button class="p-2 hover:bg-[#353535]/50 transition-all duration-300 rounded-lg">
<span class="material-symbols-outlined text-[#E4DFD0]">menu</span>
</button>
</div>
</div>
</nav>
<main>
<!-- Cinematic Hero Section -->
<section class="relative h-screen w-full flex items-center overflow-hidden">
<div class="absolute inset-0 z-0">
<div class="absolute inset-0 bg-black/40 z-10"></div>
<img class="w-full h-full object-cover" data-alt="Cinematic low-angle shot of a classic silver Porsche 911 in a minimalist concrete gallery with soft atmospheric overhead lighting" fetchpriority="high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H"/>
<div class="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80 z-20"></div>
</div>
<div class="relative z-30 container mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
<div class="md:col-span-8 lg:col-span-6 pt-24">
<h1 class="text-6xl md:text-8xl font-black font-headline text-[#E4DFD0] leading-tight tracking-tighter mb-8 uppercase">
                        Antwerp's Finest Destination .
                    </h1>
<p class="text-lg md:text-xl font-body text-[#E4DFD0]/80 mb-12 max-w-lg leading-relaxed">
                        Curating the world's most exceptional automotive icons for the refined collector.
                    </p>
<div class="flex flex-wrap gap-6">
<button class="bg-primary-container text-on-primary-container font-label uppercase tracking-widest px-8 py-4 rounded-lg text-sm shadow-xl shadow-primary-container/20 hover:-translate-y-1 transition-all duration-500">
                            Browse the Collection
                        </button>
<button class="border border-[#E4DFD0]/20 backdrop-blur-sm text-[#E4DFD0] font-label uppercase tracking-widest px-8 py-4 rounded-lg text-sm hover:bg-[#E4DFD0]/10 transition-all duration-500">
                            Our Heritage
                        </button>
</div>
</div>
</div>
<div class="absolute bottom-12 left-8 z-30 flex flex-col items-center gap-4">
<span class="font-label text-[10px] uppercase tracking-[0.3em] text-[#E4DFD0]/40 vertical-text" style="writing-mode: vertical-rl;">SCROLL TO EXPLORE</span>
<div class="w-[1px] h-12 bg-gradient-to-b from-[#E4DFD0]/40 to-transparent"></div>
</div>
</section>
<!-- Brand Banner Section -->
<section class="bg-surface-container-low py-16 border-y border-[#353535]/10">
<div class="container mx-auto px-8">
<div class="flex flex-wrap justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
<span class="font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter">PORSCHE</span>
<span class="font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter">FERRARI</span>
<span class="font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter">LAMBORGHINI</span>
<span class="font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter">BENTLEY</span>
<span class="font-headline font-extrabold text-2xl text-[#E4DFD0] tracking-tighter">ASTON MARTIN</span>
</div>
</div>
</section>
<!-- Featured Inventory -->
<section class="py-32 bg-surface">
<div class="container mx-auto px-8">
<div class="flex justify-between items-end mb-20">
<div>
<span class="font-label text-orange-600 text-xs uppercase tracking-[0.3em] mb-4 block">Currently Available</span>
<h2 class="text-5xl font-black font-headline text-[#E4DFD0] tracking-tight uppercase">Featured Icons</h2>
</div>
<div class="hidden md:block">
<a class="font-label text-xs uppercase tracking-widest border-b border-orange-600 pb-1 text-orange-600 hover:text-orange-400 transition-colors" href="#">View All Inventory</a>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
<div class="group cursor-pointer">
<div class="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="Detailed side profile of a white supercar in a dark professional studio with atmospheric lighting reflecting on the bodywork" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs9icuwSSiG9CN0t_OgGZ1QH4LqgvH8Q7gYQR2tftWm5NuYBmH0X2J6lA0LY6b8KMrJkr_qnrsEt6oSbKYOa3DNt_pteng6jrLM01OZ7oOnmxt9Q0lGZ7KJhDPHAl9gtt6xEkkKhbAYTkoZr7mmDh_czy03YqRi1F5LWe_I5MwD8_LDzmo-Z9uOnjEuIn6younDwJP1RrdG34NW7_FqfqgFaFPSYPXdJHD3NeI22vHmoQA8wZjbpQyFkwx5XPDLe4IjGlOYhFUKJ8b"/>
<div class="absolute top-6 left-6">
<span class="bg-orange-600 text-white font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded">New Arrival</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-bold text-[#E4DFD0] group-hover:text-orange-500 transition-colors">GT3 RS Weissach</h3>
<div class="flex gap-4 mt-2 text-[#E4DFD0]/50 font-label text-xs uppercase tracking-widest">
<span>2024</span>
<span>•</span>
<span>520 BHP</span>
<span>•</span>
<span>4.0L FLAT-6</span>
</div>
</div>
<span class="text-[#E4DFD0] font-label text-lg">€284,000</span>
</div>
</div>
<div class="group cursor-pointer">
<div class="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" data-alt="Dramatic high-contrast shot of a dark performance vehicle engine bay showing carbon fiber details and engineering precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9oC8B-_U4t7zPdmt9qhC-VuaQB7uxX0vu2zRwj64lTPS5Qexi2n82JWj7gDMn6uKWtn3Ui2tjJc2UdQRLxPDvdTVO-nW3WMdsAAHXoEuD7JjjVm8bhiEBhM-63BAXwXRtQDEGN_uTT42knliw-TVoAHnlzKO8NhTv7MTw-74xZVjkGPB2UVHo5C4l3M9ToQvvO27GFN44esixqnxEq0KskgkXXI47MEgHgIahZo_R1iYYyeHjj0cSQRbrmuK8JIIiN-kg7hCbaXGy"/>
<div class="absolute top-6 left-6">
<span class="bg-[#353535]/80 backdrop-blur-md text-white font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded">Consignment</span>
</div>
</div>
<div class="flex justify-between items-start">
<div>
<h3 class="text-2xl font-headline font-bold text-[#E4DFD0] group-hover:text-orange-500 transition-colors">F40 Heritage Series</h3>
<div class="flex gap-4 mt-2 text-[#E4DFD0]/50 font-label text-xs uppercase tracking-widest">
<span>1991</span>
<span>•</span>
<span>471 BHP</span>
<span>•</span>
<span>2.9L V8 TWIN-TURBO</span>
</div>
</div>
<span class="text-[#E4DFD0] font-label text-lg">Inquire</span>
</div>
</div>
</div>
</div>
</section>
<!-- In the Media Section (Replaced Critical Acclaim) -->
<section class="py-32 bg-surface-container-low overflow-hidden">
<div class="container mx-auto px-8">
<div class="mb-16 motion-reveal">
<span class="font-label text-primary-container text-xs font-bold uppercase tracking-[0.4em] mb-4 block">PRESS &amp; FEATURES</span>
<h2 class="text-5xl md:text-6xl font-black font-headline text-[#E4DFD0] tracking-tighter uppercase leading-none">In the Media</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
<!-- Card 1: LUZCINE Magazine -->
<div class="motion-reveal stagger-1 group">
<div class="relative aspect-[4/3] overflow-hidden rounded-lg mb-8 shadow-2xl">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" data-alt="Magazine cover style layout featuring a dark grey McLaren parked in a professional studio setting with the LUZCINE logo across the top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9icuwSSiG9CN0t_OgGZ1QH4LqgvH8Q7gYQR2tftWm5NuYBmH0X2J6lA0LY6b8KMrJkr_qnrsEt6oSbKYOa3DNt_pteng6jrLM01OZ7oOnmxt9Q0lGZ7KJhDPHAl9gtt6xEkkKhbAYTkoZr7mmDh_czy03YqRi1F5LWe_I5MwD8_LDzmo-Z9uOnjEuIn6younDwJP1RrdG34NW7_FqfqgFaFPSYPXdJHD3NeI22vHmoQA8wZjbpQyFkwx5XPDLe4IjGlOYhFUKJ8b"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div class="space-y-4">
<span class="font-label text-[10px] uppercase tracking-[0.2em] text-primary-container font-bold">LUXURY AUTO MAGAZINE</span>
<h3 class="text-2xl md:text-3xl font-headline font-bold text-[#E4DFD0] group-hover:text-primary-container transition-colors duration-300">One2One: Redefining the Showroom Experience</h3>
<p class="font-body text-[#E4DFD0]/60 leading-relaxed max-w-lg">An in-depth look at how Antwerp's premier dealership merges performance heritage with curated hospitality.</p>
</div>
</div>
<!-- Card 2: Exclusive Reveal -->
<div class="motion-reveal stagger-2 group">
<div class="relative aspect-[4/3] overflow-hidden rounded-lg mb-8 shadow-2xl">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" data-alt="High-end event photo showing a crowd of elegant guests gathered around a sleek rose-gold luxury performance car on a red carpet in a brightly lit modern showroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jomkSA8YWR-RF6bvU25-rtc88Ccc6eRc5l9hrMAHoD1ilTDLcsJSI1eapGoIyZT9nXr09a3x0FQXszHsLfap3j0q7r7Q_4k8QL1SpdoWH_yVsxBjecGs0M_A-vJyWX8DojSevxgcNXppQbntNMzsIwOMrSrPQvFJIWiSSwZoDPoevLkAuOgDXUH9rurzwZ4O_T5A2kTdfrvFCDmIGE_rng5DiquVLZTiWFWvLtSSO6jiaMO6OBlATUTja_BRW18yI73uo_coEx1H"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div class="space-y-4">
<span class="font-label text-[10px] uppercase tracking-[0.2em] text-primary-container font-bold">THE AUTOMOTIVE EDIT</span>
<h3 class="text-2xl md:text-3xl font-headline font-bold text-[#E4DFD0] group-hover:text-primary-container transition-colors duration-300">Behind the Scenes at Belgium's Most Exclusive Reveal</h3>
<p class="font-body text-[#E4DFD0]/60 leading-relaxed max-w-lg">Our annual collector's evening drew connoisseurs from across Europe for an unforgettable unveiling.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Newsletter CTA -->
<section class="py-24 bg-surface">
<div class="container mx-auto px-8">
<div class="relative overflow-hidden bg-primary-container rounded-lg p-16 flex flex-col md:flex-row items-center justify-between gap-8">
<div class="relative z-10 max-w-xl">
<h2 class="text-4xl font-black font-headline text-on-primary-container mb-4 uppercase">The Curator's Letter</h2>
<p class="text-on-primary-container/80 font-body">Get exclusive early access to new acquisitions and technical insights from our workshop.</p>
</div>
<div class="relative z-10 w-full md:w-auto flex flex-col md:flex-row gap-4">
<input class="bg-on-primary-container/10 border-transparent focus:ring-0 focus:border-on-primary-container/30 text-on-primary-container placeholder:text-on-primary-container/50 font-label text-xs uppercase tracking-widest px-6 py-4 min-w-[300px] rounded-lg" placeholder="EMAIL ADDRESS" type="email"/>
<button class="bg-on-primary-container text-primary-container font-label text-xs uppercase tracking-widest px-10 py-4 rounded-lg font-bold hover:bg-surface text-on-surface transition-colors">Subscribe</button>
</div>
<div class="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10">
<span class="material-symbols-outlined text-[300px]">speed</span>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full border-t border-[#353535]/10 bg-[#131313]">
<div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-[1920px] mx-auto">
<div class="mb-8 md:mb-0">
<div class="text-lg font-bold text-[#E4DFD0] font-headline uppercase tracking-tighter mb-4">ONE2ONE</div>
<p class="font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40">
                    © 2024 ONE2ONE PERFORMANCE LUXURY. ENGINEERED PRECISION.
                </p>
</div>
<div class="flex flex-wrap justify-center gap-10">
<a class="font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Privacy</a>
<a class="font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Terms</a>
<a class="font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Dealer Network</a>
<a class="font-label text-[10px] uppercase tracking-[0.2em] text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#">Press Kit</a>
</div>
<div class="mt-8 md:mt-0 flex gap-6">
<a class="text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#"><span class="material-symbols-outlined">alternate_email</span></a>
<a class="text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#"><span class="material-symbols-outlined">distance</span></a>
<a class="text-[#E4DFD0]/40 hover:text-orange-500 transition-colors" href="#"><span class="material-symbols-outlined">call</span></a>
</div>
</div>
</footer>
</body></html>