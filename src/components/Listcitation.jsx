import axios from 'axios';
import './listcitation.css';

export default function Listcitation(props) {

    const updatecitation = (index) => {
        console.log(index);
    }

    const deleteCitation = (index) => {
        axios.delete(`http://localhost:3000/supprimercitation/${index}`)
        .then((result)=>{
            console.log("Citation supprimée")
            let divname = `citation${index}`;
            document.getElementById(divname).parentElement.remove();
        })
    }
    const namediv = `citation${props.citation.id}`;
    return (
        <div>
            <div id={namediv} className='listcitation'>
                <p className='listtitrecitation'>{props.citation.citation}</p>
                <img className="listimgListCitationdelete" src='/poubelle.png' alt=''onClick={() => deleteCitation(props.citation.id)}/>
                <img className="listimgListCitationupdate" src='/crayon.png' alt='' onClick={() => updatecitation(props.citation.id)}/>
            </div>
        </div>
    );
} 

