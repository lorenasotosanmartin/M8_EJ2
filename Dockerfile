# Usar una imagen base de Node.js
FROM node:22
# Crear y establecer el directorio de trabajo
WORKDIR /app
# Copiar archivos y descargar dependencias
COPY package.json package-lock.json ./
RUN npm install
# Copiar el resto del código
COPY . .
# Exponer el puerto 5173
EXPOSE 5173
# Comando para ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]