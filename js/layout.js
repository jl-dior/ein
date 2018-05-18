$(function(){
	
	 $(".pen").click(function () {
        $(".popupbook").fadeIn(300);
    });

    $(".closebook").click(function () {
        $(".popupbook").fadeOut(300);
    });
	
	
	//首页
	$('.main ul li').each(function(){
		var n = $(this).index()+1;
		$(this).addClass('list'+n);
	})

	$('.qrcode').hover(function(){
		$(this).siblings('.qrcodeimg').show();
	},function(){
		$(this).siblings('.qrcodeimg').hide();
	})

	$('.wx').hover(function(){
		$(this).siblings('.qrcodeimg').show();
	},function(){
		$(this).siblings('.qrcodeimg').hide();
	})

	$('.nav ul h4').eq(0).css('overflow','hidden');

	//产品详细页面
	$('.colors dd div').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur')
	})
	$('.size a').click(function(){
		$(this).addClass('act').siblings().removeClass('act')
	})
	var num = 1;
	$('.number .add').click(function(){
		num++;
		$('.number em').html(num);
	})

	$('.number .cut').click(function(){
		if ( num == 1) {
			$('.number em').html(1);
		}else{
			num--;
			$('.number em').html(num);
		}
	})
	// 形象大片
	var wLi1 = $('.menulist ul li').outerWidth(true),
		len1 = $('.menulist ul li').length,
		num1 = 0;
	$('.menulist ul').css('width',wLi1*len1);

	if ( len1 > 8 ) {
		$('.video-list .prev').click(function(){
			if (num1 == 0) {
				$('.menulist ul').stop().animate({left:-num1*wLi1},600)
			}else{
				num1--
				$('.menulist ul').stop().animate({left:-num1*wLi1},600)
			}
		})

		$('.video-list .next').click(function(){
			if (num1 == len1-8) {
				$('.menulist ul').stop().animate({left:-num1*wLi1},600)
			}else{
				num1++
				$('.menulist ul').stop().animate({left:-num1*wLi1},600)
			}
		})
	}

	// 杂志
	var wLi2 = $('.magazinewrap ul li').outerWidth(true),
		len2 = $('.magazinewrap ul li').length,
		num2 = 0;
	$('.magazinewrap ul').css('width',wLi2*len2);

	$('.magazine-list .prev').click(function(){
		if (num2 == 0) {
			$('.magazinewrap ul').stop().animate({left:-num2*wLi2*4},600)
		}else{
			num2--
			$('.magazinewrap ul').stop().animate({left:-num2*wLi2*4},600)
		}
	})

	$('.magazine-list .next').click(function(){
		if (num2 == Math.ceil(len2/4)-1) {
			$('.magazinewrap ul').stop().animate({left:-num2*wLi2*4},600)
		}else{
			num2++
			$('.magazinewrap ul').stop().animate({left:-num2*wLi2*4},600)
		}
	})

	//产品详细

	var len3 = $('.prodetails-left ul li').length,
		num3 = 0;
		str = '';
	for ( var i=0; i<len3; i++){
		str += "<a href='javascript:;'></a>"
	}

	$('.prodetails-left .dot').html(str);

	$('.prodetails-left ul li').eq(0).show();
	$('.prodetails-left .dot a').eq(0).addClass('cur');

	$('.prodetails-left .dot a').click(function(){
		num3 = $(this).index();
		$(this).addClass('cur').siblings().removeClass('cur')
		$('.prodetails-left ul li').eq(num3).show().siblings().hide();
	});

	$('.prodetails-left .next').click(function(){
		if ( num3 == len3-1 ) {
			num3 = 0
		}else{
			num3++;
		}
		$('.dot a').eq(num3).addClass('cur').siblings().removeClass('cur');
		$('.prodetails-left ul li').eq(num3).stop().fadeIn().siblings().stop().fadeOut();
	})

	$('.prodetails-left .prev').click(function(){
		if ( num3 == 0 ) {
			num3 = len3-1;
		}else{
			num3--;
		}
		$('.dot a').eq(num3).addClass('cur').siblings().removeClass('cur');
		$('.prodetails-left ul li').eq(num3).stop().fadeIn().siblings().stop().fadeOut();
	}) 

	$('.prodetails-left ul li img').mouseover(function(){
		var src = $(this)[0].src;
		$(this).parents('li').append("<div class=\"bigImg\">"+
			"<img src=\""+ src +"\""+"/>"
			+"</div>")
	})

	$('.prodetails-left ul li').mousemove(function(e){
		var x = e.pageX - $(this).offset().left,
			y = e.pageY - $(this).offset().top;
			imgw = $('.bigImg img').outerWidth(),
			imgh = $('.bigImg img').outerHeight();

		var getX = x / $(this).outerWidth();
		var getY = y / $(this).outerHeight();

		$('.bigImg').css({
			'left': -getX * (imgw - $(this).outerWidth()),
			'top': -getY * (imgh - $(this).outerHeight())
		})
	})

	$('.prodetails-left ul li').on('mouseout',(function(){
		$(this).find('.bigImg').mouseout(function(){
			$(this).stop().fadeOut('slow').remove();
		})
	}));

	//杂志

	

    //下拉菜单
	$('.subnav-con').eq(0).show()
	$('.subnav-tit a').hover(function () {
	    if ($(this).is('.tit1') != true) {
	        var n = $(this).index();
	        $('.subnav-con').eq(n - 1).show().siblings().hide();
	    }
	})

	var hiddenThisId = $(".hiddenThisId").val();
	var hiddenThisParentId = $(".hiddenThisParentId").val();
	$(".productLeftNav li[rel='"+hiddenThisId+"']").find(".prolist").show();
	$(".productLeftNav li[rel='"+hiddenThisParentId+"']").find(".prolist").show();
})


































