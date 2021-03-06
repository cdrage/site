$(document).ready(function() {
  var bgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
  var path = '../img/background/';


  secs = 4;
  bgArray.forEach(function(img){
      // caches images, avoiding white flash between background replacements
      new Image().src = path + img; 
  });

  function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgArray.length; i++) {
      setTimeout(function(){ 
        $('#hero').css('background-image', 'url(' + path + bgArray[k] +')');
      if ((k + 1) === bgArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
      }, (secs * 1000) * i)	
    }
  }
  backgroundSequence();
});


