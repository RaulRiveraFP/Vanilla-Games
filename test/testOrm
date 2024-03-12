import { Perfil } from '../src/bd/perfil.js'
import { User } from '../src/bd/user.js'

// leer perfiles
const perfilesBD = await Perfil.getAll()
console.log(perfilesBD)

// leer perfil por id
const perfilId = await Perfil.getById(3)
console.log('perfilid: ', perfilId)

// login
const user = { email: 'carrebola_test_admin@gmail.com', password: '123456' }

const usuarioLogueado = await User.login(user)
console.log('usuario logueado: ', usuarioLogueado)

// logout
const logout = await User.logout()
console.log('logout ', logout)

// Crear usuario
const newUser1 = {
  email: 'newuser1@gmail.com',
  password: '123456'
}
const newUser2 = {
  email: 'newuser2@gmail.com',
  password: '123456'
}
const nuevoUsuario1 = await User.create(newUser1)
console.log('nuevo usuario: ', nuevoUsuario1)

const nuevoUsuario2 = await User.create(newUser2)
console.log('nuevo usuario: ', nuevoUsuario2)

const userLogin = await User.login(newUser1)
console.log('nuevo usuario logueado: ', userLogin)
