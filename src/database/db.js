const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {
//     //criar tabela

//     // db.run(`
//     //         CREATE TABLE IF NOT EXISTS places(
//     //             id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //             image TEXT,
//     //             name TEXT,
//     //             address TEXT,
//     //             address2 TEXT,
//     //             state TEXT,
//     //             city TEXT,
//     //             items TEXT
//     //         );
//     // `)

//     // //inserir dados tabela

//     // const query = `
//     //     INSERT INTO places(
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES(?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1528190336454-13cd56b45b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilerme Gemballa, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eletrônicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }


//     // //funcaoX() -> chama imediatemente.
//     // //funcaoX -> chamara quando necessario CallBack.

//     // db.run(query, values, afterInsertData)

//     // //consultar dados tabela

//     // db.all(`SELECT name FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registros: ")
//     //     console.log(rows)
//     // })

//     // //deletar dados tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
// })
