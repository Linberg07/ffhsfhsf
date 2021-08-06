function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('form input').click(function(){
		var checkex_box = $('form input');
		checkex_box.prop('checked','true');
	});


	
   $('.count').prop('Counter',0).animate({
    Counter: $('.count').text()
    }, {
     duration: 4000,
     easing: 'linear',
     step: function (now) {
        $('.count').text(Math.ceil(now));
     }
    });
});
});