const fs = require('fs');
const express = require('express');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const quotes = data.quotes;

const server = express();
server.use(express.json())


// CRUD OPERATIONS
// create a new quote object with post - Create C
server.post('/quotes', (req, res) => {
    quotes.push(req.body)
    res.json(quotes)
    console.log(req.body)
})


// read api GET - Read R
server.get('/quotes', (req, res) => {
    res.json(quotes)
})

server.get('/quotes/:id', (req, res) => {
    const id =  +req.params.id
    const quote = quotes.find( q => q.id === id ) 
    res.json(quote)
 })


// update a quote from quotes - Update U
server.put('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quote = quotes.find( q => q.id === id)
    quotes.splice(quote, 1, {...req.body, id})
    res.status(201).json()
})

// delete a quote from quotes - Delete D
server.delete('/quotes/:id', (req, res) => {
    const id = +req.params.id;
    const quoteIndex = quotes.findIndex( q => q.id === id )
    //const quote = quotes[quoteIndex]
    quotes.splice(quoteIndex, 1)
    res.status(201).json()
})

server.listen(8081, () => {
    console.log('Server is running...')
})