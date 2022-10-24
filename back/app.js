const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config/server');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const  PORT = 3001;

app.get('/test', function(req, res) {
    res.json('response : ok');
}
);

// connexion à MongoDB
mongoose.connect(config.DB_URI, async (err) => {
    if (err) {
            console.log(err);
    } else {
        console.log('Connected to MongoDB : ✅');
    }
});

app.listen(PORT, function(){
    console.log("Node Js Server running on port " + PORT 
     + " : ✅");
})
