//API REST : GET, POST, PUT , DELETE => express
//importamos la libreria express
import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadano.js";
import { usuario } from "./modules/usuario.js";

//instanciamos la libreria en un objeto - app
const app = express();
const port = 3000;
app.use(express.json());// para que el servidor entienda json en el body
app.use(cors());


//primer recurso o endpoint
app.get("/", (request, response) => {
  response.status(200).send("API Encendida");
});

// app.get("/ciudadano", (request, response) => {
//   response.send({
//     id: 1,
//     nombre: "pedrito el lento",
//     apodo: "escamoso",
//     status: true,
//     edad: 27,
//   });
// });

//rutas 
app.use("/", ciudadano);
app.use("/", usuario);

//encendemos el servicio -prendemos la API, el metodo listen viene de la libreria express
app.listen(port, () => {
  console.log(`Servidor corriendo en : ${port}`);
});
