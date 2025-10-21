// SCRIPT UNTUK ANIMASI MUNCUL SAAT SCROLL (Halaman Mangrove Detail)

document.addEventListener("DOMContentLoaded", function() {
    // Pilih semua section konten yang ingin dianimasikan
    const sectionsToAnimate = document.querySelectorAll('.content-section');

    // Pengaturan Intersection Observer
    const observerOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.1 // Picu animasi saat 10% elemen terlihat
    };

    // Fungsi yang dijalankan saat elemen masuk/keluar viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Terapkan animasi langsung ke elemen
                entry.target.style.animation = `fadeInSlideUp 1s ease-out forwards`;
                
                // Hentikan pengamatan setelah animasi dipicu
                observer.unobserve(entry.target);
            }
        });
    };

    // Buat observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Amati setiap section
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});