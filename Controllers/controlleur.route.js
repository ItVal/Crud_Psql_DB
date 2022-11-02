const pool = require('../DB/db');


//GET (sellect all data)
exports.getAllVehicules = (req, res, next) => {
    const sql = "SELECT * FROM vehicules";
    pool.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).json({message: 'Hey, not found'});
        }else {

            res.send(result.rows);
        }
    })

};

//Get (select one data)
exports.getOneVehicule = (req, res, next) => {
    const id = req.params.id;

    pool.query("SELECT * FROM vehicules WHERE id = $1", [id], (err, vehicule) => {
        if (err) {
            console.log(err);
            res.status(404).json({message: 'Hey, not found'});
        }else {

            res.send(vehicule.rows);
        }
    })

};


//POST (AJOUT)
exports.addVehicule = (req, res, next) => {
    const nom = req.body.nom;
    const marque = req.body.marque;
    const prix = req.body.prix;
    pool.query("INSERT INTO vehicules (nom, marque, prix) VALUES ($1, $2, $3)", [nom, marque, prix], (err, vehicule) => {
        if (err) {
            console.log(err);
            res.status(404).json({message: 'Hey, not found'});
        }else {

            res.send(vehicule.rows);
        }
    })

};

//Put (update)
exports.apdateVehicule = (req, res, next) => {
    const id = req.params.id;
    const nom = req.body.nom;
    const marque = req.body.marque;
    const prix = req.body.prix;

    pool.query("UPDATE vehicules SET nom=$1, marque=$2, prix=$3 WHERE id=$4", [nom, marque, prix, id], (err, vehicule) => {
        if (err) {
            console.log(err);
            res.status(404).json({message: 'Hey, not found'});
        }else {

            res.send(vehicule.rows);
        }
    })

};






