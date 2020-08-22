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

        app.get("/clients4", (req,res) => {
            console.log('clients4',req.query)  ;
            getData(dbo, 'clients4', req.query).then( data => {
                res.send(data);
            });
            
        });
        
        app.get("/clients3", (req,res) => {
            aggregateData(dbo, 'clients3', req.query).then( data => {
                res.send(data);
            });
            
        });

        app.get("/clients2", (req,res) => {
            console.log(req.query);
            getData(dbo, 'clients2', req.query).then( data => {
                res.send(data);
            });
            
        });

        app.get("/holydays", (req,res) => {
            getData(dbo, 'holydays_dates', req.query).then( data => {
                res.send(data);
            });
        });

        app.get("/regions", (req,res) => {
            getData(dbo, 'regions', req.query).then( data => {
                res.send(data);
            });
        });

        app.get("/report", (req,res) => {
            getData(dbo, 'report_dates', req.query).then( data => {
                res.send(data);
            });
        });

    }
);

function getData(dbo, collectionName , query) {
    var limit = 30;
    var count = 0;
    var find = {};

    if (!!query.limit) {
        limit = +query.limit;
    }

    if (!!query.skip) {
        count = query.skip * limit;
    }

    if (!!query.find) {
        find = JSON.parse(query.find);
    }
    
    return new Promise( (resolve, reject) => {
        resolve( 
            dbo.db('pochtaru').collection(collectionName)
                .find(find).skip(count).limit(limit).toArray()
        );
    });
}

function aggregateData(dbo, collectionName, query) {
    var limit = 5;
    var count = 0;
    var find = {};

    if (!!query.skip) {
        count = query.skip * limit;
    }

    if (!!query.find) {
        find = JSON.parse(query.find);
    }

    return new Promise( (resolve, reject) => {
        resolve( 
            dbo.db('pochtaru').collection(collectionName)
                .aggregate( [ 
                    {
                        $match: find
                    },
                    { 
                        $group : { 
                            "_id": "$hid",
                            count: { $sum: 1 },
                            weight: { $sum : "$weight"},
                            cost: { $sum: "$cost" },
                            Label1: { $avg: "$Label1" } ,
                            Label2: { $avg: "$Label2" } ,
                            Label3: { $avg: "$Label3" } ,
                            Label4: { $avg: "$Label4" } ,
                            Label5: { $avg: "$Label5" } ,
                            
                        } 
                    },
                    { $sort : { count : -1 } }
                ]).skip(count).limit(limit).toArray()
        );
    });
}

