
function bounce() {
  $("#arrow").effect("bounce", { times: 1 }, 800);
}

$(window).load(function () {
	
	setInterval("bounce()", 800);

	$("#b1").click(function () {
		$(".popover").hide();
		$("#p1").show();
	});

	$("#b2").click(function () {
		$(".popover").hide();
		$("#p2").show();
	});

	$("#b3").click(function () {
		$(".popover").hide();
		$("#p3").show();
	});

	$("#b4").click(function () {
		$(".popover").hide();
		$("#p4").show();
	});

	$(".popover").click(function () {
		$(".popover").hide();
	});
});