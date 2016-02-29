(function() {
  var s = Snap('#dash-array');
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
