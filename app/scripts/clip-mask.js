(function() {

  var s = Snap('#clip-mask');
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
    }, 3000, mina.bounce)
  });

}());
