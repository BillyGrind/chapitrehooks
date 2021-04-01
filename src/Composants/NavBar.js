import React, { useState, useEffect } from 'react'
import './NavBar.css'


export default function NavBar() {

    const [largeur, setLargeur] = useState();
    const [toggleMenu, setToggleMenu] = useState(window.innnerWidth);
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }


        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    })

    return (
        <div>
            <nav>
                {(largeur > 500 || toggleMenu) && (
                    <div className="liste">
                        <div className="items">Accueil</div>
                        <div className="items">Services </div>
                        <div className="items">Contact</div>
                    </div>
                )}

            </nav>
            <div onClick={toggleNavSmallScreen} className='btn'>BTN</div>
        </div>
    )
}
