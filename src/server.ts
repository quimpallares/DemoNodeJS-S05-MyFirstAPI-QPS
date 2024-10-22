import './loadEnvironment.js';
import express from 'express';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
const nombres = ['Santiago Fernández', 'Nahomy Argueta', 'Daniel Galeano', 'Denis Podovei', 'Ivan Vallejo', 'Nil Marquez', 'Paul Aznar', 'Òscar Cruañas', 'Quim Pallarés', 'Pol Cubo', 'Oriol Fontcuberta', 'Sofía Ramírez', 'Javier Pérez', 'Valentina López', 'Andrés Gutiérrez', 'Camila Torres', 'Martín Vargas', 'Lucía Herrera', 'Diego Castillo', 'Isabela Mendoza', 'Mateo Morales', 'Gabriela Sánchez', 'Daniela Rojas', 'Carlos Gómez', 'Alejandra Fernández', 'Ricardo Navarro', 'Mariana Salazar', 'Felipe Ortega', 'Paula Aguirre', 'Héctor Campos'];

//app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req,res) => res.json({response:'jsonq'}));
app.get('/ping', (req,res) => res.json({response:'jsonq'}));

app.get('/nombres', (req, res) => {
  res.json({alumnes: nombres, numeros: String(nombres.length)});
});

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;

/*
import express, { response } from 'express';
//const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
*/
