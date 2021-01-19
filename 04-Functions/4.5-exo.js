let pointA = [-2, 2];
let pointB = [2, -2];

console.log(calcDistance(pointA,pointB));


/**
 * Create an array with tthe lenght of the para
 * @param  {Array} p1   An array
 * @param  {Array} p2   An array
 * @return {Number}     The distance between the 2 points
 * d=√ ( (x2−x1)2+(y2−y1)2  )
 * Math.pow(base, exposant)
 * Math.sqrt(l'element de la racine)
 */
function calcDistance(p1,p2){
	return Math.sqrt( Math.pow((p2[0]-p1[0]),2) + Math.pow((p2[1]-p1[1]),2));
}