var http = require ('http');

http.createServer( (req,res) =>{
    if (req.url == '/home')
        res.write('<p>Tampilkan Halaman Home</p>')
    else if (req.url == '/product')
    res.write('<p>Tampilkan Halaman Product</p>')
    else if (req.url == '/order')
    res.write('<p>Tampilkan Halaman Order</p>')
    else if (req.url == '/')
    res.write('<p>Pengembangan Web Node js latihan 7.2</p>')
    else
    res.write('<h1>404 not found</h1>')
    res.end();
}).listen(8000, () =>{
    console.log('server berjalan di port 8000')
});