const pool = require('../DB/db');


//GET
exports.getVehicule = (req, res, next) => {
    const sql = "SELECT * FROM vehicules";
    pool.query(sql, (err, vehicule) => {
        if (err) {
            res.status(404).json({message: 'Hey, not found'});
        }else {

            res.send(vehicule.rows);
        }
    })

};



