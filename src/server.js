const express = require("express")
const server = express()

//pegar o dataBase
const db = require("./database/db") 

server.use(express.static("public"))

//Habilitar req.body
server.use(express.urlencoded({ extended: true }))

const numjucks = require("nunjucks")
numjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

    //console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body: Corpo do formulario
    //console.log(req.body)

    //inserir dados no db

    const body = req.body

    const values = [
        body.image,
        body.name,
        body.address,
        body.address2,
        body.state,
        body.city,
        body.items
    ]

    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `

    function afterInsertData(err){
        if (err){
            console.log(err)
            return res.render("create-point.html", { error: true })
        }

        console.log("Cadastro efetuado")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", { total: 0 })
    }

    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length

        console.log(rows)

        return res.render("search-results.html", { places: rows, total })
    })

})

server.listen(3000)