$(document).ready(function(){
	$('#PageSearchFormButton').click(function(){
		$('#PageSearchForm').toggleClass('active');
	});
	$('.main-head__mobile-menu').click(function(){
		$('.main-head__nav').toggleClass('active');
	});

	// masonary grid on peer landing page
	$('.grid').masonry({
  		itemSelector: '.grid-item',
  		columnWidth: '.grid-sizer',
  		percentPosition: true,
  		gutter: 5
  	});
	
	// hide / show advanced and simple peer search
  	$('#simpleclk').click(function(event) {
  	  $('#simplesearch').removeClass('hide');
  	  $('#advsearch1').addClass('hide');
  	  $('#advsearch2').addClass('hide');
  	  $('#advsearch3').addClass('hide');
  	  $('#advsearch4').addClass('hide');
  	  $('#advsearch5').addClass('hide');
  	});
	
  	$('#advclk').click(function(event) {
  	  $('#simplesearch').addClass('hide');
  	  $('#advsearch1').removeClass('hide');
  	  $('#advsearch2').removeClass('hide');
  	  $('#advsearch3').removeClass('hide');
  	  $('#advsearch4').removeClass('hide');
  	  $('#advsearch5').removeClass('hide');
  	});

});