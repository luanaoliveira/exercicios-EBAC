//instancia jquery e evita consflitos
//jQuery(function($){

$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') //tag
    let items = $('.featured-item') //class
    let destaques = $('#featured') //id

    console.log(titulos.first());

    //Configuração de produtoa

	$('.featured-item a').addClass('btn btn-dark strech-link');
	$('.featured-item:first h4 ').append('<span class="badge bg-secondary">Novo</span>');
	//$('.featured-item:first h4 ').start('<span class="badge bg-secondary">Novo</span>');
	//$('.featured-item:first h4 ').html('<span class="badge bg-secondary">Novo</span>');
	//$('.featured-item:first h4 ').addClass('active');
	//$('.featured-item:first h4 ').removeClass('active');
	//$('.featured-item:first h4 ').hide('active');
	//$('.featured-item:first h4 ').show('active');
	//$('.featured-item:first h4 ').fade('active');
	//$('.featured-item:first h4 ').fadeIn(2000);
	//$('.featured-item:first h4 ').fadeOut();

	//eventos

	$('.featured-item h4').dblclick(function(){

			$(this).css({
					'color': '#f00',
					'background': '#ff0',
					'font-weight': '100',
			});
	});

	//Manipulação de dados

	$('.featured-item h4').on('click', function(event){

		event.preventDefault();

		alert('Produto esgotado')

		$(this).css({
				'color': '#f00',
				'background': '#ff0',
				'font-weight': '100',
		});
});




});
