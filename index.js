const express = require('express');
const app = express();
const PORT = 7800;

const controlleur = require('./Controllers/controlleur.route')
app.use(express.urlencoded({extended:false}));

app.use(express.json());


app.get('/', controlleur.getAllVehicules);
app.get('/:id', controlleur.getOneVehicule);
app.post('/add', controlleur.addVehicule);
app.put('/edit/:id', controlleur.apdateVehicule);





app.listen(PORT, (req, res) => {
    console.log('serveur écoute au port :' + PORT);
})