const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb').MongoClient;
const axios = require('axios');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

mongodb.connect('mongodb://178.57.218.67', 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    function(err, dbo) {
        if (err) {
            throw err;
        }

        app.listen(PORT, () => {
            console.log('Server has been started')   
        }); 
        
        app.get("/clients", (req,res) => {
            getData(dbo, 'clients', req.query.skip).then( data => {
                res.send(data);
            });
            
        });

        app.get("/clients2", (req,res) => {
            getData(dbo, 'clients2', req.query.skip).then( data => {
                res.send(data);
            });
            
        });

        app.get("/holydays", (req,res) => {
            getData(dbo, 'holydays_dates', req.query.skip).then( data => {
                res.send(data);
            });
        });

        app.get("/regions", (req,res) => {
            getData(dbo, 'regions', req.query.skip).then( data => {
                res.send(data);
            });
        });

        app.get("/report", (req,res) => {
            getData(dbo, 'report_dates', req.query.skip).then( data => {
                res.send(data);
            });
        });

    }
);

function getData(dbo, collectionName , skip) {
    var limit = 30;
    var count = skip ? +skip : 0;
    
    count = count * limit;

    return new Promise( (resolve, reject) => {
        resolve( 
            dbo.db('pochtaru').collection(collectionName)
                .find().skip(count).limit(limit).toArray()
        );
    });
}

