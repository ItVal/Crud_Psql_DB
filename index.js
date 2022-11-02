const express = require('express');
const app = express();
const PORT = 7800;

app.get('/', (req, res) => {
    res.send('Hello World');
})





app.listen(PORT, (req, res) => {
    console.log('serveur écoute au port :' + PORT);
})