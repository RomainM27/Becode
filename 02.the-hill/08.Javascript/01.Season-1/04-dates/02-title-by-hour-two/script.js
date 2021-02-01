
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let dateActuelle = new Date();

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

console.log(navigator.language)

let dateLocale = dateActuelle.toLocaleString(navigator.language, {

  hour: '2-digit', 
  minute: '2-digit',

});

console.log(dateLocale);
    
})();
