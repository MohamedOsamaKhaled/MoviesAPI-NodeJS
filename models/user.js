const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    watchlist: [
        {
            movies: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Movie'
            },
            watched: Boolean
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    }
})


const Model = mongoose.model('User', ModelSchema)

module.exports = Model