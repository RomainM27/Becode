
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let texteFinal = texte1 + texte2;
    return texteFinal;
}
let afficherCar5 =  (texte) => {
    let caract5 = texte[4]
    return caract5;
}
let afficher9Car =  (texte) => {
    let caract9 = texte.substr(0,9); 
    return caract9;
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
}
let IsString =  (texte) => {
    return typeof texte === 'string'?true : false
}

let AfficherExtensionString =  (texte) => {
    let lastindexof = texte.lastIndexOf('.');
    return texte.substr(lastindexof+1)
}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length -1 // -1 oblige a chaque fois
}
let InverseString =  (texte) => {
    return texte.split("").reverse().join(""); // split=>dans une array, reverse=>retourner l array, join => remettre en string
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    let arraypos = []
    array.forEach(ele => {
        arraypos.push(Math.abs(ele))
    });
    return arraypos
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon,2))
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(Math.pow(ab,2) + Math.pow(ac,2)) 
}
let calculIMC =  (poids, taille) => {
    return parseFloat((poids/ Math.pow(taille,2)).toFixed(2))
}
