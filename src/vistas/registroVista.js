import { User } from '../bd/user';  // Asegúrate de importar correctamente la clase User

export default {
  template: // html
  `
  <div class="container">
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
      <!-- Formulario de registro -->
      <form id="formularioRegistro" class="form border shadow-sm p-3" novalidate>
        <!-- Nombre -->
        <label for="nombre" class="form-label">Nombre:</label>
        <input required id="nombre" type="text" class="form-control" />

        <!-- Apellidos -->
        <label for="apellidos" class="form-label">Apellidos:</label>
        <input id="apellidos" type="text" class="form-control" />

        <!-- Email -->
        <label for="email" class="form-label">Email:</label>
        <input required id="email" type="email" class="form-control" />

        <!-- Contraseña -->
        <label for="pass" class="form-label mt-3">Contraseña:</label>
        <input required id="pass" type="password" class="form-control" />

        <!-- Botón enviar -->
        <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
      </form>
    </div>
  </div>
  `,
  script: () => {
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioRegistro');

    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', async (event) => {
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Detenemos el evento enviar (submit)
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Prevenimos el envío del formulario (puede no ser necesario, pero por precaución)
        event.preventDefault();

        // Capturamos los datos del formulario
        const userData = {
          email: document.getElementById('email').value,
          password: document.getElementById('pass').value,
          nombre: document.getElementById('nombre').value,
          apellidos: document.getElementById('apellidos').value,
          // Agrega otros campos según sea necesario
        };

        try {
          // Llama al método create de la clase User
          const newUser = await User.create(userData);
          console.log('Usuario registrado correctamente:', newUser);
          // Puedes redirigir o realizar otras acciones después del registro
        } catch (error) {
          console.error('Error al registrar usuario:', error.message);
          // Puedes manejar el error de alguna manera (mostrar un mensaje, etc.)
        }
      }
      // Añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated');
    });
  }
}
