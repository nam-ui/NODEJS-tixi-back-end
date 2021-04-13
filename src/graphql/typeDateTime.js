const { GraphQLScalarType, Kind, parseValue } = require('graphql');
const DateTime = new GraphQLScalarType({
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

module.exports = DateTime
