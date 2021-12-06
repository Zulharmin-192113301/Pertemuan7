var http = require ('http');
var express = require ('express');
var app = express()

app.get('/', (req,res) =>{
    res.end('<h1>Halaman  Default</h1> ')

})

app.get('/home', (req,res) =>{
    res.end('<h1>Halaman Home</h1> ')

})

app.get('/order', (req,res) =>{
    res.end('<h1>Halaman Order</h1> ')

})



http.createServer(app)
app.listen(8000, () =>{
    console.log('server berjalan di port 8000')
});