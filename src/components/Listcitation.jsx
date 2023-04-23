import axios from 'axios';
import './listcitation.css';
import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import { mesCitations } from './Mescitations';

class Listcitation extends React.Component {
    state = {
        showPopup: false,
    }

    handlePopupClose = () => {
        this.setState({ showPopup: false });
        const citation = document.querySelector('.formcitation');
        const auteur = document.querySelector('.formauteur');
        const acteur = document.querySelector('.formacteur');
        const personnage = document.querySelector('.formpersonnage');
        const saison = document.querySelector('.formsaison');
        const episode = document.querySelector('.formepisode');
        axios.put(`http://localhost:3000/modifiercitation/${this.props.citation.id}`, {
            citation: citation.value,
            auteur: auteur.value,
            acteur: acteur.value,
            personnage: personnage.value,
            saison: saison.value,
            episode: episode.value
            })
            .then((result)=>{
                let id = this.props.citation.id;
                document.getElementById(id).innerHTML = citation.value;
                mesCitations()
            })
            .catch((error) => {
                console.log(error);
            }
        );
      }
    
    handlePopupOpen = () => {
        this.setState({ showPopup: true });
      }

    deleteCitation = (index) => {
        axios.delete(`http://localhost:3000/supprimercitation/${index}`)
        .then((result)=>{
            let divname = `citation${index}`;
            document.getElementById(divname).remove();
        })
    }
    

    render() {
        const namediv = `citation${this.props.citation.id}`;
        return (
            <div id={namediv} className='listcitation'>
                <p id={this.props.citation.id} className='listtitrecitation'>{this.props.citation.citation}</p>
                <img className="listimgListCitationdelete" src='/poubelle.png' alt=''onClick={() => this.deleteCitation(this.props.citation.id)}/>
                <Button className='listbutListCitationupdate' variant="primary" onClick={this.handlePopupOpen}><img src='/crayon.png' alt=''/></Button>
                <Modal show={this.state.showPopup} onHide={this.handlePopupClose}>
                    <Modal.Header>
                        <Modal.Title className='pop-uptitre'>Modifier une nouvelle citation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form id="ajoutcitation">
                                <label htmlFor='formcitation'>Citation</label>
                                <input className='formcitation' type='text' placeholder='Citation' defaultValue={this.props.citation.citation}/>
                                <label htmlFor='formauteur'>Auteur</label>
                                <input className='formauteur' type='text' placeholder='Auteur' defaultValue={this.props.citation.auteur}/>
                                <label htmlFor='formacteur'>Acteur</label>
                                <input className='formacteur' type='text' placeholder='Acteur' defaultValue={this.props.citation.acteur}/>
                                <label htmlFor='formpersonnage'>Personnage</label>
                                <input className='formpersonnage' type='text' placeholder='Personnage' defaultValue={this.props.citation.personnage}/>
                                <label htmlFor='formsaison'>Saison</label>
                                <input className='formsaison' type='text' placeholder='Saison' defaultValue={this.props.citation.saison}/>
                                <label htmlFor='formepisode'>Episode</label>
                                <input className='formepisode' type='text' placeholder='Episode' defaultValue={this.props.citation.episode}/>
                            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='pop-upvalider' type='submit' variant="secondary" onClick={this.handlePopupClose}>Valider</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        );
    }
} 

export default Listcitation;
