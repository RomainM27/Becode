// 11-fetch/04-add/script.js - 11.4: ajouter un élément



(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () =>{
       
        const hero_name = document.getElementById("hero-name").value;
        const hero_powers = document.getElementById("hero-powers").value;
        const hero_alterEgo = document.getElementById("hero-alter-ego").value;
        let res = await fetch("http://localhost:3000/heroes");
        let Xmens = await res.json()
        if ((hero_name !== '')&&(hero_powers !== '')&&(hero_alterEgo !== '') ){
            let itemId = (Xmens.length+1);
            fetch("http://localhost:3000/heroes",{
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    id:itemId,
                    name:hero_name,
                    alterEgo:hero_alterEgo,
                    abilities:hero_powers.split(','),
                })
            })
        }else{
            console.log("Remplissez chaque case")
        }
    })
})();
/*
{
  "heroes": [
    {
      "id": 1,
      "name": "Cyclops",
      "alterEgo": "Scott Summers",
      "abilities": [
        "Optic force blasts",
        "Master tactician"
      ]
    },
    {
      "id": 2,
      "name": "Marvel Girl",
      "alterEgo": "Jean Grey",
      "abilities": [
        "Telekinesis",
        "Telepathy",
        "Astral projection"
      ]
    },
    {
      "id": 3,
      "name": "Beast",
      "alterEgo": "Hank McCoy",
      "abilities": [
        "Genius-level intellect",
        "Animal-like physiology with enhanced physical attributes and sharp claws and teeth"
      ]
    },
    {
      "id": 4,
      "name": "Angel",
      "alterEgo": "Warren Worthington III",
      "abilities": [
        "Flight via feathered wings and hollow bones",
        "Aerial adaptation",
        "Enhanced physical prowess"
      ]
    },
    {
      "id": 5,
      "name": "Iceman",
      "alterEgo": "Bobby Drake",
      "abilities": [
        "Cold and ice manipulation",
        "Ability to assume an enhanced physical form made of solid ice"
      ]
    },
*/