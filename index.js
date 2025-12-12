//API REST : GET, POST, PUT , DELETE => express
//importamos la libreria express
import express from "express";
import cors from "cors";
import { ciudadano } from "./modules/ciudadano.js";
import { usuario } from "./modules/usuario.js";

//instanciamos la libreria en un objeto - app
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

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

app.use("/", ciudadano);
app.use("/", usuario);

//encendemos el servicio -prendemos la API
app.listen(port, () => {
  console.log(`Servidor corriendo en : ${port}`);
});
