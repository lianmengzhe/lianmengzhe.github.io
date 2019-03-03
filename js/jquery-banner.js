
		var index = 0;
		$(".dots_item").mouseenter(function(){
			index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".img_item").eq(index).fadeIn().siblings().fadeOut();
		});
		
		//?????? ??
		$(".right").click(function(){
			index++;
			if(index>4){
				index=0;
			}
			$(".img_item").eq(index).fadeIn().siblings().fadeOut();
			$(".dots_item").eq(index).addClass("active").siblings().removeClass("active");
		});
		
		//?????? ??
		$(".left").click(function(){
			index--;
			if(index < 0){
				index=4;
			}
			$(".img_item").eq(index).fadeIn().siblings().fadeOut();
			$(".dots_item").eq(index).addClass("active").siblings().removeClass("active");
		});
		
		//????
		var time = setInterval(function(){
			index++;
			if(index>2){
				index=0;
			}
			$(".img_item").eq(index).fadeIn().siblings().fadeOut();
			$(".dots_item").eq(index).addClass("active").siblings().removeClass("active");
		},2000)
		
		
		//???
		$("#menu").hover(function(){
			$(".one").siblings().css({
				"display":"block",
			});
		},function(){
			$(".one").siblings().css({
				"display":"none"
			});
		})











		
		
	
