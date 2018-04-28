const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const recentSearches = []

app.use(bodyParser.json());

app.post('/api/places', (req, res) => {
    if (recentSearches.length > 2 ){
        recentSearches.shift()
    }
    recentSearches.push(req.body)
    res.sendStatus(200)
})

app.get('/api/places', (req, res)=> {
    res.send(recentSearches)
})

const port = 3001
app.listen(port, ()=>{console.log('server is running')})

