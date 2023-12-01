import express from "express"
import morgan from "morgan"
import ViteExpress from "vite-express"

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

import handlerFunctions from './controller.js'
const {getClients, addClient, deleteClient, editClient} = handlerFunctions;

app.get('/clients', getClients)
app.post('/client', addClient)
app.delete('/client/:id', deleteClient)
app.put('/client/:id', editClient)


ViteExpress.listen(app, 3333, () => console.log(`Server is listening on http://localhost:3333`))