JavaScript básico – C3
Ing. Carlos Carrascal

# Título: Galería de Imágenes Interactiva

Descripción del Proyecto:
Desarrolla una aplicación web que permita a los usuarios explorar una galería de imágenes. Los usuarios podrán agregar nuevas imágenes a la galería, eliminar imágenes existentes y visualizar detalles de cada imagen al hacer clic en ella. Además, la aplicación debe incluir animaciones para la carga y eliminación de imágenes, así como para las interacciones del usuario.

Requisitos del Proyecto:

## 3.1. Estructura HTML y Estilos

### Estructura HTML:

Un div principal para contener la galería.
Un campo de entrada input para la URL de la imagen y un input para el título de la imagen.
Un botón button para añadir la imagen a la galería.
Un contenedor div para mostrar las imágenes en miniatura.
Cada imagen en la galería debe estar en un elemento div con una clase específica y contener una imagen img, un título h3, un botón para eliminar y un botón para ver detalles.
Estilos CSS:

Estilos básicos para las imágenes en miniatura y el contenedor de la galería.
Estilos para los botones y los detalles de las imágenes.
Transiciones y animaciones para la aparición, eliminación y ampliación de las imágenes.
## 3.2. Inserción de Elementos en el DOM

### Administración de Nodos:

Implementa una función que, al hacer clic en el botón de añadir imagen, cree un nuevo elemento div con una imagen img, un título h3, y dos botones (uno para eliminar y otro para ver detalles). Añade este nuevo elemento al contenedor de la galería.
Propiedades para Modificación de Elementos:

Implementa funciones que permitan modificar el título y la URL de una imagen existente al hacer clic en el botón correspondiente. Utiliza textContent y src para cambiar el título y la imagen.
Propiedades de Inserción Adyacente:

Añade la nueva imagen antes o después de una imagen existente en la galería según la selección del usuario.
Navegación de Elementos en el DOM

## 4.1. Navegación y Selección de Elementos:

Implementa una función que, al hacer clic en una imagen, muestre una vista previa en un modal o en una sección dedicada con detalles adicionales. Utiliza querySelector para seleccionar la imagen y mostrar sus detalles.
## 4.2. Manipulación de Clases y Estilos:

Usa classList para añadir o quitar clases de los elementos de la galería cuando se seleccionen o eliminen. Por ejemplo, resalta una imagen cuando se haga clic en ella.
Animación de Elementos del DOM

## 5.1. Animación de Inserción y Eliminación:

Implementa animaciones suaves para cuando una imagen se añada o elimine de la galería. Utiliza "CSS transitions" para cambiar la opacidad o el tamaño de los elementos durante la inserción y eliminación.
## 5.2. Animación de Ampliación y Detalles:

Crea una animación que amplíe la imagen cuando se haga clic en el botón de ver detalles. Utiliza requestAnimationFrame o CSS transitions para una animación suave que muestre la imagen en tamaño completo.
Instrucciones para Implementación:

## 6.1. HTML:

Crea el archivo index.html con la estructura básica mencionada.
Asegúrate de tener los campos de entrada, el botón de añadir, el contenedor de la galería y los elementos para cada imagen.
## 6.2. CSS:

Define los estilos en styles.css para el contenedor de la galería, las imágenes en miniatura, los botones y las animaciones deseadas. Incluye estilos para la ampliación de imágenes y transiciones para los efectos de aparición y desaparición.
## 6.3. JavaScript:

Escribe el código en script.js para manejar la inserción y eliminación de imágenes, la modificación de los detalles de las imágenes y la navegación entre imágenes.
Implementa las funciones para agregar nuevas imágenes, eliminar imágenes, mostrar detalles de imágenes y animar los cambios en la galería.
## Entrega del Proyecto:

El proyecto debe ser entregado con los archivos index.html, styles.css, y script.js organizados en una estructura de directorio clara.
Incluye comentarios en el código para explicar las funciones y la lógica implementada.