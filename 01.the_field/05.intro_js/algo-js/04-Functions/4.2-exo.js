console.log("Un nombre aléatoire entre 0 et 10 :"+rand10()+" un 2eme :"+ rand10());

/**
 * Calcul trandom
 * @param  {Number} max The max you want
 * @param  {Number} min The min you want
 * @return {Number}      a number between the max en min
 * (max - min) + min
 */
function rand10() {
    return Math.floor(Math.random() * (10 - 1) + 1);
}

