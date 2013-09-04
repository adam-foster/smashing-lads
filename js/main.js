var $ = jQuery;

/* news
-----------------------------------------------------------------------*/

(function() {

	var articles = $('main article');

	articles.filter(':gt(3)').hide();

	var total = articles.length;
	var perPage = articles.length > 4 ? 4 : articles.length;

	var more = $('<a>', { id: 'load-more', text: 'Show more', 'href' : '#/' });
	var showing = $('<span>', { id: 'load-showing', text: perPage });

	var holder = $('<div>', { class: 'more clearfix' }).append(
		$('<span>', { id: "load-count" }).append(showing).append(' of ' + total)
	);

	if(articles.length > 4) holder.prepend(more);

	$('main').append(holder);

	$(document).on('click', '#load-more', function(e){
		e.preventDefault();
		articles.filter(':hidden').filter(':lt(3)').slideDown(200);
		showing.html(articles.filter(':visible').length);

		if(articles.filter(':hidden').length == 0) more.hide();
	});

}());