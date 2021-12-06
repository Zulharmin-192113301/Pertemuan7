var http = require ('http');
var express = require ('express');
var app = express()

app.get('/users/:userId/books/:bookId', (req,res) =>{
    res.end('req.params')

})




http.createServer(app)
app.listen(8000, () =>{
    console.log('server berjalan di port 8000')
});