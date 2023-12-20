const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost', // ou l'adresse IP de votre serveur MySQL
    user: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'nom_de_la_bdd'
});

// Test de la connexion
pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    connection.release();
});

module.exports = pool;
