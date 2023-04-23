import './citation.css';
import React, { Component } from 'react';
import axios from 'axios';

class Citation extends  Component {
    state = {
        citation: {
            "status": 1,
            "citation": {
                "citation": "Ah tiens, demain midi y a des côtes de porc.",
                "infos": {
                    "auteur": "Alexandre Astier",
                    "acteur": "Vanessa Guedj",
                    "personnage": "Angharad",
                    "saison": "Pilote",
                    "episode": "Le Duel"
                }
            }
        }
    }
    componentDidMount() {
        this.citationKaamelott()
    }
    citationKaamelott() {
        axios.get('https://kaamelott.chaudie.re/api/random')
        .then((response) => {
            this.setState({ citation: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    mesCitations() {
        axios.get('http://localhost:3000/citation')
        .then((result)=>{ 
            const resultat = {
                status: result.data,
                citation: {
                  citation: result.data.citation,
                  infos: {
                    auteur: result.data.auteur,
                    acteur: result.data.acteur,
                    personnage: result.data.personnage,
                    saison: result.data.saison,
                    episode: result.data.episode,
                  },
                },
              };
            this.setState({ citation: resultat })
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div id="citations">
                <div id='citation'>
                    <p id='titre'>"{this.state.citation.citation.citation}"</p>
                    <p id='auteur'>{this.state.citation.citation.infos.personnage} - {this.state.citation.citation.infos.episode}</p>
                    <div id='favoris'>
                        <img id='favorisimage'src='/favoris.png' alt=''/>
                        <p id='favoristext'>Mettre en favoris</p>
                    </div>
                </div>
                <div id='nouvellecitations'>
                    <div>
                        <p id='autrecitation'>Afficher une autre citation</p>
                    </div>
                    <div>
                        <button className='citation' onClick={() => this.mesCitations()}><img src='/yeux.png' alt=''/>Parmi mes citations</button>
                        <button className='citation' onClick={() => this.citationKaamelott()}><img src='/yeux.png' alt=''/>Parmi les citations Kaamlott</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Citation;