// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let slider = document.getElementById("slider")
    slider.addEventListener("change", () => {
        document.getElementById("target").innerHTML = slider.value;

    })
})();
