import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from './components/PokemonCard';
import PokemonModal from './components/PokemonModal';
import useFetchPokemons from './hooks/useFetchPokemons';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  const { pokemons, loading, error } = useFetchPokemons();
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  const sortedPokemons = [...pokemons].sort((a, b) =>
    sortAsc ? a.power - b.power : b.power - a.power
  );

  return (
    <>
      <nav className='text-center' style={{ backgroundColor:'#10141f'}}>
        <h1 className="text-center cyberpunk-title py-3">Poké Tech</h1>
      </nav>
      <div className="container py-5">
       
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
    </>
  );
}
export default App;