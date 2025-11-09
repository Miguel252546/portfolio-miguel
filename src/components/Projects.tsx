import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { PersonalProject } from '../types/projects'
import { getLanguageColor } from '../utils/githubApi'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiSpringboot,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

/**
 * Componente Projects
 * Muestra los proyectos personales del desarrollador
 */

// ⚠️ CONFIGURA TUS PROYECTOS AQUÍ
// Agrega tus proyectos personales con sus imágenes y enlaces
const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: 'Pokédex de las Generaciones I a III',
    description: 'Este fue uno de mis primeros proyectos perosnales, que trata de una Pokédex que abarca las generaciones I a III de Pokémon.',
    image: '/src/assets/Pokedex_I-III.png', // Ruta a la imagen del proyecto
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    liveUrl: 'https://soft-arithmetic-bffdd3.netlify.app/', // URL del proyecto en vivo
    githubUrl: 'https://github.com/Miguel252546/Pokedex-I---III.git', // URL del repositorio
    featured: true,
  },
  {
    id: 2,
    title: 'Estetica de Uñas',
    description: 'Otro proyecto personal que muestra tus habilidades en desarrollo web fullstack.',
    image: '/src/assets/Estetica.png',
    technologies: ['Java', 'Spring Boot', 'React'],
    liveUrl: 'https://ejemplo2.com',
    githubUrl: 'https://github.com/Miguel252546/Estetica.git',
  },
  {
    id: 3,
    title: 'Proyecto Ejemplo 3',
    description: 'Un tercer proyecto que demuestra tu versatilidad y experiencia en diferentes tecnologías.',
    image: '/project-placeholder.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/usuario/proyecto3',
  },
  // Agrega más proyectos aquí...
]

const Projects = () => {

  /**
   * Obtiene el ícono correspondiente a una tecnología
   */
  const getTechnologyIcon = (tech: string) => {
    const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>> = {
      JavaScript: SiJavascript,
      TypeScript: SiTypescript,
      Java: FaJava,
      'Spring Boot': SiSpringboot,
      React: SiReact,
      'Node.js': SiNodedotjs,
      Express: SiExpress,
      HTML: SiHtml5,
      CSS: SiCss3,
    }

    // Si no hay icono específico, retornar null para que no se muestre el icono
    return iconMap[tech] || null
  }

  /**
   * Obtiene el color asociado a una tecnología
   */
  const getTechColor = (tech: string) => {
    return getLanguageColor(tech)
  }

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Título de la sección */}
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          >
            Proyectos
          </motion.h2>

          <motion.div
            variants={cardVariants}
            className="w-24 h-1 bg-primary-600 mx-auto mb-12"
          />

          {/* Lista de proyectos personales */}
          {personalProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No hay proyectos para mostrar. Agrega tus proyectos en el archivo Projects.tsx
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ gridAutoRows: '1fr' }}>
              {personalProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
                >
                  {/* Imagen del proyecto - Altura fija */}
                  <a
                    href={project.liveUrl || project.githubUrl || '#'}
                    target={project.liveUrl || project.githubUrl ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="relative block h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer flex-shrink-0"
                    onClick={(e) => {
                      if (!project.liveUrl && !project.githubUrl) {
                        e.preventDefault()
                      }
                    }}
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          // Si la imagen no se carga, mostrar un placeholder
                          const target = e.target as HTMLImageElement
                          target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EProyecto%3C/text%3E%3C/svg%3E'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600">
                        <SiGithub className="w-16 h-16 text-white opacity-50" />
                      </div>
                    )}
                    {/* Overlay al hacer hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center pointer-events-none">
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 pointer-events-auto">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiExternalLink className="w-5 h-5" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors shadow-lg"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FiGithub className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </a>

                  {/* Contenido de la tarjeta - Flexbox column con espacio entre elementos */}
                  <div className="p-6 flex flex-col flex-grow justify-between min-h-0">
                    {/* Título - Altura fija, siempre en la parte superior */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1 flex-shrink-0">
                      {project.title}
                    </h3>

                    {/* Descripción - Altura fija para mantener alineación */}
                    <div className="mb-4 flex-shrink-0" style={{ minHeight: '4.5rem' }}>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tecnologías - Posición fija, siempre alineadas horizontalmente */}
                    <div className="mb-4 flex-shrink-0">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const TechIcon = getTechnologyIcon(tech)
                          const techColor = getTechColor(tech)
                          return (
                            <span
                              key={tech}
                              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                            >
                              {TechIcon ? (
                                <TechIcon
                                  className="w-4 h-4 flex-shrink-0"
                                  style={{ color: techColor }}
                                />
                              ) : (
                                <span
                                  className="w-2 h-2 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: techColor }}
                                />
                              )}
                              <span>{tech}</span>
                            </span>
                          )
                        })}
                      </div>
                    </div>

                    {/* Botones - Siempre en la parte inferior, alineados */}
                    <div className="flex gap-3 flex-shrink-0 mt-auto">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <FiExternalLink className="w-4 h-4 mr-2" />
                          Ver proyecto
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <FiGithub className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

