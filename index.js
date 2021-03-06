const express = require('express');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config();
const booksRoute = require('./routes/books.js');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/books', booksRoute);

//connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log("Connected to mongodb atlas");
}).catch(error => {
    console.log("Something wrong happened", error);
})

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT , () => { 
    console.log('Server running on port : ', PORT);
})