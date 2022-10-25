const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = mongoose.connection;
const config = require('./config/server');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var ObjectId = require('mongodb').ObjectId;
const cors = require("cors");

const  PORT = 3001;

app.get('/test', function(req, res) {
    res.json('response : ok');
}
);

app.use(cors());
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// connexion à MongoDB

mongoose.connect(config.DB_URI, async (err) => {
    if (err) {
            console.log(err);
    } else {
        console.log('Connected to MongoDB : ✅');
    }
});





app.get('/api/getchambres', function(req, res) {
    // from collection chambres
    db.collection('chambres').find().toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    }
    );
}
);

// Additionne le nombre de lits de toutes les chambres
app.get('/api/bedsavailable/:place', function(req, res) {
    db.collection(req.params.place).aggregate([
        { $group: { _id: null, total: { $sum: "$lits" } } }
    ]).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
    }
    );
});

// fetch photos from chambre
app.get('/api/getphotos/:id', function(req, res) {
    db.collection('chambres').find({ _id: ObjectId(req.params.id) }).toArray(function(err, result) {
        if (err) throw err;
        // show only the array photos
        res.json(result[0].photos);
    }
    );
});

app.listen(PORT, function(){
    console.log("Node Js Server running on port " + PORT 
     + " : ✅");
})
