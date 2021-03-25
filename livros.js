var http = require("http")
var server = http.createServer(function(req, res){   //  requisição e resposta

    // res.end("<html><body><p>Livros da Coleção</p><body></html>")
    var genero = req.url

    if(genero == "/literatura"){
        res.end("<html><body><p>Literatura</p></body></html>")
    
    } else if(genero == "/ficcao"){
        res.end("<html><body><p>Ficção</p></body></html>")

    } else if(genero == "/terror"){
        res.end("<html><body><p>Terror</p></body></html>")

    } else if(genero == "/hq"){
        res.end("<html><body><p>HQ</p></body></html>")

    } else {
        res.end("<html><body><p>Livros da Coleção</p></body></html>")
    }
})
         
server.listen(3000)