const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require("cors")
const PORT = process.env.PORT || 5000;
app.use(cors());

// connecting to MongoDb database
mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(data => {
    console.log("MongoDB Connected")
})



require('./models/post');

app.use(express.json());
app.use(require('./routes/post'))

// Server connection
app.listen(PORT,()=>console.log(`Server is connected on PORT: ${PORT}`))