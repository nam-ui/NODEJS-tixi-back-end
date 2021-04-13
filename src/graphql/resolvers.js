const { GraphQLScalarType, Kind } = require('graphql');


const resolvers = {
    // ROOT QUERY
    Query: {
        users: async (parent, args, context) => await context.mongoDataMethods.getUsers(),
        movies: async (parent, args, context) => await context.mongoDataMethods.Movies(),
    },
    // ROOT MUITATION
    Mutation: {
        createMovie: async (parent, args, context) => {
           return await context.mongoDataMethods.createMovie(args)
        },
        deleteMovie: async (parent, args, context) =>{
            return await context.mongoDataMethods.deleteMovie(args)
        },
        updateMovie: async (parent, args, context) => {
            return await context.mongoDataMethods.updateMovie(args)
        }
    },

    // TODO conver time
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'DateTime ',
        parseValue(value) {
            return new Date(value)
        },
        parseLiteral(ast) {
            if (ast.kind == Kind.INT) {
                return parseInt(ast.value, 10)
            }
            return null
        },
        serialize(value) {
            const date = new Date(value)
            return date.toString()
        }
    })
}
module.exports = resolvers