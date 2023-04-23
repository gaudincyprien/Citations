const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'citations'
});

// Endpoint pour récupérer une entré aléatoire de la 'citation'
app.get('/citation', function(req, res) {
  connection.query('SELECT * FROM citation', function(error, results, fields) {
    if (error) throw error;
    const random = Math.floor(Math.random() * results.length);
    res.send(results[random]);
  });
});

// Lancement du serveur
app.listen(3000, function() {
  console.log('Serveur démarré sur le port 3000');
});
