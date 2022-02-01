const express = require('express');
const app = express();

require('dotenv').config();



const passwordReset = require("./routes/passwordRest");
const users = required("./routes/users");
const connection = required("./db");




app.use(express.json());


app.use("api/users", users);
app.use("api/password-rest", passwordReset);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listing on port ${port}...`));