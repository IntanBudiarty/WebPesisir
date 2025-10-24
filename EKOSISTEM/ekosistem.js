// SCRIPT UNTUK ANIMASI MUNCUL SAAT SCROLL

document.addEventListener("DOMContentLoaded", function() {
    const sectionsToAnimate = document.querySelectorAll('.content-section');

    // Cek jika elemen ada sebelum menjalankan observer
    if (sectionsToAnimate.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Picu saat 10% elemen terlihat
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'; // Tampilkan elemen
                    entry.target.style.transform = 'translateY(0)'; // Kembalikan ke posisi normal
                    observer.unobserve(entry.target); // Hentikan pengamatan
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }
});