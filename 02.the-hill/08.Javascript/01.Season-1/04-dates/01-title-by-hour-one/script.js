
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let date = new Date();
    console.log(date)
    console.log(date.getHours())
    if (date.getHours() > 17 ) {
        document.getElementById("target").innerHTML = " good eve";
    }else {
        document.getElementById("target").innerHTML = "hello";
    }
    

    // your code here

})();
