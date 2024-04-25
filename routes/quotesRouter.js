const express = require('express');
const quoteController = require('../controllers/quotes')
const quoteRouter = express.Router();

// CRUD OPERATIONS
// create a new quote object with post - Create C
quoteRouter.post('/quotes', quoteController.createQuote)

// read api GET - Read R
quoteRouter.get('/quotes', quoteController.getAllQuotes)

quoteRouter.get('/quotes/:id', quoteController.getSingleQuote)

// update a quote from quotes - Update U
quoteRouter.put('/quotes/:id', quoteController.updateQuote)

// delete a quote from quotes - Delete D
quoteRouter.delete('/quotes/:id', quoteController.deleteQuote)


exports.quoteRouter = quoteRouter
