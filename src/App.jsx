import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          const detail = await res.json();
          return {
            name: detail.name,
            image: detail.sprites.front_default,
            types: detail.types.map((t) => t.type.name),
            abilities: detail.abilities.map((a) => a.ability.name),
            power: Math.floor(Math.random() * 100) + 1, // valor fictício
          };
        })
      );
      setPokemons(detailedPokemons);
    };
    fetchPokemons();
  }, []);

  const sortedPokemons = [...pokemons].sort((a, b) =>
    sortAsc ? a.power - b.power : b.power - a.power
  );

  return (
    <div className="container py-5">
      <h1 className="text-center cyberpunk-title">Pokédex Tech Cyberpunk</h1>
      <div className="text-center mb-4">
        <button
          className="btn btn-outline-light"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Ordenar por Força: {sortAsc ? 'Crescente' : 'Decrescente'}
        </button>
      </div>
      <div className="row">
        {sortedPokemons.map((pokemon, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <PokemonCard pokemon={pokemon} onClick={() => setSelectedPokemon(pokemon)} />
          </div>
        ))}
      </div>
      {selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </div>
  );
}

export default App;