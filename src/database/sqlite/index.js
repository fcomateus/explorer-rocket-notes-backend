const sqlite3 = require("sqlite3");
const sqlite = require("sqlite3");

//biblioteca que lida com o separador
//de caminhos. Por exemplo, no Windows é a /
//no Mac, é outro e no Linux é outro
const path = require("path");

async function sqliteConnection() {
    const database = await sqlite.open({
        //objeto de configuração do sqlite

        //propriedade que diz onde será
        //salvo o arquivo do banco de dados 
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });
    
    return database;
}

module.exports = sqliteConnection;