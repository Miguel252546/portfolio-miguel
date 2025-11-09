# 📁 Guía para Agregar Proyectos Personales

Esta guía te explica cómo agregar tus proyectos personales a la sección de "Proyectos" del portafolio.

## 📝 Pasos para Agregar un Proyecto

### 1. Prepara la Imagen del Proyecto

1. **Captura una imagen** de tu proyecto (pantalla completa o vista previa)
2. **Guarda la imagen** en la carpeta `public/` del proyecto
   - Ejemplo: `public/proyecto-1.png` o `public/proyecto-1.jpg`
   - Formatos recomendados: PNG, JPG, WebP
   - Tamaño recomendado: 800x600px o similar (ratio 4:3)

### 2. Edita el Archivo `src/components/Projects.tsx`

Abre el archivo `src/components/Projects.tsx` y busca el array `personalProjects` (alrededor de la línea 24).

### 3. Agrega tu Proyecto

Agrega un nuevo objeto al array con la siguiente estructura:

```typescript
{
  id: 4, // Número único (incrementa el ID para cada proyecto)
  title: 'Nombre de tu Proyecto',
  description: 'Descripción breve de tu proyecto. Explica qué hace, qué tecnologías usa y qué problemas resuelve.',
  image: '/nombre-imagen.jpg', // Ruta a la imagen en la carpeta public/
  technologies: ['React', 'TypeScript', 'Node.js'], // Array de tecnologías
  liveUrl: 'https://tu-proyecto.com', // URL del proyecto en vivo (opcional)
  githubUrl: 'https://github.com/tu-usuario/tu-proyecto', // URL del repositorio (opcional)
  featured: false, // true si es un proyecto destacado (opcional)
}
```

### 4. Ejemplo Completo

```typescript
const personalProjects: PersonalProject[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico desarrollada con React y Node.js. Incluye carrito de compras, autenticación de usuarios y procesamiento de pagos.',
    image: '/ecommerce-screenshot.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://mi-ecommerce.com',
    githubUrl: 'https://github.com/mi-usuario/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'API REST con Spring Boot',
    description: 'API RESTful desarrollada con Java y Spring Boot para gestión de usuarios y productos. Incluye autenticación JWT y documentación con Swagger.',
    image: '/api-screenshot.png',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
    githubUrl: 'https://github.com/mi-usuario/api-spring',
  },
  // Agrega más proyectos aquí...
]
```

## 🎨 Tecnologías Soportadas

Las siguientes tecnologías tienen iconos personalizados:

- **JavaScript** - SiJavascript
- **TypeScript** - SiTypescript
- **Java** - FaJava
- **Spring Boot** - SiSpringboot
- **React** - SiReact
- **Node.js** - SiNodedotjs
- **Express** - SiExpress
- **HTML** - SiHtml5
- **CSS** - SiCss3

Para otras tecnologías, se mostrará un punto de color en lugar del icono.

### Agregar Nuevas Tecnologías

Si quieres agregar soporte para más tecnologías:

1. **Importa el icono** en `src/components/Projects.tsx`:
   ```typescript
   import { SiNuevoIcono } from 'react-icons/si'
   ```

2. **Agrega el icono al mapa** en la función `getTechnologyIcon`:
   ```typescript
   const iconMap = {
     // ... iconos existentes
     'Nueva Tecnología': SiNuevoIcono,
   }
   ```

3. **Agrega el color** en `src/utils/githubApi.ts`:
   ```typescript
   const colors = {
     // ... colores existentes
     'Nueva Tecnología': '#color-hex',
   }
   ```

## 📸 Tips para las Imágenes

1. **Tamaño**: Usa imágenes de buena calidad pero optimizadas (max 500KB)
2. **Formato**: PNG para capturas con texto, JPG para fotografías
3. **Ratio**: Mantén un ratio 4:3 o 16:9 para consistencia visual
4. **Contenido**: Muestra la interfaz principal o una característica destacada
5. **Nombres**: Usa nombres descriptivos como `proyecto-ecommerce.png`

## 🔗 URLs

### liveUrl (Opcional)
- URL donde está desplegado tu proyecto
- Ejemplo: `https://mi-proyecto.vercel.app`
- Si no tienes un proyecto en vivo, omite este campo

### githubUrl (Opcional)
- URL del repositorio en GitHub
- Ejemplo: `https://github.com/tu-usuario/tu-proyecto`
- Si el proyecto es privado o no está en GitHub, omite este campo

## 🎯 Buenas Prácticas

1. **Descripción clara**: Explica qué hace el proyecto y qué problemas resuelve
2. **Tecnologías relevantes**: Incluye solo las tecnologías principales
3. **Imágenes actualizadas**: Usa capturas recientes que reflejen el estado actual
4. **Orden lógico**: Coloca los proyectos más destacados primero
5. **Enlaces verificados**: Asegúrate de que los enlaces funcionen correctamente

## 📱 Responsive

El diseño es completamente responsive:
- **Móvil**: 1 columna
- **Tablet**: 2 columnas
- **Desktop**: 3 columnas

## 🚀 Ejemplo de Flujo Completo

1. Tienes un proyecto llamado "Task Manager"
2. Capturas una imagen: `task-manager-screenshot.png`
3. La guardas en `public/task-manager-screenshot.png`
4. Agregas el proyecto al array:

```typescript
{
  id: 4,
  title: 'Task Manager',
  description: 'Aplicación de gestión de tareas con React y Firebase. Permite crear, editar y eliminar tareas con autenticación de usuarios.',
  image: '/task-manager-screenshot.png',
  technologies: ['React', 'TypeScript', 'Firebase'],
  liveUrl: 'https://task-manager-app.vercel.app',
  githubUrl: 'https://github.com/mi-usuario/task-manager',
  featured: true,
}
```

5. Guardas el archivo y el proyecto aparecerá automáticamente en el portafolio

## ❓ Preguntas Frecuentes

### ¿Puedo usar imágenes de URLs externas?
Sí, puedes usar URLs externas en el campo `image`:
```typescript
image: 'https://ejemplo.com/imagen.jpg'
```

### ¿Qué pasa si no tengo una imagen?
Si no proporcionas una imagen o la imagen no se carga, se mostrará un placeholder con un icono de GitHub.

### ¿Puedo tener proyectos sin enlaces?
Sí, ambos campos (`liveUrl` y `githubUrl`) son opcionales. Si no los proporcionas, no se mostrarán los botones correspondientes.

### ¿Cómo cambio el orden de los proyectos?
Simplemente cambia el orden de los objetos en el array `personalProjects`. Los proyectos se muestran en el mismo orden que aparecen en el array.

## 🎨 Personalización

Puedes personalizar los estilos de las tarjetas editando las clases de Tailwind en el componente `Projects.tsx`.

¡Listo! Ahora puedes agregar todos tus proyectos personales a tu portafolio. 🚀

