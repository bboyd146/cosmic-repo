const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Product {
        _id: ID
        title: String!
        quantity: Int
        price: Float
        description: String!
        image: String
        genre: Genre
}
    type Order {
        _id: ID
        purchaseDate: Date
        products: [Product]
}
    type Genre {
        _id: ID
        name: String!
}
    type User {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        orders: [Order]
}
    type Auth {
        token: ID!
        user: User
}

    type Checkout {
    session: ID
}

`


module.exports = typeDefs