import { useState } from "react";
import { useCharacter } from "./useCharacter";

export const AllCharacters = () => {
    const {getAllCharacters, allCharacters} = useCharacter();//desetructuracion
useEffect(() =>{
    getAllCharacters();
},[]);
}

