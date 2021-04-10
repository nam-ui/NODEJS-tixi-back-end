const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cinemaSystemSchema = new Schema({
    nameCinemaSystem: { type: String, require: true, unique: true },
    aliases: { type: String, require: true, unique: true },
    logo: { type: String, require: true, unique: true },
})

module.exports = mongoose.model('cinemaSystem', cinemaSystemSchema)