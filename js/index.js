function mostrarDatos(event) {
  event.preventDefault(); // Previene el envío del formulario
  var nombre = document.getElementById('nombre').value;
  var asunto = document.getElementById('asunto').value;
  var mensaje = document.getElementById('mensaje').value;

  var datos = "Nombre: " + nombre + "\n" +
    "Asunto: " + asunto + "\n" +
    "Mensaje: " + mensaje;

  alert(datos);

  setTimeout(function () {
    location.reload();
  }, 2000);

}

$(document).ready(function () {
  $("#flip1").click(function () {
    $("#panel1").slideToggle("slow");
  });
});

$(document).ready(function () {
  $("#flip2").click(function () {
    $("#panel2").slideToggle("slow");
  });
});