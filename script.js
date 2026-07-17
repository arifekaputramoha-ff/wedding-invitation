console.log("Wedding Invitation Ready");

/* =========================================
   ELEMENT
========================================= */

const body = document.body;

const cover = document.getElementById("cover");

const openInvitation = document.getElementById("openInvitation");

const music = document.getElementById("bgMusic");

const musicToggle = document.getElementById("musicToggle");

const backToTop = document.getElementById("backToTop");

/* =========================================
   SAAT WEBSITE DIBUKA
========================================= */

// Nonaktifkan scroll sebelum undangan dibuka

body.style.overflow = "hidden";

/* =========================================
   TOMBOL BUKA UNDANGAN
========================================= */

if (openInvitation) {

    openInvitation.addEventListener("click", function () {

        // Aktifkan scroll
        body.style.overflowY = "auto";

        // Putar musik
        if (music) {

            music.play().catch(function () {

                console.log("Musik belum dapat diputar.");

            });

        }

        // Tutup cover

        cover.classList.add("hide");

        // Scroll ke atas

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* =========================================
   TOMBOL MUSIK
========================================= */

if (musicToggle && music) {

    musicToggle.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicToggle.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

        } else {

            music.pause();

            musicToggle.innerHTML =
                '<i class="fa-solid fa-music"></i>';

        }

    });

}
/* =========================================
   COUNTDOWN
========================================= */

const weddingDate = new Date("July 26, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);

/* =========================================
   SMOOTH SCROLL MENU
========================================= */

const navLinks = document.querySelectorAll(".menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* =========================================
   NAMA TAMU OTOMATIS
========================================= */

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {

    const guestName = document.getElementById("guestName");

    const coverGuest = document.getElementById("coverGuest");

    if (guestName) {

        guestName.textContent = decodeURIComponent(guest);

    }

    if (coverGuest) {

        coverGuest.textContent = decodeURIComponent(guest);

    }

}
/* ========================================= */
/* BAB 23.2 - PREMIUM SCROLL ANIMATION */
/* ========================================= */

const animatedElements = document.querySelectorAll(
    "section, footer, .timeline-item, .couple-card, .event-card, .countdown-box, .gift-card, .rsvp-card, .wish-card"
);

const premiumObserver = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }else{

            entry.target.classList.remove("show");

        }

    });

},{
    threshold:0.20,
    rootMargin:"0px"
});

animatedElements.forEach(function(element){

    premiumObserver.observe(element);

});


/* ========================================= */
/* Delay Animasi Timeline */
/* ========================================= */

document.querySelectorAll(".timeline-item").forEach(function(item,index){

    item.style.transitionDelay = (index * 0.25) + "s";

});


/* ========================================= */
/* Delay Card Mempelai */
/* ========================================= */

document.querySelectorAll(".couple-card").forEach(function(card,index){

    card.style.transitionDelay = (index * 0.2) + "s";

});


/* ========================================= */
/* Delay Countdown */
/* ========================================= */

document.querySelectorAll(".countdown-box").forEach(function(box,index){

    box.style.transitionDelay = (index * 0.08) + "s";

});

/* =========================================
   BACK TO TOP
========================================= */

if(backToTop){

    window.addEventListener("scroll",function(){

        if(window.scrollY > 400){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click",function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* =========================================
   FORM RSVP
========================================= */

const attendanceForm = document.getElementById("attendanceForm");

if(attendanceForm){

    attendanceForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Terima kasih, konfirmasi kehadiran Anda berhasil dikirim.");

        attendanceForm.reset();

    });

}

/* =========================================
   FORM UCAPAN
========================================= */

const wishForm = document.getElementById("wishForm");

if(wishForm){

    wishForm.addEventListener("submit",function(e){

        e.preventDefault();

        alert("Terima kasih atas doa dan ucapannya.");

        wishForm.reset();

    });

}

/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load",function(){

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(function(){

            loader.classList.add("hide");

        },1000);

    }

});

/* =========================================
   PUTAR IKON MUSIK
========================================= */

if(music && musicToggle){

    music.addEventListener("play",function(){

        musicToggle.classList.add("playing");

    });

    music.addEventListener("pause",function(){

        musicToggle.classList.remove("playing");

    });

}

console.log("Semua fitur Wedding Invitation berhasil dimuat.");
/* ========================================= */
/* BAB 21 FINAL - PETAL ANIMATION */
/* ========================================= */

const petalsContainer = document.querySelector(".petals");

if (petalsContainer) {

    function createPetal() {

        const petal = document.createElement("div");

        petal.className = "petal";

        // Posisi awal acak
        petal.style.left = Math.random() * window.innerWidth + "px";

        // Ukuran acak
        const size = Math.random() * 18 + 18;
        petal.style.width = size + "px";
        petal.style.height = size + "px";

        // Lama animasi (8–14 detik)
        petal.style.animationDuration =
            (Math.random() * 6 + 8) + "s";

        // Sedikit variasi putaran
        petal.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        petalsContainer.appendChild(petal);

        petal.addEventListener("animationend", function () {
            petal.remove();
        });

    }

    // Munculkan 15 kelopak pertama
    for (let i = 0; i < 15; i++) {

        setTimeout(createPetal, i * 300);

    }

    // Tambah kelopak terus-menerus
    setInterval(createPetal, 700);

}
/* =========================================
   BAB 22 - COPY DANA
========================================= */

function copyDana() {

    const danaNumber = document.getElementById("danaNumber").textContent.trim();

    navigator.clipboard.writeText(danaNumber)
        .then(function () {

            alert("✅ Nomor DANA berhasil disalin!");

        })
        .catch(function () {

            alert("❌ Gagal menyalin nomor DANA.");

        });

}
/* ========================================= */
/* BAB 24.2 - PREMIUM NAVBAR */
/* ========================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    function updateNavbar() {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    // Jalankan saat halaman dibuka
    updateNavbar();

    // Jalankan saat scroll
    window.addEventListener("scroll", updateNavbar);

}