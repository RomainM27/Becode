window.onload = () => {
  let c = document.getElementById("mon_canvas");
  let width = c.width;
  let height = c.height;
  let ctx = c.getContext("2d");
  
  var imageObj = new Image();
  var ImageCannon = new Image();

  imageObj.onload = function() {
    ctx.drawImage(imageObj, 50, 50, 30, 30);
  }
  ImageCannon.onload= function(){
    ctx.drawImage(ImageCannon, width/2, height-50);
  }
  imageObj.src = 'demons0.png';

  ImageCannon.src= 'canon 40px.png';


}
