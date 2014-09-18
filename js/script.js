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
    }, 600);
    return false;
  });
	
	$("#b1").click(function() {
	  $(".popover").hide();
		$("#p1").show();
	});
	
	$("#b2").click(function() {
	  $(".popover").hide();
		$("#p2").show();
	});
	
	$("#b3").click(function() {
	  $(".popover").hide();
		$("#p3").show();
	});
	
	$("#b4").click(function() {
	  $(".popover").hide();
		$("#p4").show();
	});
	
	$(".popover").click(function() {
		$(".popover").hide();
	});
});