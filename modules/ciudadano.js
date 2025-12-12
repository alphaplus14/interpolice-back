//modulo para manipulacion del ciudadano

import express from "express";
import { cnx } from "./bdatos.js";

export const ciudadano = express();

//crud basico de ciudadnos

//listar todos los usuarios
ciudadano.get("/ciudadano/listartodos", (req, res) => {
  //hacer la consulta
  let sql = "SELECT * FROM ciudadano ORDER BY APELLIDOS";
  //Ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send({ results });
  });
});

//listar todos los ciudadanos por id
ciudadano.get("/ciudadano/listarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.id;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "SELECT * FROM ciudadano where codigo=?";

  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//borrar registro --borrado real

//listar todos los ciudadanos por id
ciudadano.delete("/ciudadano/borrarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.id;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "delete FROM ciudadano where codigo=?";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//crear Ciudadano
ciudadano.post("/ciudadano/crear", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let datosFormulario = {
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
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "insert into ciudadano set?";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//Editar: recibir un payload en el body de la peticion (request) y el id
ciudadano.put("/ciudadano/editar/:id", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let id = req.params.id;

  let datosFormulario = {
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
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "update ciudadano set ? where codigo=? ";
  // let sql2 = "SELECT * FROM ciudadano where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
