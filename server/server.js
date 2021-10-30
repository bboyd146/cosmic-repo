const express = require("express");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require('./schema');
const path = require('path');

const PORT = process.env.PORT || 3009
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });

    await server.start();

    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`🌍 Now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
}

app.get("/Inventory", async (req, res) => {
    const PAGE_SIZE = 3;
    const page = parseInt(req.query.page || "0");
    const total = await Product.countDocuments({});
    const products = await Product.find({})
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * page);
    res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        products,
    });
});

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
    startApolloServer();
});
