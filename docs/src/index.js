import express from 'express';
import database from './databases.js';
//Módulos para la correcta implemnetación de las direcciones

import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


// creación del servidor

const app = express();
app.set('port', 4000)
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Servido de archivos estaticos
app.use(express.static(path.join(__dirname, "../")));


//COnfiguración de las rutas al backend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.get("/usuarios", async (req, res) => {
    try {
      const conexion = database.getConnection(); // Llama a la función
      const resultado = await conexion.query("SELECT * FROM usuarios");
      res.json(resultado);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: "Error al obtener usuarios" });
    }
  });
  