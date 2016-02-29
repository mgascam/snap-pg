(function() {
    var s = Snap('#canvas');

    //lets draw 2 rects at position 100,100 and then reposition them

    var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red', 'opacity': 0.2 });

    var t = s.text(100,50,'Snap("#svg") should reference an svg element, not a div.');

}());
