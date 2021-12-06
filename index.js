var express = require ('express');
var app = express()

app.get('/', (req,res) =>{
    res.end('konten dari method GET ')

})

app.listen(8000, () =>{
    console.log('server berjalan di port 8000')
});