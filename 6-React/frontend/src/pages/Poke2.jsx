import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";

const Poke2 = () => {
  const [pokeData, setPokeData] = useState([]);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchpokemon = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();
      setPokeData((prev) => [...prev, data]);
    } catch (error) {
      console.error("error al realizar el fetch de pokemon", error);
    }
  };

  const fetchallpokemon = async () => {
    for (let i = 1; i < 20; i++) {
      fetchpokemon(i);
    }
  };

  useEffect(() => {
    fetchallpokemon();
  }, []);

  if (!pokeData) {
    return <h2>Cargando pokemon ..</h2>;
  }

  return (
    <>
      {pokeData.map((pokemon) => (
        <PokeCard pokeData={pokeData} key={pokemon.id} />
      ))}
    </>
  );
};

export default Poke2;
