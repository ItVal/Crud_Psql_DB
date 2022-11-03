const express = require('express');
const app = express();
const PORT = 7800;

const controlleur = require('./Controllers/controlleur.route')

app.use(express.json());

app.get('/', controlleur.getVehicule);



app.listen(PORT, (req, res) => {
    console.log('serveur écoute au port :' + PORT);
})