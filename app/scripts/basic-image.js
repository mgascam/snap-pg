(function() {
  var s = Snap('#basic-image');
  s.attr({ viewBox: '0 0 800 400' });

  var g = s.g();

  var image = g.image('images/legoMan-alt.svg', 0, 0, 200, 200);
  image.attr({
      preserveAspectRatio: 'meet'
  });

  var clone = image.clone();

  clone.transform('t100,200r90');

}());
