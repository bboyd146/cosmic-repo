const express = require("express");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require('./schema');
const path = require('path');

const PORT = process.env.PORT || 3010
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


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    startApolloServer();
});
