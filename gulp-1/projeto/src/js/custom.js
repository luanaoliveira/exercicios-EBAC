$(document).ready(function () {

	$('.owl-carousel').owlCarousel();

	$('.featured-item a').addClass('btn btn-dark strech-link');

	$('.featured-item h4 ').append('<span class="badge bg-secondary">Novo</span>');

	/*
	*eventos
	*/

	$('.featured-item h4').dblclick(function () {

		$(this).css({
			'color': '#f00',
			'background': '#ff0',
			'font-weight': '100',

		})
	})

	/*
	*Animações
	*/
	$('.featured-item:first a').on('click', function(event) {

		event.preventDefault()

		$(this).hide(alert('Produto esgotado!'))

	})

	$('#form-submit').on('click', function(event){

		event.preventDefault()

		if($('#email').val() != ''){

			$('#email').animate({

				opacity: "hidden"
			})
		}
	})

	/*
	*Ouvinte de eventos .nav-modal-open
	*/
	$('.nav-modal-open').on('click', function (event) {

		event.preventDefault()

		let elem = $(this).attr('rel')

		$('.modal-body').html($('#' + elem).html())
		$('.modal-header h5.modal-title').html($(this).text())

		let myModal = new bootstrap.Modal($('#modelId'))

		myModal.show()
	})

	/*
	* Validação campo nome
	*/
	function validaName(element) {

		if (element.val() == '' || element.val().length < 3) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	/*
	* Validação campo email
	*/
	function validaEmail(element) {

		const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i
		const email = element.val()

		if (email == '' || !emailValido.test(email)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	/*
	* Validação campo data
	*/
	function validaData(element) {

		const dataValido = /^([\d]{2})+(\/[\d]{2})+(\/[\d]{4})$/
		const data = element.val()

		if (data == '' || !dataValido.test(data)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	/*
* Validação campo hora
*/
	function validaHora(element) {

		const horaValido = /^[\d]{2}:[\d]{2}$/
		const hora = element.val()

		if (hora == '' || !horaValido.test(hora)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}


	/*
	* Validação campo CEP
	*/
	function validaCep(element) {

		const cepValido = /^[\d]{5}-[\d]{3}$/
		const cep = element.val()

		if (cep == '' || !cepValido.test(cep)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	/*
	* Validação campo celular
	*/
	function validaCelular(element) {

		const celularValido = /^(\([\d]{2}\))+([\d]{5})-([\d]{4})$/
		const celular = element.val()

		if (celular == '' || !celularValido.test(celular)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	function validaCpf(element) {

		const cpfValido = /^([0-9]{3})+(\.[0-9]{3})+(\.[0-9]{3})-([0-9]{2})$/
		const cpf = element.val()

		if (cpf == '' || !cpfValido.test(cpf)) {

			element.parent().find('.text-muted').show()
			element.addClass('invalid')

			return false

		} else {

			element.parent().find('.text-muted').hide()
			element.removeClass('invalid')
		}
	}

	$('body').on('submit', '.modal-body .form', function (event) {

		event.preventDefault()

		const inputName = $('#nome')
		const inputEmail = $('#email')

		validaName(inputName)
		validaEmail(inputEmail)

		if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
			return false
		} else {
			$(this).submit()
		}
	})

	$('body').on('blur', '#nome', function () {
		validaName($(this))
	})

	$('body').on('blur', '#email', function () {
		validaEmail($(this))
	})

	$('body').on('focus', '#data', function () {
		$(this).datepicker()
	})

	$('body').on('blur', '#data', function () {
		validaData($(this))
		$(this).mask('00/00/0000')
	})

	$('body').on('blur', '#hora', function () {
		validaHora($(this))
		$(this).mask('00:00')
	})

	$('body').on('blur', '#cep', function () {
		validaCep($(this))
		$(this).mask('00000-000')
	})

	$('body').on('blur', '#celular', function () {
		validaCelular($(this))
		$(this).mask('(00)00000-0000')
	})

	$('body').on('blur', '#cpf', function () {
		validaCpf($(this))
		$(this).mask('000.000.000-00')
	})
})


