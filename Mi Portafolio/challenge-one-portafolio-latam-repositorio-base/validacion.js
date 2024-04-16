// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  // Obtener los elementos del formulario
  const nombre = document.querySelector(".formcontato__input[name='nombre']");
  const email = document.querySelector(".formcontato__input[name='email']");
  const assunto = document.querySelector(".formcontato__input[name='asunto']");
  const mensaje = document.querySelector(".formcontato__textarea[name='mensaje']");
  const botonEnviar = document.querySelector(".formcontato__botao");
  const nombreErrorMessage = document.querySelector("#nombre-error-message");
  const emailErrorMessage = document.querySelector("#email-error-message");

  // Deshabilitar el botón de envío inicialmente
  botonEnviar.disabled = true;

  // Agregar event listeners a los campos
  nombre.addEventListener("input", validarFormulario);
  email.addEventListener("input", validarFormulario);
  assunto.addEventListener("input", validarFormulario);
  mensaje.addEventListener("input", validarFormulario);

  // Agregar event listener al formulario
  const form = document.querySelector(".formcontato__form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Verificar si todos los campos están llenos y con datos válidos
    if (
      isValidNombre(nombre.value) &&
      isValidEmail(email.value) &&
      assunto.value.trim() !== "" &&
      mensaje.value.trim() !== ""
    ) {
      // Enviar el formulario
      alert("El formulario ha sido enviado correctamente.");
      form.reset(); // Resetear el formulario
    } else {
      // Mostrar mensajes de error si hay campos inválidos
      if (!isValidNombre(nombre.value)) {
        nombreErrorMessage.textContent = "El campo nombre no debe estar en blanco y debe tener máximo 50 caracteres.";
        nombreErrorMessage.classList.add("show");
        nombreErrorMessage.classList.remove("hide");
      } else {
        nombreErrorMessage.classList.add("hide");
        nombreErrorMessage.classList.remove("show");
      }

      if (!isValidEmail(email.value)) {
        emailErrorMessage.textContent = "El campo email no debe estar en blanco y debe tener un formato válido (ejemplo: texto@texto.com)";
        emailErrorMessage.classList.add("show");
        emailErrorMessage.classList.remove("hide");
      } else {
        emailErrorMessage.classList.add("hide");
        emailErrorMessage.classList.remove("show");
      }
    }
  });

  // Función para validar el nombre
  function isValidNombre(nombre) {
    return nombre.trim() !== "" && nombre.length <= 50;
  }

  // Función para validar el email
  function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email) && email.trim() !== "";
  }

  // Función para validar el formulario
  function validarFormulario() {
    // Verificar si todos los campos están llenos y con datos válidos
    if (
      isValidNombre(nombre.value) &&
      isValidEmail(email.value) &&
      assunto.value.trim() !== "" &&
      mensaje.value.trim() !== ""
    ) {
      // Habilitar el botón de envío
      botonEnviar.disabled = false;
      nombreErrorMessage.classList.add("hide");
      nombreErrorMessage.classList.remove("show");
      emailErrorMessage.classList.add("hide");
      emailErrorMessage.classList.remove("show");
    } else {
      // Deshabilitar el botón de envío
      botonEnviar.disabled = true;
    }
  }
});