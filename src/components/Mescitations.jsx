import './mescitations.css';
import Listcitation from './Listcitation';
import React, { Component } from 'react';
import axios from 'axios';

class Mescitations extends Component {
  state = {
    citations: []
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
            <button id='ajout'>+ Ajout d'un citation</button>
            <input id='rechercher' type='text' placeholder='Recherhcer dans mes citations'/>
        </div>
        <div className='citationss'>
          {citation}
        </div>
      </div>
    );
  }
}

export default Mescitations;