const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Autoriser les requêtes provenant uniquement de "http://localhost:3001"
app.use(cors({
    origin: 'http://localhost:3001',
  }));
  
// Autoriser les requêtes provenant de tous les domaines, mais seulement les méthodes GET et POST
app.use(cors({
    methods: ['GET', 'POST']
  }));

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'citations'
});

// Endpoint pour récupérer une entré aléatoire de la table'citation'
app.get('/citation', function(req, res) {
  connection.query('SELECT * FROM citation', function(error, results, fields) {
        if (error) throw error;
        const random = Math.floor(Math.random() * results.length);
        res.send(results[random]);
  });
});
// Endpoint pour récupérer toutes les entrées de la table 'citation'
app.get('/citations', function(req, res) {
    connection.query('SELECT * FROM citation', function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// Endpoint pour insérer une nouvelle entrée dans la table 'citation'
app.post('/ajoutcitation', function(req, res) {
    connection.query('INSERT INTO citation SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// Lancement du serveur
app.listen(3000, function() {
  console.log('Serveur démarré sur le port 3000');
});
