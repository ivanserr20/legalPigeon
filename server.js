const express = require('express')
const { parse } = require('url') //Módulo nativo de Node. No hay que instalarlo.
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler() // Este método gestiona las rutas tal y como Next lo hace por defecto

app.prepare().then(() => {
    const server = express()

    server.get('/post/:id', (req, res) => {
        const mergedQuery = Object.assign({}, req.query, req.params) //Unimos en un objeto los parámetros y los querys, en el caso de que los necesitemos
        console.log(req.params)
        return app.render(req, res, '/post', mergedQuery) // Mandamos al usuario que pida esta ruta a la registrada como Post por Next.
    })

    server.get('*', (req, res) => {
        return handle(req, res) // Next gestiona el resto de rutas
    })

    const port = process.env.PORT || 3000

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on port ${port}...`)
    })
})