// capa modelo para el modulo de ciudadanos

//importamos la conexion

import { cnx } from "./bdatos.js";

//activar el manejo de promesas (asyncronicas)

const db = cnx.promise();

//creamos el modulo : usando el concepto de orientado a objetos

// la clase modelo correspondiente a ciudadanos

export const CiudadanoModel = {
  //listar todos: aplicando funciones asincronicas para aprovechar las promesas (los hilos de ejecucion)

  findall: async () => {
    const sql = "select * from ciudadano order by apellidos";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql);
    return rows;
  },

  //buscar por id, recibe el id como parametro
  findById: async (id) => {
    const sql = "select * from ciudadano where codigo=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  //borramos teniendo en cuenta el id que llega del controlador por parametro
  delete: async (id) => {
    const sql = "delete from ciudadano where codigo=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [id]);
    return rows;
  },
  create: async (data) => {
    const sql = "insert into ciudadano set ?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data]);
    return rows;
  },
  update: async (id, data) => {
    const sql = "update ciudadano set ? where codigo=?";

    //almacenamos la respuesta en un arreglo

    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
