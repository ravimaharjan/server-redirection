const express = require('express')
const bodyParser = require('body-parser')

app = express()

app.get('/', (req, res) => {
    res.send('Hello World!! DC Babayy..')
    req.headers['someHeader'] = 'someValue'
});
app.get('/helloserver', (req, res) => {
    res.send('Hello World!! DC Babayy..')
    req.headers['someHeader'] = 'someValue'
});


const port = 3000
app.listen(port, () => console.log('Server running...${port'));
