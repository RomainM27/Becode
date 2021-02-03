// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here

    let dataImg = document.getElementById("source");
    console.log(dataImg);
    let targetimg = document.getElementById("target")
    console.log(targetimg);
    targetimg.style.backgroundImage = "url("+dataImg.dataset.image+")";
    dataImg.remove();
    
})();
