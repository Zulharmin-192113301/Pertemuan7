var http = require ('http');

http.createServer( (req,res) =>{
    res.write ('<p>Pengembangan App Web dengan NodeJS</p>');
    res.end();
}).listen(8000, () =>{
    console.log('server berjalan di port 8000')
});