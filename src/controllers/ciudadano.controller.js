//controlador para el ciudadano : encargado de escuchar y responder las peticiones

import { CiudadanoModel } from "../models/ciudadano.model.js";

export const getCiudadanos = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await CiudadanoModel.findall();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar los ciudadanos",
    });
  }
};

//buscar ciudadano por el parametro id
export const getCiudadanosById = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await CiudadanoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al buscar el ciudadano",
    });
  }
};

//insertar un registro
export const createciudadanos = async (req, res) => {
  //codigo protegido con try..catch

  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fechaNace: req.body.fechaNace,
    planetaOrigen: req.body.planetaOrigen,
    planetaReside: req.body.planetaReside,
    foto: req.body.foto,
    codigoqr: req.body.codigoqr,
    estado: req.body.estado,
  };

  try {
    const results = await CiudadanoModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la insercion",
    });
  }
};

//eliminar un registro
export const deleteciudadanos = async (req, res) => {
  //codigo protegido con try..catch

  try {
    const results = await CiudadanoModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "No se pudo eliminar el registro",
    });
  }
};

//actualizar un registro
export const updateciudadanos = async (req, res) => {
  //codigo protegido con try..catch

  // se puede utilizar data o req.body, pero debe tener cuidado con el nombre de las tablas.
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fechaNace: req.body.fechaNace,
    planetaOrigen: req.body.planetaOrigen,
    planetaReside: req.body.planetaReside,
    foto: req.body.foto,
    codigoqr: req.body.codigoqr,
    estado: req.body.estado,
  };

  try {
    const results = await CiudadanoModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Ocurrio un error en la actualizacion",
    });
  }
};
