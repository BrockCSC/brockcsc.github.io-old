$.fn.exBounce = function(){
  var self = this;
  (function runEffect(){
    self.effect("bounce", { times:1 }, 800, runEffect);
  })();
      
  return this;
};

$(window).load(function() {
  $("#arrow").exBounce();
  
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});