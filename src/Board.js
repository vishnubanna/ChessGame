console.log("hello");

window.onload = function (){
Crafty.init(500,350, document.getElementById('game'));
Crafty.e('2D, Canvas, Color, Twoway, Gravity')
  .attr({x: 0, y: 0, w: 50, h: 50})
  .color('#F00')
  .twoway(200)
  .gravity('Floor');
}
