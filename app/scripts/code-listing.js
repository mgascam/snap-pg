//Getting started
(function() {
    var s = Snap('#canvas');

    var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    var t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div.');

}());


// Make it responsive
(function() {
    var s = Snap('#canvas');
    s.attr({ viewBox: '0 0 800 400' });


    //lets draw 2 rects at position 100,100 and then reposition them

    var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    var t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div.');

}());

//Basic image
(function() {
  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var g = s.g();

  var image = g.image('images/legoMan-alt.svg', 0, 0, 200, 200);
  image.attr({
      preserveAspectRatio: 'meet'
  });

  var clone = image.clone();

  // clone.transform('t100,200r90');
  clone.transform('translate(100,200) rotate(90,50,100)');


}());

// Stroke dash array
(function() {
  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var innerCircle = s.circle(150, 150, 80).attr({
      fill: 'none',
      stroke: 'red',
      strokeWidth: 30,
      strokeDasharray: '10 300 40 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10',
      strokeDashoffset: 50
  });

  Snap.animate(0,400, function( value ){
         innerCircle.attr({ 'strokeDashoffset': value });

  },10000 );

}());

//Using masks
(function() {

  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var bigC = s.circle(100,100,50).attr({ stroke: 'silver', strokeWidth: '40', fill: 'silver'});
  var bigC2 = bigC.clone().attr({ cx: 200, cy: 200, fill: 'red' });
  var bigC3 = bigC.clone().attr({ cx: 200, cy: 50, fill: 'green' });

  var clipG = s.group(bigC,bigC2,bigC3);

  var c = s.circle(50,50,150).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

  c.attr({ mask: clipG });
  c.animate({ cx: 400 }, 5000);



}());

//Animated clip mask
(function() {

  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var bigC = s.circle(100, 100, 75).attr({
    stroke: 'silver',
    'strokeWidth': 40,
    fill: 'silver'
  });

  var bigC2 = s.circle(250, 250, 75).attr({
    stroke: 'silver',
    'strokeWidth': 40,
    fill: 'silver'
  });
  var clipG = s.group(bigC, bigC2);

  var r = s.rect(100, 100, 100, 100, 20, 20).attr({
    stroke: '#123456',
    'strokeWidth': 20,
    fill: 'red'
  });

  var c = s.circle(50, 50, 50).attr({
    stroke: '#123456',
    'strokeWidth': 20,
    fill: 'blue'
  });

  var g = s.group(r, c);

  g.attr({
    mask: clipG
  });

  g.animate({
    transform: 'r360,150,150'
  }, 3000, mina.bounce);

  clipG.animate({
    transform: 't200,0'
  }, 3000, mina.bounce, function() {
    clipG.animate({
      transform: 't0,0'
    }, 3000, mina.bounce);
  });

}());

// Load svg
(function() {

  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var g = s.group();
  var lego = Snap.load("images/legoMan-alt.svg", function ( loadedFragment ) {
      g.append( loadedFragment );
      g.hover( hoverover, hoverout );
      g.text(300,100, 'hover over me');
  });

var hoverover = function() { g.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ); };
var hoverout = function() { g.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ); };

}());

//Animate group
(function() {

  var s = Snap('#canvas');
  s.attr({ viewBox: '0 0 800 400' });

  var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
  var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

  var g = s.group(r,c);

  g.hover(function(){
    g.animate({ transform: 'r360,150,150' }, 5000, mina.bounce );
  });


}());

//Animate text
(function() {

  var s = Snap('#canvas');

  var t = s.text(50,50,0);

  Snap.animate(0, 100, function (value) {
      t.attr({text: Math.round(value)});
  }, 1000);


}());

//Animate textPath
(function() {

  var s = Snap('#canvas');

  var path = "M 100 200 C 200 100 300   0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100";

  var text = s.text(50,50,'Hi there')
          .attr({ 'textpath': path })
          .textPath.animate({ 'startOffset': 2000 }, 5000 );

}());
