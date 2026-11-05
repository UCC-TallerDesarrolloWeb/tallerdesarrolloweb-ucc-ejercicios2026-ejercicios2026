const PokeCard = ({pokeData}) => {
    return(
        <div>
            <img src={pokeData.sprites.front_default} alt={pokeData.name}/>
            <p>Nombre: {pokeData.name}</p>
            <p>ID: #{pokeData.id}</p>
        </div>
    )
}
export default PokeCard;