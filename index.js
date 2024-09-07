const express = require('express');
const app = express();

/*
Verbos HTTP
GET = regresar una página web
POST = guardar o publicar algo
PATCH = actualización de un dato de un recurso (ej. base de datos) específico
PUT = modifica todos los elementos de un recurso
DELETE = eliminar un recurso (ej. un registro de una base de datos)
*/
app.get("/", (req, res, next) => {
    res.status(200)
    res.send("Bienvenido");
});

app.listen(3000, () => {
    console.log("Server is running...")
});