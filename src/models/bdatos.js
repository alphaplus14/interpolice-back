//modulo para conexion a la base de datos
import mysql from "mysql2";

let cnx = "";
//el pool crea una cola de espera, permite manejar asyncronico y promesas. Es buena practica. Optimiza la entrada a la base de datos
try {
  cnx = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "interpolice",
    port:"3306",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
  });
  //   console.log(`Conexion Exitosa`);
} catch (error) {
  console.log(`Ha acorrido un error en la conexion: ${error.message}`);
}
export { cnx };
