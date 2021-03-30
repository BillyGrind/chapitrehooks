import React, {useState}from 'react'

export default function Contenu() {
   
   const [monState, setMonstate] = useState();
   const changeState = () => {
       setMonstate(5);
   }
    return (
        <div>
            <button onClick={changeState}>CLique Moi</button>
            <p>{monState}</p>
        </div>
    )
}
