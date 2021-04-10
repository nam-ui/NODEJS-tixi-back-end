const Movie = require('../models/movie')
const User = require('../models/user')
const { _debug, _info, _error, _warn } = require('../configs/logging')

const mongoDataMethods = {
    // TODO method BOOK
    getUsers: async () => {
        _info('USER', 'get users successfully 😁')
        return await User.find()
    },
    // TODO method Movie 
    createMovie: async movie => {
        await Movie(movie).save()
        _info('MOVIE', 'create movie successfully 😁', movie )
        return movie
    },
    Movies: async () => {
        _info('MOVIE', 'get movies successfully 😁')
        return await Movie.find()
    }
}

module.exports = mongoDataMethods