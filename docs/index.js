import express from 'express';

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
app.use(express.static(path.join(__dirname, "/pages")));




//COnfiguración de las rutas al backend
app.get("/", (req,res)=> res.sendFile(__dirname + "/pages/index.html"));