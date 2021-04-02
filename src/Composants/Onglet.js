import React, { useState } from 'react'
import './Onglet.css'

export default function Onglet() {

    const [toggleState, setToggleState] = useState(1);

    const goFr = () => {
        setToggleState(1);
    }
    const goEn = () => {
        setToggleState(2);
    }


    return (
        <div>
            <div className="contBtn">
                <div onClick={goFr} 
                className={`onglets ${toggleState === 1 ? "active" : ""}`}>Francais</div>
                <div onClick={goEn} 
                className={`onglets ${toggleState === 2 ? "active" : ""}`}>Anglais</div>
            </div>
            <div className="container">
                {toggleState === 1 ? <p className="contenu fr"> FR Quis deserunt Lorem ut do nostrud ad consectetur fugiat excepteur culpa velit. Culpa sint eiusmod amet fugiat. Labore dolor amet nisi nostrud sint veniam qui sit ipsum sunt ex quis non.</p>
                    : <p className="contenu en"> EN Quis deserunt Lorem ut do nostrud ad consectetur fugiat excepteur culpa velit. Culpa sint eiusmod amet fugiat. Labore dolor amet nisi nostrud sint veniam qui sit ipsum sunt ex quis non.</p>
                }


            </div>
        </div>
    )
}
