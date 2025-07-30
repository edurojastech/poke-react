import { useEffect, useState } from 'react';

const useFetchPokemons = (limit = 20) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
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
              power: detail.base_experience || 0,
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (err) {
        setError('Erro ao buscar Pokémons');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [limit]);

  return { pokemons, loading, error };
};

export default useFetchPokemons;