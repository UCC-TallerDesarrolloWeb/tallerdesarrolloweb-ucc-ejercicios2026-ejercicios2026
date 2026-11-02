import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";

const Poke2 = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchallpokemon = async () => {
    try {
      setLoading(true);
      const promises = [];
      for (let i = 1; i <= 20; i++) {
        promises.push(
          fetch(`${BASE_URL}${i}`).then((response) => response.json())
        );
      }
      const data = await Promise.all(promises);
      setPokeData(data);
    } catch (error) {
      console.error("error al realizar el fetch de pokemon", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchallpokemon();
  }, []);

  if (loading) {
    return <h2>Cargando pokemon ..</h2>;
  }

  return (
    <>
      {pokeData.map((pokemon) => (
        <PokeCard pokeData={pokemon} key={pokemon.id} />
      ))}
    </>
  );
};

export default Poke2;
