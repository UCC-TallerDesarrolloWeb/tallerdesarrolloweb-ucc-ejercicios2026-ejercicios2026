import { useEffect, useState } from "react";
import PokeCard from "@components/PokeCard";

const Poke = () => {
    const [pokeData, setPokeData] = useState(null);
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
    const fetchPokemon = async(id) => {
        try{
            const response = await fetch(`${BASE_URL}${id}`)
            const data = await response.json();
            setPokeData(data);
        }catch(error){
            console.error("Error al realizar el fetch de pokemon"+error)
        }
    }
    useEffect(() => {
        fetchPokemon(25);
    }, []);
    if(!pokeData){
        return (<h2>Cargando pokemon...</h2>)
    }
    return(
        <>
            <PokeCard pokeData={pokeData} />
        </>
    )
}

export default Poke;