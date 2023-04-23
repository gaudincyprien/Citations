import './mescitations.css';
import Listcitation from './Listcitation';
import React, { Component} from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

class Mescitations extends Component {
  state = {
    showPopup: false,
    citations: []
  }

  handlePopupClose = () => {
    this.setState({ showPopup: false });
    const citation = document.querySelector('.formcitation');
    const auteur = document.querySelector('.formauteur');
    const acteur = document.querySelector('.formacteur');
    const personnage = document.querySelector('.formpersonnage');
    const saison = document.querySelector('.formsaison');
    const episode = document.querySelector('.formepisode');
    axios.post('http://localhost:3000/ajoutcitation', {
      citation: citation.value,
      auteur: auteur.value,
      acteur: acteur.value,
      personnage: personnage.value,
      saison: saison.value,
      episode: episode.value
    })
    .then((result)=>{
      console.log("Citation ajoutée")
      this.mesCitations()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handlePopupOpen = () => {
    this.setState({ showPopup: true });
  }

  componentDidMount() {
    this.mesCitations()
  }

  mesCitations() {
    axios.get("http://localhost:3000/citations")
    .then((result)=>{
      this.setState({citations: result.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    const citation = this.state.citations.map((citation) => {
      return <Listcitation citation={citation} />
    })

    return (
      <div>
        <p id='mescitations'>Mes citations</p>
        <div>
            
            <Button id='ajout' variant="primary" onClick={this.handlePopupOpen}>+ Ajout d'une citation</Button>
            <Modal show={this.state.showPopup} onHide={this.handlePopupClose}>
              <Modal.Header>
                <Modal.Title className='pop-uptitre'>Ajouter une nouvelle citation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form id="ajoutcitation">
                  <label htmlFor='formcitation'>Citation</label>
                  <input className='formcitation' type='text' placeholder='Citation'/>
                  <label htmlFor='formauteur'>Auteur</label>
                  <input className='formauteur' type='text' placeholder='Auteur'/>
                  <label htmlFor='formacteur'>Acteur</label>
                  <input className='formacteur' type='text' placeholder='Acteur'/>
                  <label htmlFor='formpersonnage'>Personnage</label>
                  <input className='formpersonnage' type='text' placeholder='Personnage'/>
                  <label htmlFor='formsaison'>Saison</label>
                  <input className='formsaison' type='text' placeholder='Saison'/>
                  <label htmlFor='formepisode'>Episode</label>
                  <input className='formepisode' type='text' placeholder='Episode'/>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button className='pop-upvalider' type='submit' variant="secondary" onClick={this.handlePopupClose}>Valider</Button>
              </Modal.Footer>
            </Modal>
            <input id='rechercher' type='text' placeholder='Recherhcer dans mes citations'/>
        </div>
        <div id='citationss'>
          {citation}
        </div>
      </div>
    );
  }
}
export default Mescitations;