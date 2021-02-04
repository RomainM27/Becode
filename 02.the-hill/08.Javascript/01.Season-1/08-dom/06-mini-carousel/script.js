// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    let i = 1;
    document.addEventListener("click", () => {
        let img = document.querySelector("img[alt=Carousel]");
        console.log(img);
        i > (gallery.length-1) ? i = 0 : i;
        img.src = gallery[i];
        i++;
    })
})();
