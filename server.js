const express = require('express');
const app = express()
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/main.html`)
})

app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);