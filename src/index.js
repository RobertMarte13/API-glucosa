import express from 'express'
import morgan from 'morgan'
import path from 'path'
import 'ejs'
import indexRouter from './routes/index.routes.js'
import { fileURLToPath } from 'url'
import { PORT } from './config.js'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set("appName", "Nivel Glucosa")
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors())

app.use(express.json())
app.use(morgan("dev"))


// Rutas
app.use(indexRouter)

// Rutas publicas
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT)
console.log(`Server ${app.get('appName')} listo en el puerto ${PORT}`)