
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || '3000'

app.get('/', (req, res) => {
    res.send('Hello World')
})

const apiRoutes = require('./routes/api') // Añádelo debajo de el require de Express.

app.use(bodyParser.json()) // Convertirá el cuerpo en un objeto JSON.
app.use(cors())



app.get('/api/expe/', apiRoutes.loadExpedients)
app.get('/api/expe/:id', apiRoutes.loadExpedient)
app.get('/api/susti/', apiRoutes.loadSubstitutes)
app.get('/api/susti/:id', apiRoutes.loadSubstitute)
app.get('/api/expeadd/:txt', apiRoutes.newExpedient)
app.get('/api/expedel/:id', apiRoutes.delExpedient)

// app.post('/api/posts/', apiRoutes.newPost)
// app.put('/api/posts/', apiRoutes.updatePost) // No lleva parámetro id, ya que lo mandamos en el body.
// app.delete('/api/posts/:id', apiRoutes.deletePost)




app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})

function handleError(err) {
    console.error(`[Error] ${err.message}`)
    console.error(err.stack)
}

app.on('error', (err) => handleError)
app.on('uncaughtException', (err) => handleError)
app.on('unhandledRejection', (err) => handleError)
