const Db = require('../lib/post')

module.exports = {
    loadExpedients: async (req, res) => {
        const Entries = await Db.getExpedients()
        res.status(200) // 200 => Todo está O.K.
        res.json(Entries)
    },   
    loadExpedient: async (req, res) => {
        const Entry = await Db.getExpedient(req.params.id)
        res.status(200)
        res.json(Entry)
    },
    loadSubstitutes: async (req, res) => {
        const Entries = await Db.getSubstitutes()
        res.status(200) // 200 => Todo está O.K.
        res.json(Entries)
    },   
    loadSubstitute: async (req, res) => {
        const Entry = await Db.getSubstitute(req.params.id)
        res.status(200)
        res.json(Entry)
    },
    newExpedient: async (req, res) => {
        const newEntry = await Db.createNewExpedient(req.params.txt)
        res.status(201) // 201 => Hay nuevo contenido.
        res.json(newEntry)
    },
    delExpedient: async (req, res) => {
        const newEntry = await Db.removeExpedient(req.params.id)
        res.status(201) // 201 => Hay nuevo contenido.
        res.json(newEntry)
    }
}