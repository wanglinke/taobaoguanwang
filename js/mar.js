

//中部轮播图(1)
$(function() {
	var container = $('#container');
	var list = $('#list');
	var buttons = $('#buttons span');
	var prev = $('#prev');
	var next = $('#next');
	var index = 1;
	var len = 5;
	var interval = 3000;
	var timer;

	function animate(offset) {
		var left = parseInt(list.css('left')) + offset;
		if(offset > 0) {
			offset = '+=' + offset;
		} else {
			offset = '-=' + Math.abs(offset);
		}
		list.animate({
			'left': offset
		}, 300, function() {
			if(left > -200) {
				list.css('left', -520 * len);
			}
			if(left < (-520 * len)) {
				list.css('left', -520);
			}
		});
	}

	function showButton() {
		buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
	}

	function play() {
		timer = setTimeout(function() {
			next.trigger('click');
			play();
		}, interval);
	}

	function stop() {
		clearTimeout(timer);
	}
	next.bind('click', function() {
		if(list.is(':animated')) {
			return;
		}
		if(index == 5) {
			index = 1;
		} else {
			index += 1;
		}
		animate(-520);
		showButton();
	});
	prev.bind('click', function() {
		if(list.is(':animated')) {
			return;
		}
		if(index == 1) {
			index = 5;
		} else {
			index -= 1;
		}
		animate(520);
		showButton();
	});
	buttons.each(function() {
		$(this).bind('click', function() {
			if(list.is(':animated') || $(this).attr('class') == 'on') {
				return;
			}
			var myIndex = parseInt($(this).attr('index'));
			var offset = -520 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		})
	});
	container.hover(stop, play);
	play();
});
//中部轮播图-2开始
$(function() {
	var container = $('#tmall-bd');
	var list = $('#list-one');
	var buttons = $('#buttons-one span');
	var prev = $('#prev-one');
	var next = $('#next-one');
	var index = 1;
	var len = 5;
	var interval = 3000;
	var timer;

	function animate(offset) {
		var left = parseInt(list.css('left')) + offset;
		if(offset > 0) {
			offset = '+=' + offset;
		} else {
			offset = '-=' + Math.abs(offset);
		}
		list.animate({
			'left': offset
		}, 300, function() {
			if(left > -200) {
				list.css('left', -520 * len);
			}
			if(left < (-520 * len)) {
				list.css('left', -520);
			}
		});
	}

	function showButton() {
		buttons.eq(index - 1).addClass('on').siblings().removeClass('on');
	}

	function play() {
		timer = setTimeout(function() {
			next.trigger('click');
			play();
		}, interval);
	}

	function stop() {
		clearTimeout(timer);
	}
	next.bind('click', function() {
		if(list.is(':animated')) {
			return;
		}
		if(index == 5) {
			index = 1;
		} else {
			index += 1;
		}
		animate(-520);
		showButton();
	});
	prev.bind('click', function() {
		if(list.is(':animated')) {
			return;
		}
		if(index == 1) {
			index = 5;
		} else {
			index -= 1;
		}
		animate(520);
		showButton();
	});
	buttons.each(function() {
		$(this).bind('click', function() {
			if(list.is(':animated') || $(this).attr('class') == 'on') {
				return;
			}
			var myIndex = parseInt($(this).attr('index'));
			var offset = -520 * (myIndex - index);
			animate(offset);
			index = myIndex;
			showButton();
		})
	});
	container.hover(stop, play);
	play();
});

