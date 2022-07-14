const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
const colors = require("colors");

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development' || True,
}));

app.listen(port, () => {
  console.clear();
  console.log(colors.yellow(`\nServer is running on port ${port} -> Happy coding!\n`));
});
