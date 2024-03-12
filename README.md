README - Spanish Version

Aplicación Marvel
=================

Introducción
------------

Este proyecto es un ejercicio propuesto como prueba técnica. Utilizando la API de Marvel Developers, los usuarios pueden ver una lista de personajes, agregarlos a favoritos y ver información detallada sobre cada personaje.


Tecnologías Utilizadas
----------------------

-   React
-   Next.js
-   CSS
-   Context API
-   ESLint
-   Jest para pruebas


Ejecutando la Aplicación
------------------------

1.  Clona el repositorio en tu equipo local.
2.  Claves API: Necesitas obtener tus propias claves de la API de Marvel. Crea una cuenta en el portal de desarrolladores de Marvel, luego tendrás acceso a tus claves de API pública y privada.
3.  Crea un archivo `.env.local` en la raíz del proyecto y añade tus claves de API de Marvel de la siguiente manera:

    `NEXT_PUBLIC_MARVEL_PUBLIC_KEY=tuClavePublicaAqui
    MARVEL_PRIVATE_KEY=tuClavePrivadaAqui`

4.  Genera un hash MD5 a partir de la combinación de `timestamp + clave pública + clave privada`. Puedes usar generadores de hash MD5 en línea o librerías en tu proyecto. En 'timestamp' puedes poner `ts=1. La estructura completa es `ts=1&apikey=tuclavepublica&hash=elhashqueacabasdegenerar`
5.  Instala las dependencias ejecutando `npm install`.
6.  Inicia el servidor de desarrollo con `npm run dev`.
7.  Accede a la aplicación a través de `http://localhost:3000`.


Estructura del Proyecto
-----------------------

-   `components/`: Contiene componentes reutilizables como FavoriteHeart y Header.
-   `context/`: Contiene el contexto de React para la gestión del global state.
-   `pages/`: Contiene las páginas de Next.js.
-   `public/`: Contiene archivos estáticos como imágenes.
-   `services/`: Contiene servicios para llamadas a API externas.
-   `styles/`: Contiene archivos CSS.


Características e Implementaciones
----------------------------------

-   Listado de Personajes: Muestra una lista de personajes de Marvel.
-   Funcionalidad de Favoritos: Los usuarios pueden agregar y eliminar personajes de sus favoritos.
-   Vista Detallada del Personaje: Vista detallada de cada personaje incluyendo sus apariciones en cómics.


Desafíos y Soluciones
---------------------

-   Límite de peticiones API: Implementé caché para reducir las llamadas a la API.
-   Diseño Responsivo: Utilicé CSS y mediaqueries para asegurar que la app sea compatible con móviles.


Capturas de Pantalla - DESKTOP
------------------------------

<img src="http://cylabeth.com/gitimg/main-desktop.png" width="400" ></br>
<img src="http://cylabeth.com/gitimg/detail-desktop.png" width="400" ></br>
<img src="http://cylabeth.com/gitimg/fav-section-desktop.png" width="400" >


Capturas de Pantalla - MOBILE
------------------------------
<img src="http://cylabeth.com/gitimg/main-mobile.png" width="250" ></br>
<img src="http://cylabeth.com/gitimg/detail-mobile.png" width="250" ></br>
<img src="http://cylabeth.com/gitimg/fav-section-movile.png" width="250" >



Mejoras Futuras
---------------

-   Paginación para el listado de personajes.
-   Implementar pruebas más exhaustivas (solo he testeado los componentes utilizando Jest. Queda pendiente una prueba con Cypress).
-   Autenticación de usuarios para gestionar favoritos en diferentes dispositivos.
-   Detalles de los comics

-----------------------------------------------------------------------------------------------------------------------------
README - English Version

Marvel App
==========

Introduction
------------

This project is a proposed exercise as a technical test. Using the Marvel Developers API, users can view a list of characters, add them to favorites, and view detailed information about each character.


Technologies Used
-----------------

-   React
-   Next.js
-   CSS
-   Context API
-   ESLint
-   Jest for testing


Running the Application
-----------------------

1.  Clone the repository to your local machine.
2.  API Keys: You need to obtain your own Marvel API keys. Create an account on the Marvel Developer portal, then grab your public and private API keys.
3.  Create an `.env.local` file at the root of the project and add your Marvel API keys as follows:

    `NEXT_PUBLIC_MARVEL_PUBLIC_KEY=yourPublicKeyHere
    MARVEL_PRIVATE_KEY=yourPrivateKeyHere`

4.  Generate an MD5 hash from the combination of `timestamp + private key + public key`. You can use online MD5 hash generators or libraries in your project. In 'timestamp' you can use `ts=1`. This is the complete line: `ts=1&apikey=yourPublicKey&hash=YourHash`
5.  Install the dependencies by running `npm install`.
6.  Start the development server with `npm run dev`.
7.  Access the application through `http://localhost:3000`.


Project Structure
-----------------

-   `components/`: Contains reusable components like FavoriteHeart and Header.
-   `context/`: Contains the React context for global state management.
-   `pages/`: Contains the Next.js pages.
-   `public/`: Contains static assets like images.
-   `services/`: Contains services for external API calls.
-   `styles/`: Contains CSS files.


Features and Implementations
----------------------------

-   Character Listing: Display a list of Marvel characters.
-   Favorites Functionality: Users can add and remove characters from their favorites.
-   Character Details View: Detailed view of each character including their comics appearances.


Challenges and Solutions
------------------------

-   API Rate Limiting: Implemented caching to reduce API calls.
-   Responsive Design: Used CSS and media queries to ensure the app is mobile-friendly.


Screenshots - DESKTOP
------------------------------

![Detail character view](http://cylabeth.com/gitimg/detail-desktop.png | width=250)
![Main view](http://cylabeth.com/gitimg/main-desktop.png | width=250)
![Favorites filter view](http://cylabeth.com/gitimg/fav-section-desktop.png | width=250)


Screenshots - MOBILE
------------------------------

![Detail character view](http://cylabeth.com/gitimg/detail-mobile.png | width=150)
![Main view](http://cylabeth.com/gitimg/main-mobile.png | width=150)
![Favorites filter view](http://cylabeth.com/gitimg/fav-section-movile | width=150)


Future Improvements
-------------------

-   Pagination for character listings.
-   Implementing more comprehensive tests (I have only tested the components using Jest. A test with Cypress is pending).
-   User authentication to manage favorites across devices.
-   Add comics details