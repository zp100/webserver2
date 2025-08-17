const express = require('express')

const app = express();

app.get('/status', (req, res) => {
    res.send({
        status: 'Hello world!',
    })
})

app.listen(8081);
