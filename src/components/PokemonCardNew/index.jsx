const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card border-0 shadow rounded-4" style={{ width: '18rem' }}>
      <div className="position-relative text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
        <span className="badge bg-dark position-absolute top-0 end-0 m-2 rounded-circle px-3 py-2">
          0
        </span>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="card-img-top w-75"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className="card-body bg-light rounded-bottom-4 text-center">
        <h5 className="card-title fw-bold text-capitalize d-flex justify-content-center align-items-center gap-2">
          {pokemon.name}
          <span className="badge bg-secondary">{pokemon.types[0]}</span>
        </h5>
        <p className="card-subtitle text-muted mb-3">Seed Pokémon</p>

        <div className="d-flex justify-content-around mb-2 text-center">
          <div>
            <div className="fw-bold">HP</div>
            <div>{pokemon.hp}</div>
          </div>
          <div>
            <div className="fw-bold">Power</div>
            <div>{pokemon.power}</div>
          </div>
          <div>
            <div className="fw-bold">Height</div>
            <div>{pokemon.height}</div>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {pokemon.types.map((type, index) => (
            <span key={index} className="badge bg-dark-subtle text-dark border">
              {type}
            </span>
          ))}
        </div>

        <div className="mt-3 text-start">
          <strong>Habilidades:</strong>
          <ul className="mb-0">
            {pokemon.abilities.map((ab, i) => (
              <li key={i} className="text-capitalize">{ab}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
