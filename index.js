var http = require ('http');
var express = require ('express');
var app = express()
var data = [];


app.get('/data', (req,res) =>{
    res.json(data)

})

app.post('/data', (req,res) =>{
    data.push(Date.now())
    res.json(data)

})



http.createServer(app)
app.listen(8000, () =>{
    console.log('server berjalan di port 8000')
});