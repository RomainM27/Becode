
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16); // genere une couleur random grace a la base 16
        document.body.style.backgroundColor = "#" + randomColor;
      }
      run.addEventListener("click", setBg);
      setBg();
    // your code here
})();
