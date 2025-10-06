
    var acc = document.getElementsByClassName("accordion-header");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Menutup semua panel lain saat satu dibuka (opsional, hapus jika ingin bisa membuka banyak)
            for (var j = 0; j < acc.length; j++) {
                if (this !== acc[j]) {
                    acc[j].classList.remove("active");
                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }

            // Membuka atau menutup panel yang diklik
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }