import './citation.css';

export default function Citation() {
  return (
    <div id="citations">
        <div id='citation'>
            <p id='titre'>Citations</p>
            <p id='auteur'>Arthur</p>
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
                <button className='citation'><img src='/yeux.png' alt=''/>Parmi mes citations</button>
                <button className='citation'><img src='/yeux.png' alt=''/>Parmi les citations Kaamlott</button>
            </div>
        </div>
    </div>
  );
}
