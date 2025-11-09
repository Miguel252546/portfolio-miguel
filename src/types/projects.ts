/**
 * Tipos para proyectos personales del portafolio
 */

/**
 * Interfaz para un proyecto personal
 */
export interface PersonalProject {
  id: number
  title: string
  description: string
  image: string // Ruta a la imagen del proyecto
  technologies: string[] // Array de tecnologías utilizadas
  liveUrl?: string // URL del proyecto en vivo (opcional)
  githubUrl?: string // URL del repositorio en GitHub (opcional)
  featured?: boolean // Si el proyecto es destacado
}

