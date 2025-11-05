// SCRIPT BERSAMA UNTUK SEMUA MODUL KELAS 1

document.addEventListener("DOMContentLoaded", function() {

    // === Animasi "Fade In" saat Scroll ===
    // Pilih semua section konten yang ingin dianimasikan
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    if (sectionsToAnimate.length > 0) {
        const observerOptions = {
            root: null, 
            rootMargin: '0px', 
            threshold: 0.1 // Picu saat 10% elemen terlihat
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Terapkan animasi langsung
                    entry.target.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Hentikan pengamatan
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }

    // === Daftar Isi (Table of Contents) Aktif saat Scroll ===
    const tocLinks = document.querySelectorAll('.table-of-contents a');
    const contentSections = document.querySelectorAll('.main-content section[id]');
    
    if (tocLinks.length > 0 && contentSections.length > 0) {
        const onScroll = () => {
            let currentSectionId = 'hero'; // Default ke hero
            
            contentSections.forEach(section => {
                const sectionTop = section.offsetTop - 100; // Offset 100px
                if (window.scrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.parentElement.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.parentElement.classList.add('active');
                }
            });
        };
        
        onScroll(); // Panggil di awal
        window.addEventListener('scroll', onScroll); // Panggil saat scroll
    }
});