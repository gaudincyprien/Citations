## Ajouter une extension Chrome

afin de pourvoir faire des requestes vers les API, il faut installer l'extensions suivante Allow CORS disponible sur google Chrome avec le lien suivant : 

[https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=fr)

## Lancement du projet

Une fois le depot GIT cloner, se rendre dans le dossier citations et executer la commande suivante : 

### `npm install`

Cette commande permet d'installer toutes les dépandances du projet. 
Ensuite il faut lancer le serveur de base de données qui se trouve dans le dossier backend, pour cela il faut exécuter la commande suivante : 

### `node backend/index.js`

Cette commande permet de lancer la création de la base de données ainsi que l'API. 
Il faut attendre que la console affiche "Serveur démarré sur le port 3000"
Ensuite on peut lancer l'application react depuis un autre terminal avec la commande suivante : 

### `npm start`

La console nous demande nous indique que le port 3000 est déjà utilisé. Il vous appuyé sur la touche y pour lancer l'application se lance sur le port 3001. 
Ouvrir [http://localhost:3001](http://localhost:3001) afin de visualiser l'application
