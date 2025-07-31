import './styles.css';
import { Modal } from 'react-bootstrap';

const PokemonModal = ({ pokemon, onClose }) => (
  <Modal show={true} onHide={onClose} centered>
    <div className="text-white" style={{boxShadow: '0 0 30px rgba(0, 255, 204, 0.2)'}}>
      <div className='cardCustom'>
        <img src={pokemon.image} alt={pokemon.name} className="img-fluid mb-3 d-block mx-auto" width='80%'/>
      </div>
      <div style={{backgroundColor: "#0A2A38"}} className='p-4'>
        <h1>
          {pokemon.name.toUpperCase()}
        </h1>
          <p className='lead'><span>Tipos:</span> {pokemon.types.join(', ')}</p>
          <p className='lead'><span>Força:</span> {pokemon.power}</p>
          <p className='lead'><span>Habilidades:</span> {pokemon.abilities.join(', ')}</p>
          <div className="d-flex justify-content-end mt-4">
          <button className='btn' style={{ backgroundColor: '#124E5A', color: '#fff'}} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  </Modal>
);

export default PokemonModal;
