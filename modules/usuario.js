//modulo para manipulacion del usuario

import express from "express";
import { cnx } from "./bdatos.js";

export const usuario = express();

//crud basico de usuario

//listar todos los usuarios
usuario.get("/usuario/listartodos", (req, res) => {
  //hacer la consulta
  let sql = "SELECT * FROM usuario ORDER BY apellidos";
  //Ejecutar la consulta en la base de datos
  cnx.query(sql, (err, results, fields) => {
    // console.log(err);
    // console.log(results);
    // console.log(fields);
    res.send({ results });
  });
});

//listar todos los usuarios por id
usuario.get("/usuario/listarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.id;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "SELECT * FROM usuario where id=?";

  // let sql2 = "SELECT * FROM usuario where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//borrar registro --borrado real

//listar todos los usuarios por id
usuario.delete("/usuario/borrarporid/:id", (req, res) => {
  //recbimos el parametro de la consulta
  let id = req.params.id;
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "delete FROM usuario where id=?";
  // let sql2 = "SELECT * FROM usuario where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//crear usuario
usuario.post("/usuario/crear", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "insert into usuario set?";
  // let sql2 = "SELECT * FROM usuario where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario], (err, results, fields) => {
    res.status(200).send({ results });
  });
});

//Editar: recibir un payload en el body de la peticion (request) y el id
usuario.put("/usuario/editar/:id", (req, res) => {
  //recbimos los parametros enviados en la consulta -payload -body en un objeto js
  let id = req.params.id;

  let datosFormulario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  console.log(datosFormulario);
  //hacer la consulta por seguridad use consulta parametrizada
  let sql = "update usuario set ? where id=? ";
  // let sql2 = "SELECT * FROM usuario where id=${id}";

  //Ejecutar la consulta en la base de datos
  cnx.query(sql, [datosFormulario, id], (err, results, fields) => {
    res.status(200).send({ results });
  });
});
