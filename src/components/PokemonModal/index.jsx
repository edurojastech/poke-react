import './styles.css';
import { Modal } from 'react-bootstrap';

const PokemonModal = ({ pokemon, onClose }) => (
  <Modal show={true} onHide={onClose} centered>
    {/* <Modal.Header closeButton className="bg-light text-dark">
      <Modal.Title>{pokemon.name.toUpperCase()}</Modal.Title>
    </Modal.Header> */}
    <Modal.Body className="text-white cardCustom" style={{border: '6px solid #1f2937'}}>
      <img src={pokemon.image} alt={pokemon.name} className="img-fluid mb-3 d-block mx-auto" width={220}/>
      <h3>
        {pokemon.name.toUpperCase()}
      </h3>
      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Força:</strong> {pokemon.power}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
      <div className="d-flex justify-content-end mt-4">
        <button className='btn' style={{ backgroundColor: '#1f2937', color: '#fff'}} onClick={onClose}>
          Fechar
        </button>
      </div>
    </Modal.Body>
  </Modal>
);

export default PokemonModal;
