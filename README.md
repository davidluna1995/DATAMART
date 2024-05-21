# DATAMART
Prueba Técnica

# GitHub User Info

Este proyecto es una aplicación web simple que permite a los usuarios buscar información de otros usuarios de GitHub utilizando la API pública de GitHub.

## Funcionalidades

- Permite al usuario ingresar el nombre de usuario de GitHub en un campo de texto y mostrar la información correspondiente al presionar un botón.
- Muestra el nombre de usuario, la foto de perfil y la biografía del usuario.
- Muestra el número de seguidores y el número de repositorios públicos del usuario.
- Muestra una lista de los repositorios más recientes del usuario, incluyendo el nombre y la descripción de cada repositorio.
- Si el usuario no tiene ha escrito nada, muestra en el boton un pop up "Ingrese un usuario para buscar".
- Si el usuario no tiene descripción del repositorio, muestra el mensaje "No hay descripción disponible".
- Si el usuario no tiene repositorios, muestra el mensaje "No cuenta con repositorios".


## Tecnologías Utilizadas

- React.js v18.3.1: Para construir la interfaz de usuario.
- Axios: Para realizar las solicitudes a la API de GitHub.
- FontAwesome: Para agregar iconos a la aplicación.
- CSS: Para estilos y diseño.

## Instalación y Uso

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:
git clone https://github.com/davidluna1995/DATAMART.git

2. Entra al directorio del proyecto:
cd github-datamart

3. Instala las dependencias necesarias utilizando npm:
npm install

4. Inicia la aplicación:
npm start

La aplicación estará disponible en tu navegador en `http://localhost:3000`.
