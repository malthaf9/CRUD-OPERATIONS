const express = require('express');
const server = express();

const router = require('./routes/quotesRouter')

// middlewares
server.use(express.json())
server.use('/api', router.quoteRouter) // we have to write middleware to work routers and we have to use '/' to work routes

server.listen(8081, () => {
    console.log('Server is running...')
})