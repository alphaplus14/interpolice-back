// las rutas del modulo ciudadano

import { Router } from "express";

//importamos la logica del controlador para construir

//cada interaccion de la ruta: get, post , put , delete

import * as CiudadanoCtr from "../controllers/ciudadano.controller.js";

//instanciamos el metodo router del express para poder crear las rutas

const router = Router();

//las rutas del modulo
//ruta para listar todos

router.get("/ciudadano/listartodos", CiudadanoCtr.getCiudadanos);

router.get("/ciudadano/listarporid/:id", CiudadanoCtr.getCiudadanosById);

router.post("/ciudadano/crear", CiudadanoCtr.createciudadanos);

router.delete("/ciudadano/borrarporid/:id", CiudadanoCtr.deleteciudadanos);

router.put("/ciudadano/editar/:id", CiudadanoCtr.updateciudadanos);

export default router;
