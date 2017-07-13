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
	// llamada botones en pagina.html
	$('#saldo').on('click', function (event) {
    console.log("saldo");
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
	/* Fin ready */
});
