const fetch = require ('node-fetch')
function moedac(req, res) {
    let url = 'https://economia.awesomeapi.com.br/all/USD-BRL' 
    fetch(url)
    .then( (dado)=> {
        return dado.json()
   
    })
    .then( (rows) => {
        res.json(rows)
    })
    
}
module.exports = {moedac}