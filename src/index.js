const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')
const indexRouter = require('./routes/index.routes.js')

const app = express()

app.set("appName", "Nivel Glucosa")
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(express.json())
app.use(morgan("dev"))


// Rutas
app.use(indexRouter)

// Rutas publicas
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log(`Server ${app.get('appName')} listo en el puerto 3000`)