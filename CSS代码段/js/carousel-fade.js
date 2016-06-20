$(document).ready(function() {
	var $nowPic = $(".picture>li").eq(0);
	$nowPic.css("zIndex","99").css("opacity",1);
	(function setFadeCarousel(){
		$(".list li").click(function() {
			var className = $(this).attr("class");
			$nowPic.css("zIndex","1").stop().animate({opacity:0},500);
			$nowPic = $(".picture>li."+className);
			$nowPic.css("zIndex","99").animate({opacity:1},500);
		});
	})();
	function fadeCarousel(){
		var classNum = $nowPic.attr("class").charAt(4);
		if(classNum==6){
			classNum = 1;
		}else{
			classNum++;
		}
		console.log(classNum);
		$nowPic.css("zIndex","1").stop().animate({opacity:0},500);
		$nowPic = $(".picture>li.pic-"+classNum);
		$nowPic.css("zIndex","99").animate({opacity:1},500);
		setTimeout(fadeCarousel,5000);
	}
	setTimeout(fadeCarousel,5000);
})