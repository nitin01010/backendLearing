require('dotenv').config()
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/routes'));
app.use(require("./model/user"));
app.use(require('./db/dbConnect'));


app.listen(3000, () => {
    console.log('Server is working');
});




