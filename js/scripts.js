$(function(){

	$('#header-config').hover(function(){
		$(this).find('ul').stop().fadeToggle();
	});

	// Прокрутка вверх
	$( ".toup" ).click(function(){
		$('html, body').animate({scrollTop: 0}, 1000);
	})

	// Открытие подменю на моб версии
	$('.car').click(function(e){
		var menu = $(this).parent().siblings('.dropdown-menu');
		$('.dropdown-menu').not(menu).parents('.dropdown').removeClass('open');
		menu.parents('.dropdown').toggleClass('open')
		return false;
	})

	// bg с html
	$('div[data-bg]').each(function(){
		var src = 'url('+$(this).attr('data-bg')+')';
		$(this).css('background-image', src);
		if ($(this).attr('data-pos')) {
			$(this).css('background-position', $(this).attr('data-pos')+' bottom');
		};
	});

	// fancybox видео
	if($(".fancybox_video").length>0){			
		$(".fancybox_video").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}

	if ($(".fancybox").length>0) {
		$(".fancybox").fancybox();
	};

});