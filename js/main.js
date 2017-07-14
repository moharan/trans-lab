/* Código */
$( document ).ready(function() {
	//alert("hola");
	function validateForm() {
		console.log("working");
		// llamada a la siguiente pagina
		window.location.href = "pagina.html";
	};
	// llamada al boton en index.html
	$('#iniciar').on('click', function (event) {
    validateForm();
	});
	// llamada API BIP
	$.ajax({
		url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=123456',
		type: 'GET',
		dataType: 'JSON',
		//data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	// llamada botones en menu
	$('#home').on('click', function (event) {
    console.log("home");
    window.location.href = "pagina.html";
	});
	$('#saldo').on('click', function (event) {
    console.log("saldo");
    window.location.href = "saldo.html";
	});
	$('#tarifa').on('click', function (event) {
    console.log("tarifa");
    window.location.href = "tarifa.html";
	});
	$('#perfil').on('click', function (event) {
    console.log("perfil");
    window.location.href = "perfil.html";
	});
	$('#preguntas').on('click', function (event) {
    console.log("preguntas");
    window.location.href = "frecuentes.html";
	});
	// llamada botones en pagina.html
	$('#saldo-pag').on('click', function (event) {
    console.log("saldo-pag");
    window.location.href = "saldo.html";
	});
	$('#tarifa-pag').on('click', function (event) {
    console.log("tarifa-pag");
    window.location.href = "tarifa.html";
	});
	$('#perfil-pag').on('click', function (event) {
    console.log("perfil-pag");
    window.location.href = "perfil.html";
	});
	$('#preguntas-pag').on('click', function (event) {
    console.log("preguntas-pag");
    window.location.href = "frecuentes.html";
	});
	// Initialize collapse button
  	$(".button-collapse").sideNav();
  	// llamada botones en perfil.html
	$('#agregar-tarjeta').on('click', function (event) {
    console.log("agregar-tarjeta");
	});
	// preguntas frecuentes
	// Muestra y oculta los menús
   	$('ul li:has(ul)').hover(
      function(e) {
         $(this).find('ul').css({display: "block"});
         console.log("muestra");
      },
      function(e) {
         $(this).find('ul').css({display: "none"});
         console.log("desaparece");
      }
   	);
   	// llamada a resultado de saldo
	$("#resp-saldo").hide();
   	// llamada boton en saldo.html
	$('#btn-ver').on('click', function (event) {
    	console.log("ver saldo");
    	$("#resp-saldo").show();
	});
	// llamada a resultado de calcular
	$("#resp-calcular").hide();
	// llamada boton en tarifa.html
	$('#btn-calcular').on('click', function (event) {
    	console.log("calcular");
    	$("#resp-calcular").show();
    	$("#resp-saldo").show();
	});
	/* Fin ready */
});
