function draw() {
  var canvas = document.getElementById('cyoShow');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(80,100);
    ctx.lineTo(70,100);
    ctx.fill();
  }
}
