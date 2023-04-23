import './citation.css';
import React, { Component } from 'react';

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
        fetch('https://kaamelott.chaudie.re/api/random')
        .then((response) => {
            return response.json()
        })
        .then((result)=>{
            this.setState({ citation: result })
        })
    }
    mesCitations() {
        fetch('http://localhost:3000/citation')
        .then((response) => {
            return response.json()
        })
        .then((result)=>{ 
            const resultat = {
                status: 1,
                citation: {
                  citation: result.citation,
                  infos: {
                    auteur: result.auteur,
                    acteur: result.acteur,
                    personnage: result.personnage,
                    saison: result.saison,
                    episode: result.episode,
                  },
                },
              };
            this.setState({ citation: resultat })
        })
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