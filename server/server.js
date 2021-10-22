const express = require("express");
const mongoose = require("mongoose");
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

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb://localhost/cosmic',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     }
// );

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
