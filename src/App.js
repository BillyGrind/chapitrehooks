import React, { useState, useEffect } from 'react';
import Modale from './Composants/Modale.js';
import NavBar from './Composants/NavBar'
import Compteur from './Composants/Compteur'
import Onglet from './Composants/Onglet'
function App() {

  const [toggleModale, setToggleModale] = useState(false);
  const closeModale = (e) => {
    // console.log(e.target.className)
    if (e.target.className === "contenu") return;
    setToggleModale(false)
  }
  const openModale = () => {
    setToggleModale(true)
  }


  // const [pos, setPos] = useState([0, 0]);
  // const logMousePosition = e => {
  //   console.log(e.clientX, e.clientY);
  //   let arrPos = [];
  //   arrPos[0]=eclientX;
  //   arrPos[1]=eclientY;
  //   setPos(arrPos);
  // }
  // useEffect(() => {

  //   window.addEventListener('mousemove', logMousePosition)
  //   return () => {
  //     window.removeEventListener('mousemove', logMousePosition);
  //   }
  // })


  return (
    <div className="App">
      {/* <NavBar />
      <button onClick={openModale}>Ouvrir la Modale</button>
      {toggleModale ?

        <Modale closeFunc={closeModale} />

        : ''
      }
      <Compteur /> */}
        <Onglet />
      
    </div>
  );
}

export default App;
