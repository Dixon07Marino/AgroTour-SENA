import mysql from 'promise-mysql'; //driver de base de datos
//orm
import dotenv from 'dotenv';
dotenv.config();

let connection;

// Crear la conexión a la base de datos
const createConnection = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.HOST,
      database: process.env.DATABASE,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
    });
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error en la conexión a la base de datos:', err.message);
  }
};

// Obtener la conexión cuando se necesite
const getConnection = () => {
  if (!connection) {
    throw new Error('Connection has not been initialized. Call createConnection() first.');
  }
  return connection;
};

// Inicializar la conexión
createConnection();

export default { getConnection };
