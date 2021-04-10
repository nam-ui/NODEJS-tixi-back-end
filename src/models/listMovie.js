const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieScheduleSchema = new Schema({
    codeCinema: { type: String, required: true },
    nameCinema: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    fare: { type: Date, required: true }
})


module.exports = mongoose.model('movieSchedule', movieScheduleSchema)