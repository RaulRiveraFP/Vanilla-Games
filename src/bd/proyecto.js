// Importa el objeto 'supabase' desde un archivo 'supabase.js'
import { supabase } from './supabase.js'

// Definición de la clase Proyecto
export class Proyecto {
  // Constructor que inicializa las propiedades del proyecto
  constructor({
    id = null, // ID único del proyecto
    created_at = null, // Fecha de publicación del proyecto
    user_id = null, // ID del usuario que ha creado el proyecto
    nombre = null, // Nombre del proyecto
    descripcion = null, // Descripcion del proyecto
    imagen = 'default_image.png', // imagen por defecto
    enlace = null, // Enlace al proyecto publicado
    repositorio = null, // Enlace al repositorio
    estado = 'activo' // Estado del proyecto (activo/inactivo, por ejemplo)
  }) {
    // Asignación de valores a las propiedades del proyecto
    this.id = id
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.descripcion = descripcion
    this.imagen = imagen
    this.enlace = enlace
    this.repositorio = repositorio
    this.estado = estado
  }

  // Método estático para obtener todos los proyectos
  static async getAll() {
    // Realiza una consulta a la base de datos para obtener todos los proyectos
    const { data: proyectos, error } = await supabase
      .from('proyectos')
      .select('*') // Selecciona todas las columnas
      .order('created_at', { ascending: false }) // Ordena por fecha de creación descendente

    // Manejo de errores: lanza una excepción si ocurre algún error
    if (error) {
      throw new Error(error.message)
    }

    // Mapea los proyectos obtenidos a instancias de la clase Proyecto y los devuelve
    return proyectos.map((Proyecto) => new Proyecto(Proyecto))
  }

  // Método estático para obtener un Proyecto por su ID
  static async getById(id) {
    // Realiza una consulta para obtener un Proyecto por su ID
    const { data: proyecto, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('id', id) // Filtra por el ID especificado
      .single() // Espera un solo resultado

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto)
  }

  // Método estático para obtener un Proyecto por el ID del usuario asociado
  static async getByUserId(id) {
    // Realiza una consulta para obtener un Proyecto por el ID de usuario asociado
    const { data: proyecto, error } = await supabase
      .from('proyectos')
      .select('*')
      .eq('user_id', id) // Filtra por el ID de usuario especificado
      .single()

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Proyecto con la información obtenida
    return new Proyecto(proyecto)
  }

  // Método estático para crear un nuevo Proyecto
  static async create(proyectoData) {
    // Inserta un nuevo Proyecto en la base de datos con los datos proporcionados
    const { data, error } = await supabase
      .from('proyectos')
      .insert(proyectoData) // Inserta los datos del nuevo Proyecto
      .select() // Devuelve los datos insertados

    // Manejo de errores
    if (error) {
      throw new Error(`Error creando Proyecto: ${error.message}`)
    }

    // Si se insertaron datos, devuelve una nueva instancia de Proyecto con los datos insertados
    return data ? new Proyecto(data[0]) : null
  }

  // Método estático para actualizar un Proyecto existente por su ID
  static async update(id, newData) {
    // Actualiza un Proyecto existente en la base de datos con los nuevos datos
    const { error } = await supabase
      .from('proyectos')
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq('id', id) // Filtra por el ID del Proyecto a actualizar

    // Manejo de errores
    if (error) {
      throw new Error(`Error actualizando Proyecto: ${error.message}`)
    }

    // Si la actualización fue exitosa, devuelve true
    return true
  }
}
