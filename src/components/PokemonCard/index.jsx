import './styles.css';

const PokemonCard = ({ pokemon, onClick }) => (
  <div className="card pokemon-card cyberpunk-card" onClick={onClick}>
    <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
    <div className="card-body text-center">
      <h5 className="card-title text-uppercase">{pokemon.name}</h5>
      <p className="card-text">Força: {pokemon.power}</p>
    </div>
  </div>
);

export default PokemonCard;
