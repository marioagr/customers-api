# Customer API Project / Proyecto Customer API

This project is a full-stack application that includes a backend API developed with Node.js and Express, and a frontend developed with React and Vite.

Este proyecto es una aplicación full-stack que incluye un backend API desarrollado con Node.js y Express, y un frontend desarrollado con React y Vite.

## Prerequisites / Requisitos previos

- Docker and Docker Compose installed on your system.
- Node.js (version 18 or higher) if you want to run locally.
- npm or yarn for managing dependencies.

- Docker y Docker Compose instalados en tu sistema.
- Node.js (versión 18 o superior) si deseas ejecutar localmente.
- npm o yarn para gestionar dependencias.

## How to run the project / Cómo ejecutar el proyecto

### Option 1: Using Docker Compose (Recommended) / Opción 1: Usando Docker Compose (Recomendado)

1. Make sure you have Docker and Docker Compose installed.
2. In the project root, run the following command:

   ```bash
   docker-compose up
   ```

3. Once the containers are running:
   - The backend will be available at `http://localhost:3000`
   - The frontend will be available at `http://localhost:5173`

1. Asegúrate de tener Docker y Docker Compose instalados.
2. En la raíz del proyecto, ejecuta el siguiente comando:

   ```bash
   docker-compose up
   ```

3. Una vez que los contenedores estén en funcionamiento:
   - El backend estará disponible en `http://localhost:3000`
   - El frontend estará disponible en `http://localhost:5173`

### Option 2: Run locally / Opción 2: Ejecutar localmente

#### Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   The backend will run at `http://localhost:3000`.

1. Navega al directorio `backend`:

   ```bash
   cd backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor:

   ```bash
   npm start
   ```

   El backend se ejecutará en `http://localhost:3000`.

#### Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The frontend will run at `http://localhost:5173`.

1. Navega al directorio `frontend`:

   ```bash
   cd frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El frontend se ejecutará en `http://localhost:5173`.

## Project structure / Estructura del proyecto

- `backend/`: Contains the API server code.
- `frontend/`: Contains the React application code.
- `docker-compose.yml`: Configuration to run the application with Docker.

- `backend/`: Contiene el código del servidor API.
- `frontend/`: Contiene el código de la aplicación React.
- `docker-compose.yml`: Configuración para ejecutar la aplicación con Docker.

## Available scripts / Scripts disponibles

### Backend
- `npm start`: Starts the server.
- `npm run format`: Formats the code with Prettier.

### Frontend
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint.
- `npm run preview`: Previews the production build.
- `npm run format`: Formats the code with Prettier.

### Backend
- `npm start`: Inicia el servidor.
- `npm run format`: Formatea el código con Prettier.

### Frontend
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint.
- `npm run preview`: Previsualiza la build de producción.
- `npm run format`: Formatea el código con Prettier.