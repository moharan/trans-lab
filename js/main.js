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
	});
	$('#perfil').on('click', function (event) {
    console.log("perfil");
	});
	$('#preguntas').on('click', function (event) {
    console.log("preguntas");
	});
	// llamada botones en pagina.html
	$('#saldo-pag').on('click', function (event) {
    console.log("saldo-pag");
    window.location.href = "saldo.html";
	});
	$('#tarifa-pag').on('click', function (event) {
    console.log("tarifa-pag");
	});
	$('#perfil-pag').on('click', function (event) {
    console.log("perfil-pag");
	});
	$('#preguntas-pag').on('click', function (event) {
    console.log("preguntas-pag");
	});
	// Initialize collapse button
  	$(".button-collapse").sideNav();
  	// llamada botones en saldo.html
	$('#agregar-tarjeta').on('click', function (event) {
    console.log("agregar-tarjeta");
	});
	/* Fin ready */
});
