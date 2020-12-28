const express = require('express')
const app = express()
const port = 3100
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors')

//mongodb+srv://admin:<password>@cluster0.qumix.mongodb.net/<dbname>?retryWrites=true&w=majority


//including cors *Cross origin resource sharing*

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });


// parse application
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()) 

//mongoose connect
const myConnectionString = 'mongodb+srv://admin:kealan@cluster0.qumix.mongodb.net/music?retryWrites=true&w=majority'
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

//schema for gigs
var gigSchema = new Schema({
    Name:String,
    Date:String,
    Poster:String
})

var GigModel = mongoose.model("gigs", gigSchema)

//schema for singles
var singleSchema = new Schema({
    singleName:String,
    singleDate:String,
    singlePoster:String,
    Artist:String
})

var SingleModel = mongoose.model("singles", singleSchema)


//gig data
app.get('/gigData', (req, res) => {
    GigModel.find((err, data)=>{
        res.json(data)
    })
})

//single data
app.get('/singleData', (req, res) => {
    SingleModel.find((err, data)=>{
        res.json(data)
    })
})

//retrieves a specific id from gig
app.get('/gigData/:id', (req,res)=>{

    GigModel.findById(req.params.id, (err, data) =>{
        res.json(data)
    })
})

//retrieves a specific id from single
app.get('/singleData/:id', (req,res)=>{

    SingleModel.findById(req.params.id, (err, data) =>{
        res.json(data)
    })
})

//passing up/ editing document
app.put('/gigData/:id', (req, res)=>{
    console.log("Update event: " + req.params.id)
    console.log(req.body)

    GigModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data)
        })

})

//passing up/ editing document
app.put('/singleData/:id', (req, res)=>{
    console.log("Update track: " + req.params.id)
    console.log(req.body)

    SingleModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data)
        })

})

//logs gig data
app.post('/gigData', (req, res) => {
    console.log("Gig received")
    console.log(req.body.Name)
    console.log(req.body.Date)
    console.log(req.body.Poster)

    GigModel.create({
        Name:req.body.Name,
        Date:req.body.Date,
        Poster:req.body.Poster
    })

    res.send('Item received') //important so no duplicates
})

//listen for delete method
app.delete('/gigData/:id', (req,res)=>{
    console.log("Delete gig: "+req.params.id)

    GigModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data)
    })
})

//logs single data
app.post('/singleData', (req, res) => {
    console.log("Single received")
    console.log(req.body.singleName)
    console.log(req.body.singleDate)
    console.log(req.body.singlePoster)
    console.log(req.body.Artist)

    SingleModel.create({
        singleName:req.body.singleName,
        singleDate:req.body.singleDate,
        singlePoster:req.body.singlePoster,
        Artist:req.body.Artist

    })

    res.send('Item received') //important so no duplicates
})

//listen for delete method
app.delete('/singleData/:id', (req,res)=>{
    console.log("Delete single: "+req.params.id)

    SingleModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data)
    })
})

//listening on the port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})