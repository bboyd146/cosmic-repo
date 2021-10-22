const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

var products = [
    {name: 'FKA twigs', description: 'EP2 is the second album by FKA twigs', id: '1'},
    {name: 'Willie Nelson', description: 'Phases and Stages is Willie Nelsons 11th studio album', id: '2'},
]
    
const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields:() =>({
        id: {
            type: GraphQLID, 
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        img: {
            data: Buffer,
            type: GraphQLString
        }
    })
});

const RootQuery = new GraphQLObjectType ({
    name: 'RootQueryType',
    fields: {
        product: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
            return_.find(products, {id: args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})