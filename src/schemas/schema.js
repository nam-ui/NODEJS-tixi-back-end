const Movie = require('../models/movie')
const User = require('../models/user')
const { gql } = require('apollo-server-express');


const typeDefs = gql`
    scalar DateTime
    type User {
      id: ID!,
      username: String,
      password: String,
      createdAt: DateTime ,
      roleId: String
    }
    type Movie {
      moviesName: String,
      aliases: String,
      trailer: String,
      picture: String,
      described: String,
      groupCode: String,
      launchDate: String,
      rating:  Int,
      createdAt: String,
    }
    # ROOT Mutation Query Fragment Subscription
    type Query {
      users : [User]
      movies : [Movie]
      movie : Movie
    }
    type Mutation {
      createMovie( 
        moviesName: String,
        aliases: String,
        trailer: String,
        picture: String,
        described: String,
        groupCode: String,
        launchDate: String,
        rating:  Int,
        createdAt: String
      ): Movie,
    }
`


module.exports = typeDefs



