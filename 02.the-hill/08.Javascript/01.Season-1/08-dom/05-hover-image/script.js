// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here

    let img = document.querySelector(".material figure img");
    let imgHover = img.dataset.hover;
    let imgNotHover = img.src;
    console.log(img.dataset.hover);
    console.log(img.src);
    
    img.addEventListener("mouseover", () => {
        img.src = imgHover;
    })
    img.addEventListener("mouseout", () => {
        img.src = imgNotHover;
    })

})();
