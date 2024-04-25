const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const quotes = data.quotes;


exports.createQuote = (req, res) => {
    quotes.push(req.body)
    res.json(quotes)
    console.log(req.body)
}

exports.getAllQuotes = (req, res) => {
    res.json(quotes)
}

exports.getSingleQuote = (req, res) => {
    const id =  +req.params.id
    const quote = quotes.find( q => q.id === id ) 
    res.json(quote)
 }

 exports.updateQuote = (req, res) => {
    const id = +req.params.id;
    const quote = quotes.find( q => q.id === id)
    quotes.splice(quote, 1, {...req.body, id})
    res.status(201).json()
}

exports.deleteQuote = (req, res) => {
    const id = +req.params.id;
    const quoteIndex = quotes.findIndex( q => q.id === id )
    //const quote = quotes[quoteIndex]
    quotes.splice(quoteIndex, 1)
    res.status(201).json()
}