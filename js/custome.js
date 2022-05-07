/*global $, alert, console, jquery*/

$(document).ready(function () {
    'use strict';
    $('ul li a').click(function () {
//        $('li a').removeClass("active");
//        $(this).addClass("active");
    });

    $("body").niceScroll({
        cursorcolor: "#ee5a26",
        cursorwidth: "6px"
    });
});


$(document).ready(function(){
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
});