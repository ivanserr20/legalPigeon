const Post = require('../models/post')
const fs = require('fs')

module.exports = {
    async getExpedients() {
        const Expedients = Post.expedients
        console.log(Expedients)
        // El sort se encaraga de ordenar los posts de más reciente a menos usando releaseDate, que es la fecha de lanzamiento de estos.
        return Expedients
    },
    async getExpedient(id) {
        const Expedient = Post.expedients
        var currentPost = "No hay ningun expediente con el id: " + id
        for (let i = 0; i < Expedient.length; i++) {
            if (Expedient[i].id == id) {
                currentPost = Expedient[i]
                continue
            }
        }
        return currentPost
    },
    async getSubstitutes() {
        const Substitutes = Post.substitutes
        console.log(Substitutes)
        // El sort se encaraga de ordenar los posts de más reciente a menos usando releaseDate, que es la fecha de lanzamiento de estos.
        return Substitutes
    },
    async getSubstitute(id) {
        const Substitute = Post.substitutes
        var currentPost = "No hay ningun sustituto con el id: " + id
        for (let i = 0; i < Substitute.length; i++) {
            if (Substitute[i].id == id) {
                currentPost = Substitute[i]
                continue
            }
        }
        return currentPost
    },
    async createNewExpedient(txt) {
       var newExpedient = JSON.parse(txt)
       Post.expedients.push(newExpedient)
       console.log(Post)
       fs.writeFileSync('./models/DB.json', JSON.stringify(Post))
       return newExpedient       
    },
    async removeExpedient(id) {
        var removeExpedient = "El id no corresponde a ningun expediente de la BD"
        for ( let i = 0; i < Post.expedients.length; i++){
            if (Post.expedients[i].id == id){
                removeExpedient = Post.expedients[i]
                Post.expedients.splice(i,1)
                continue
            }
        }
        fs.writeFileSync('./models/DB.json', JSON.stringify(Post))
        return removeExpedient       
    },
}