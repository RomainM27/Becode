
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let dateActuelle = new Date();
    if (dateActuelle.getHours() > 17 && dateActuelle.getMinutes() > 30){
      target.innerHTML = "oui";
    }else {
      target.innerHTML = "moooon";
    }
})();
