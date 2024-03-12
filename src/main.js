import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { enrutador } from './componentes/enrutador'

// Import all of Bootstrap's JS
import 'bootstrap'
// Importamos estilos de scss
import './scss/styles.scss'

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
