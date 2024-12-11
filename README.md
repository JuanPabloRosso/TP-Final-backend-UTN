# IceCream Stock Control - README - Juan Pablo Rosso

## Descripción

IceCream Stock Control es una aplicación construida en Node.js y MongoDB que permite gestionar un inventario de helados. Incluye un CRUD con varias funcionalidades, como listar todos los helados, buscar por ID, identificar helados vencidos, agregar nuevos productos, actualizarlos y eliminarlos. Además, la aplicación incluye un sistema de autenticación para registro e inicio de sesión.

## Requisitos previos

1. Tener instalado [Node.js](https://nodejs.org/).
2. Tener configurada una instancia de [MongoDB](https://www.mongodb.com/).
3. Una herramienta para probar APIs, como [Postman](https://www.postman.com/) o [Rapid Client](https://rapidapi.com/).

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd backend
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```
4. Configurar las variables de entorno en un archivo `.env`:
   ```env
   PORT=3100
   MONGO_URI=mongodb://localhost:27017/icecream_db
   JWT_SECRET=mi_secreto
   ```
5. Iniciar el servidor:
   ```bash
   npm run dev
   ```

## Endpoints disponibles

### Autenticación

1. **Registro de usuario**

   - **Ruta:** `POST /api/auth/register`
   - **email:** De uso unico
   - **Body de ejemplo:**

     ```json
     {
       "username": "pepito",
       "password": "prueba1",
       "email": "pepe@gmail.com" //unico
     }
     ```

2. **Inicio de sesión**

   - **Ruta:** `POST /api/auth/login`
   - **Body de ejemplo:**

     ```json
     {
       "username": "pepito",
       "password": "prueba1"
     }
     ```

   - **Respuesta esperada:** Devuelve un token JWT para autenticar futuras solicitudes.

### CRUD para IceCreams

1. **Listar todos los helados**
   - **Ruta:** `GET /api/icecreams`
   - **Descripción:** Devuelve una lista con todos los helados en el sistema.
2. **Buscar helado por ID**

   - **Ruta:** `GET /api/icecreams/:id`
   - **Descripción:** Devuelve un helado específico según su ID.

3. **Listar helados vencidos**

   - **Ruta:** `GET /api/icecreams/expired`
   - **Descripción:** Devuelve todos los helados cuya fecha de vencimiento ha pasado.

4. **Agregar un nuevo helado**

   - **Ruta:** `POST /api/icecreams`
   - **Body de ejemplo:**
     ```json
     {
       "name": "Palito Bombom", //unico
       "price": 200,
       "description": "crema recubierta de chocolate crocante",
       "stock": 70,
       "expiredAt": "2024-12-15"
     }
     ```
   - **Validaciones:** Todos los campos son obligatorios.

5. **Actualizar un helado**

   - **Ruta:** `PATCH /api/icecreams/:id`
   - **Body de ejemplo:**
     ```json
     {
       "price": 150,
       "description": "actualizado"
     }
     ```
   - **Validaciones:** Los campos son opcionales, pero deben ser válidos.

6. **Eliminar un helado**
   - **Ruta:** `DELETE /api/icecreams/:id`
   - **Descripción:** Elimina un helado según su ID.

## Uso

1. Inicia el servidor con `npm run dev`.
2. Usa herramientas como Postman o Rapid Client para interactuar con los endpoints.
3. Para proteger rutas sensibles, asegúrate de incluir el token JWT generado tras el inicio de sesión en el encabezado `Authorization`.

## Rutas

Las rutas están definidas de la siguiente manera:

```javascript
iceCreamRoutes.get("/", getAllIceCream);
iceCreamRoutes.get("/expired", getIceCreamExpired);
iceCreamRoutes.get("/:id", getIceCreamById);
iceCreamRoutes.post("/", validator.validateCreate, createIceCream);
iceCreamRoutes.patch("/:id", validator.validateUpdate, updateIceCream);
iceCreamRoutes.delete("/:id", deleteIceCream);
```

## Tecnologías usadas

- **Node.js**: Back-end.
- **Express**: Framework para manejar rutas y middleware.
- **MongoDB**: Base de datos NoSQL.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JSON Web Tokens (JWT)**: Para autenticación.
- **Express-validator**: para validacion de datos ingresados.
- **Helmet**: libreria para cabeceras de seguridad.
- **bcryptjs**: para hasheo de password.

## Contacto

Si tienes preguntas o necesitas ayuda, no dudes en contactarme a través de mi correo electrónico: [juanpablorosso1990@gmail.com](mailto:juanpablorosso1990@gmail.com).
