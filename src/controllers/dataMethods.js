const Movie = require('../models/movie')
const argon2 = require('argon2')

const User = require('../models/user')
const Image = require('../models/image')

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
    createUser: async user => {
        const handedPassword = await argon2.hash(user.password);
        const userCreate = ({
            username: user.username,
            password: user.password,
        })
        const newUser = await User(userCreate).save();
        _info('USER', 'create USER successfully 😁', newUser);
        return newUser
    },
    login: async user => {
        const newUser = await User.findOne({
            username: user.username,
            password: user.password
        }, (err, userMongodb) => {
            console.log(userMongodb);
        });
        const dataLogin = {
            user: newUser
        }
        _info('USER', 'create USER successfully 😁', newUser);
        return dataLogin
    },


    // TODO method Movie 
    Movies: async () => {
        _info('MOVIE', 'get movies successfully 😁')
        return await Movie.find()
    },
    createMovie: async movie => {
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
    },
    movie: async _id => {
        return Movie.findById(_id, function (err, movie) {
            if (!err) {
                console.log(err);
            }
            return movie
        })
    },
    findMovie: async moviesName => {
        const search = moviesName.moviesName;
        if(search === '') {
            return []
        }
        return Movie.find({"moviesName": {$regex: ".*" + search + ".*"}});
    },
    // TODO method  Pagination
    pagination: async pages => {
        const startIndex = (pages.page - 1) * pages.pageSize;
        const movies = Movie.find().limit(pages.pageSize).skip(startIndex);
        const totalPage = Math.ceil(await Movie.estimatedDocumentCount() / pages.pageSize);
        return {
            page: pages.page,
            pageSize: pages.pageSize,
            totalPage: totalPage,
            movies: movies
        };
    },


    uploadFile:async picture => {
        console.log(picture);

    }




}
module.exports = mongoDataMethods