import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PokemonModal = ({ pokemon, onClose }) => (
  <Modal show={true} onHide={onClose} centered>
    <Modal.Header closeButton className="bg-dark text-light">
      <Modal.Title>{pokemon.name.toUpperCase()}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="bg-dark text-light">
      <img src={pokemon.image} alt={pokemon.name} className="img-fluid mb-3 d-block mx-auto" />
      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Força:</strong> {pokemon.power}</p>
      <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
    </Modal.Body>
    <Modal.Footer className="bg-dark">
      <Button variant="outline-light" onClick={onClose}>
        Fechar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default PokemonModal;
