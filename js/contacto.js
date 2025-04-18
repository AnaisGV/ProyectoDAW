document.addEventListener('DOMContentLoaded', function () {
     const formulario = document.getElementById('formContacto');
     const mensaje = document.getElementById('mensajeConfirmacion');

     formulario.addEventListener('submit', function (event) {
       event.preventDefault();
       mensaje.style.display = 'block';
       formulario.reset();

       // Ocultar mensaje después de 4 segundos
       setTimeout(() => {
         mensaje.style.display = 'none';
       }, 4000);
     });

   
   // Inicializar
    showSlide(index);
	});