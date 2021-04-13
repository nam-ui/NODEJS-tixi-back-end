const Movie = require('../models/movie')
const User = require('../models/user')
const {
    _debug,
    _info,
    _error,
    _warn
} = require('../configs/logging')

const mongoDataMethods = {
    // TODO method User
    getUsers: async () => {
        _info('USER', 'get users successfully 😁')
        return await User.find()
    },
    // TODO method Movie 
    Movies: async () => {
        _info('MOVIE', 'get movies successfully 😁')
        return await Movie.find()
    },
    createMovie: async movie => {
        console.log(movie);
        await Movie(movie).save()
        _info('MOVIE', 'create movie successfully 😁', movie)
        return movie
    },
    deleteMovie: async movieId => {
        await Movie.remove({
            "_id": (movieId)
        })
        _info('MOVIE', 'delete movie successfully 😁', movieId)
        return Movie.find()
    },
    updateMovie: async movie => {
        await Movie.updateOne({
            _id: movie._id,
        }, {
            $set: {
                moviesName: movie.moviesName,
                aliases: movie.aliases,
                trailer: movie.trailer,
                picture: movie.picture,
                described: movie.described,
                groupCode: movie.groupCode,
                launchDate: movie.launchDate,
                rating: movie.rating,
            }
        })
        _info('MOVIE', 'update movie successfully 😁', movie)
        return Movie.find()
    }




}

module.exports = mongoDataMethods