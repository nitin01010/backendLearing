require('dotenv').config()
const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/routes'));
app.use(require("./model/user"));
app.use(require('./db/dbConnect'));


app.listen(PORT, () => {
    console.log('Server is working');
});




