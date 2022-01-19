const color = require("colors/safe")
const argv = require("process")
// Continua: Tarea 3
const {crearArchivo} = require("./crearArchivo.js")

const base = process.argv
let iNum = parseInt( base[2])

/* 
  -- Tarea 4 --
*/ 
crearArchivo(iNum);
