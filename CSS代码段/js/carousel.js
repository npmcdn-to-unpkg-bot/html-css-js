$(document).ready(function() {
	var currentPos = 0;
	(function setCarousel(){
		$('.left').click(function() {
			currentPos -= 1;
			var position = -640*currentPos;
			if (currentPos == -1) {
				currentPos = 5;
				$(".picture").stop().animate({left:position},500,function() {
					$(this).css("left","-3200px");
				});
			}else{
				$(".picture").stop().animate({left:position},500);
			}
		});
		$('.right').click(function() {
			currentPos += 1;
			var position = -640*currentPos;
			if (currentPos == 6) {
				currentPos = 0;
				$(".picture").stop().animate({left:position},500,function() {
					$(this).css("left","0px");
				});
			}else{
				$(".picture").stop().animate({left:position},500);
			}
		});
	})();
	function carousel(){
		currentPos++;
		var left_pos = -currentPos*640;
		if (left_pos <= -3840) {
			$(".picture").stop().animate({left:left_pos},500,function() {
				$(this).css("left","0px");
			});
			currentPos = 0;
		}else{
			$(".picture").stop().animate({left:left_pos},500);
		}
		setTimeout(carousel,5000);
	}
	setTimeout(carousel,5000);
})