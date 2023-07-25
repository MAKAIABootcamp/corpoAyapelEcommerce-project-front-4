# MarketPlace corpoAyapel 
![logo](/src/assets/Images/logo.png)
## Autores:
-  [Natalia Maldonado](https://github.com/NataliaMR26)  
- [Paola Torres](https://github.com/PaolaTorresV)  
- [Andres Parra](https://github.com/AndresParra11) 
- [Diego Samudio](https://github.com/DISARODS)
  
## Descripción: 
Este es el aplicativo web e-commerce de Artesanías CorpoAyapel, el cual presenta una página para la venta de productos realizados por los artesanos, dándoles más visibilidad a su trabajo.
Los productos son previamente creados por el administrador al que se le permite editar o modificar el contendio que desee. El usuario desde la página puede filtrar por categorias, ver detalles del producto, agregar y eliminar productos del carrito, a su vez contando con un inicio de sesión con correo o con cuenta de google, permitiendo el registro si no está logueado aún y formulario de direcciones para realizar su pedido.
Tomando un enfoque orientado a los artesanos que fabrican estos productos, se ha creado una sección en la cual se comparten testimonios y el "quiénes somos" para conocer más acerca de los mismos.
Contamos con sus redes sociales y una sección de Contacto para que se comuniquen directamente con ellos de una forma más eficiente. 
Para la realización de la compra se cuentan con diferentes medios de pago.
Cuenta con un diseño responsivo y maquetado dinámico.

### Las herramientas empleadas fueron: 
- Para la creación y funcionalidad del proyecto: Vite + React js y redux
- Para la autenticación de usuarios y alamacenamiento de información: Firebase
- Para la validación de los formularios: Formik y Yup.
- Para los estilos: React Bootstrap,  Sass y MaterialUI para los iconos  
### Las funcionalidades que incluye sons las siguientes:
- Autenticación de usuarios con correo y cuenta de Google 
- Visualización de productos traidos de la data.
- Edición de contenido para el administrador mediante sanity.
- Proccesos de compra con integración de epayco.

## Instalación: 
### Requisitos previos: 
- Node js v16.14.2 o cualquier versión posterior a esta
- Firebase instalado (npm install -g firebase-tools)

Para hacer uso de este codigo los pasos a seguir son: 
### ▶ clonar el repositorio:
1. Crear una nueva carpeta en la que se se va a alojar el repositorio
2. En git hub, copiar el enlace proporcioando al dar clic en el botón "Code" 
3. En la carpeta se debe abrir una consola con git bash here 
4. En esta consola se corre el comando: `git clone` (seguido del enlace copiado de github) (Nota: esta consola no permite el uso del comando CTRL+C o CTRL+V)
### ▶ abrir el repositorio:
5. En la consola se debe ejecutar el comando: `cd` (seguido del nombre de la carpeta clonada, para moverse a esta carpeta).
6. En la consola se debe ejecutar el comando: `code .` (para abrtirt el proyecto en VSC)
7. En la consola se debe ejecutar el comando: `cd corpoAyapelEcommerce-project-front-4`  (para moverse a esta carpeta)
8. En la consola se debe ejecutar el comando: `cd e-commerce-artesanias`  (para moverse a esta carpeta)
9. En la consola se debe ejecutar el comando: `npm install` (para que se hagan las instalaciones requeridas)
10. En la consola se debe ejecutar el comando: `npm run dev` (para visualizar en el navegador este proyecto, este comando se dedebe correr cada vez que se abra el proyecto para poderlo visualiza)
