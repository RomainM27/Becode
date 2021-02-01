
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    console.log(navigator.language)
    let dateActuelle = new Date();
    let dateLocale = dateActuelle.toLocaleString(navigator.language, {
        weekday: 'long', 
        month: 'long', 
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric', 
        minute: 'numeric'
      });
    document.getElementById("target").innerHTML = dateLocale;
})();
