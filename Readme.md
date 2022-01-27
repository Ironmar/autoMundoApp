## Auto mundo app

### Iniciar el proyecto

    npm install

### Correr el proyecto

    npm start

### Lanzar la aplicación

    npm run android

### En caso de error de watchman

    watchman watch-del-all && rm -rf node_modules/ && npm cache clean --force&& npm install && npm start -- --reset-cache
