# Prueba Técnica Fullstack

## Características principales

- Interfaz de chat moderna y responsive
- Historial de conversaciones persistente
- Integración con API de IA para respuestas inteligentes
- Backend con Node.js y Express
- Frontend con React (Vite)
- Base de datos PostgreSQL para almacenar mensajes
- Documentación API con Swagger

## Demo
https://chatbot-prueba-jvmf010rv-luis-davids-projects-7e4c175c.vercel.app/

## Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- PostgreSQL
- Swagger (documentación)
- CORS
- Dotenv

### Frontend
- React (Vite)
- Axios (para llamadas API)
- React Icons
- CSS Modules
- Vercel (deploy)

## Instalación local

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Configuración del backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/LuisDavidPosada10/chatbot_prueba.git
   cd chatbot_prueba/backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la carpeta backend con las siguientes variables:
   ```
   DB_HOST=localhost
   DB_USER=tu_usuario_pgAdmin
   DB_PASSWORD=tu_contraseña_pgAdmin
   DB_NAME=chatbot_db
   DB_PORT=tu_puerto
   PORT=3001
   ```
   En el archivo connection.js llama a tus variables de entorno (.env) y
   cambia esto `EXTERNAL_DB_URL || INTERNAL_DB_URL` por esto `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

4. Importa la base de datos:
   - Crea una base de datos llamada `chatbot_db` en PgAdmin

6. Inicia el servidor:
   ```bash
   npm start
   ```

El backend estará disponible en `http://localhost:3001`

### Configuración del frontend

1. Ve a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` con la siguiente variable:
   ```
   VITE_API_URL=http://localhost:3001
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

El frontend estará disponible en `http://localhost:5173`

## Uso

1. Abre la aplicación en tu navegador
2. Escribe un mensaje en el cuadro de texto en la parte inferior
3. Presiona "Enviar" o la tecla Enter
4. El mensaje se enviará al backend, que lo guardará en la base de datos y obtendrá una respuesta de la IA
5. La respuesta aparecerá en el chat junto con tu mensaje

## API Endpoints

La documentación completa de la API está disponible en `/api-docs` cuando el backend está en ejecución. Los endpoints principales son:

- `GET /messages` - Obtiene todos los mensajes
- `POST /messages` - Crea un nuevo mensaje
- `DELETE /messages` - Elimina todos los mensajes del chat

Ejemplo de solicitud POST:
```json
{
  "content": "Hola, cómo estás?",
  "sender": "user"
}
```

## Decisiones técnicas

- **Base de datos PostgreSQL**: Elegida por su compatibilidad con el stack tecnológico requerido.
- **React con Vite**: Para un desarrollo frontend rápido y eficiente.
- **Swagger**: Para documentación API clara y accesible.
- **Render y Vercel**: Plataformas confiables para despliegue de backend y frontend respectivamente.
- **Javascript puro**: Cumpliendo con los requisitos, aunque con estructura modular para mantener el código organizado.

## Contacto

- Email: [posadaluis451@gmail.com]
