import { useEffect, useState } from "react"
import "./character.css"

export function Character(){
 
    const[character, setCharacter] = useState([])
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
                        <h3 className="letra">{item.name}</h3>
                        <p className="letra">{item.status} - {item.species} </p>
 
                    </li>
                ))
                }
            </ul>
            </div>
            </>
        );

}