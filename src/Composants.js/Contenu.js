import React, { useState } from 'react'
import Enfant from './Enfant'

export default function Contenu() {
    const [compteur, setCompteur] = useState(0);


    return (
        <div>
            <h1>Le Parent</h1>
            <p>{compteur}</p>
            <button onClick={() => setCompteur(compteur + 1)}>Ajoute 1</button>
            <Enfant />
        </div>
    )
}
