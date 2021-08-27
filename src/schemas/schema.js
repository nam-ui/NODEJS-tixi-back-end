const Movie = require('../models/movie')
const User = require('../models/user')
const {
  gql
} = require('apollo-server-express');


const typeDefs = gql `
    scalar DateTime
    type User {
      id: ID!,
      username: String,
      password: String,
      createdAt: DateTime ,
      role: String
    }
    type Movie {
      id: ID!,
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
#TYPE image
  type File {
      filename: String!
      mimetype: String!
      encoding: String!
    }
# TYPE PAGINATION CODE
      type Pagination {
          page: Int,
          pageSize: Int,
          totalPage: Int ,
          movies: [Movie] 
      }
# TYPE LOGIN Query
    type Login {
    user: User 
    }
    # ROOT Mutation Query Fragment Subscription
    type Query {
      users : [User]
      movies : [Movie]
      movie( _id: ID!) : Movie
      pagination( page: Int! , pageSize: Int!  ): Pagination
      
      uploads: [File]
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
        createdAt: String,
      ): Movie
      deleteMovie( _id: ID!): [Movie]
      updateMovie( _id: ID!, moviesName: String, aliases: String, trailer: String, picture: String, described: String, groupCode: String, launchDate: String, rating:  Int, createdAt: String, ) : [Movie]
      createUser( username: String! , password: String!) : User
      login( username: String! , password: String!) : Login
      findMovie(  moviesName: String! ) : [Movie] 

      uploadFile(file: Upload!): File!
    }
`

module.exports = typeDefs