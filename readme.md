##BITACORA DEL PROYECTO

# HERRAMIENTAS

gestor: MySql -maria db

express: Framework node js => gestionar APIS protocolo http
node js: js standalone - instalado en mi pc --> en consola: node -v
nodemon: plugin para usar en desarrollo - No se usa en produccion
mysql2: gestionar las interacciones con la bd
cors: plugin para la gestion de cors
env: variables globales del proyecto

##HERRAMIENTAS FRONT

CSS:Framework Boostrap
Bundler: Vite --(webpack)
Vanilla js


##Paso a paso BackEnd
-iniciar el proyecto con node js -npm init
-Instalaar los paquetes requeridos : npm install nodemon mysql2 cors env express
-configurar el control de versiones del codigo:Crear el .gitignore
-Iniciar el seguimiento del repositorio: git init, git add .
-creamos el repo en la nube: github
-conectamos el repo de la nube con el repor local:
git remote add origin https://github.com/alphaplus14/interpolice-back.git
-hacemos la primer actualizacion local y remota:
local:git commit -m "inicio del proyecto"
Remota: git push -u origin main
