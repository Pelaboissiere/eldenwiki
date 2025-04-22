import { useState } from 'react';
import Modal from '../../Modal/Index';
import { Card, CardName, ImageCard, MoreInfo } from './SorceryCard.styles';

function SorceryCard({ sorcery }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <ImageCard src={sorcery.image} alt={sorcery.name} />
        <CardName>{sorcery.name}</CardName>
        <MoreInfo>Clique para mais informações</MoreInfo>
      </Card>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ImageCard src={sorcery.image} alt={sorcery.name} />
          <h2>{sorcery.name}</h2>
          <p><strong>Custo de FP:</strong> {sorcery.cost}</p>
          <p><strong>Efeito:</strong> {sorcery.effects}</p>
          <p><strong>Descrição:</strong> {sorcery.description || 'Sem descrição'}</p>
        </Modal>
      )}
    </>
  );
}

export default SorceryCard;
