document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpeg"
    ];
    let current = 0;
    const hero = document.querySelector(".hero");
    const changeBackground = () => {
        hero.style.backgroundImage = `url('${images[current]}')`;
        current = (current + 1) % images.length;
    };
    changeBackground();
    setInterval(changeBackground, 5000);
});
