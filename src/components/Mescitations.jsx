import './mescitations.css';
import Listcitation from './Listcitation';

export default function Mescitations() {
  return (
    <div>
        <p id='mescitations'>Mes citations</p>
        <div>
            <button id='ajout'>+ Ajout d'un citation</button>
            <input id='rechercher' type='text' placeholder='Recherhcer dans mes citations'/>
        </div>
        <div className='citationss'>
            <Listcitation/>
        </div>
    </div>
  );
}