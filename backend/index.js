const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const { Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('citations', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // ou un autre dialecte de base de données
  logging: false // désactiver les messages de journalisation SQL
});

class Citation extends Model {}
Citation.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  citation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  acteur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  personnage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  saison: {
    type: DataTypes.STRING,
    allowNull: false
  },
  episode: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'citation'
});

sequelize.sync()
  .then(() => {
    console.log('Tables créées avec succès.');
  })
  .catch((erreur) => {
    console.error('Erreur lors de la création des tables :', erreur);
  });

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
    methods: ['GET', 'POST', 'PUT', 'DELETE']
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
  connection.query('SELECT * FROM citations', function(error, results, fields) {
        if (error) throw error;
        const random = Math.floor(Math.random() * results.length);
        res.send(results[random]);
  });
});
// Endpoint pour récupérer toutes les entrées de la table 'citation'
app.get('/citations', function(req, res) {
    connection.query('SELECT * FROM citations', function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// Endpoint pour insérer une nouvelle entrée dans la table 'citation'
app.post('/ajoutcitation', function(req, res) {
    connection.query('INSERT INTO citations SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// Endpoint pour supprimer une entrée de la table 'citation'
app.delete('/supprimercitation/:id', function(req, res) {
    connection.query('DELETE FROM citations WHERE id = ?', req.params.id, function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// Endpoint pour modifier une entrée de la table 'citation'
app.put('/modifiercitation/:id', function(req, res) {
    connection.query('UPDATE citations SET ? WHERE id = ?', [req.body, req.params.id], function(error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// Lancement du serveur
setTimeout(function() {
    app.listen(3000, function() {
      console.log('Serveur démarré sur le port 3000');
    });
  }, 5000);