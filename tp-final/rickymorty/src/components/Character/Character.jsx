import { useEffect, useState } from "react"
import "./character.css"


export default function Buttonepiso() {
    function handleClick() {
      alert('¡Me hiciste clic!');
    }
    
    return (
      <button onClick={handleClick}>
        Hazme clic
      </button>
    );
  }


export function Character(){
    const[character, setCharacter] = useState([])
    const firtsep = []
    
    character.map((item)=>{
        firtsep.push(item.episode[0])
    })

//    useEffect
   
//useState        
        useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setCharacter(data.results));
        },[setCharacter]);
        return(
            <><div id="content">
                <header><h1 id="titulo">The Rick And Morty API</h1></header>
                
            <ul className="griddy">
                {
                character.map((item, index)=>(
                    <li className="personaje" key={index}>
                        <img className="imggg" src={item.image} alt="" />
                        <div className="hola">
                            <h3 className="letra">{item.name}</h3>
                            {item.status === 'Alive' ?<p className="letra"> 🟢 {item.status} - {item.species} 
                            </p>:<p className="letra"> 🔴 {item.status} - {item.species} </p>}
                            
                            <p className="letraos">Last known location:</p>
                            <p className="letra">{item.origin.name}</p>
                            <p className="letraos">First seen in:</p>
                             <button onClick={function Buttonepiso() {
                            alert('¡Me hiciste clic, estos son los episodios!')
                            console.log(item.episode);
                            }}>boton</button>
                        </div>
                    </li>
                    
                ))
                }
            </ul>
            </div>
            </>
        );

}


