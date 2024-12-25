function updateAOSAttributes() {
    const hp1 = document.querySelector('.data-aos-hp1');
    const hp2 = document.querySelector('.data-aos-hp2');

    if (window.innerWidth > 992) {
        if (hp1) hp1.setAttribute('data-aos', 'fade-down-right');
        if (hp2) hp2.setAttribute('data-aos', 'fade-up-left');
    } else {
        if (hp1) hp1.setAttribute('data-aos', 'fade-up-left');
        if (hp2) hp2.setAttribute('data-aos', 'fade-down-right');
    }

    AOS.refresh(); // Memberitahu AOS bahwa atribut telah berubah
}

// Panggil saat halaman dimuat dan setiap kali ukuran layar berubah
updateAOSAttributes();
window.addEventListener('resize', updateAOSAttributes);

// Inisialisasi AOS
AOS.init({
    duration: 1000,
});
