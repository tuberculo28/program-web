import { useState } from "react";

export function useCharacter(){
    const [allCharacters, setAllCharacters] = useState([]);
    const getAllCharacters = () => {
        //fetch de una perticion a un servidor por datos
        const data =  fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())//json es un tipo de dato
        .then((data) => setAllCharacters(data.results));
        return data;
    }
    return{
        getAllCharacters,
        allCharacters,
    };
}


