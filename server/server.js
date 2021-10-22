const express = require("express");
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');


const PORT = process.env.PORT || 3006
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true 
// }));



// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
