const express = require('express')

app = express()

app.get('/helloserver', (res) => {
    res.send('Hello World!! This is DC ..')
});

const port = 3000
app.listen(port, () => console.log(`Server running...${port}`));
