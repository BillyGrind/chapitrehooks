import React from 'react';
import './Modale.css'

export default function Modale(props) {
    return (
        <div onClick={props.closeFunc} className="overlay">
            <div className="contenu">
                Contenu Modale
<button onClick={props.closeFunc} className="btnClose">Fermer</button>
            </div>
        </div>
    )
}
