import { useState } from 'react';
import { Card, ImageCard, MoreInfo } from './ItemCard.styles';
import Modal from '../../Modal/Index';

function ItemCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <ImageCard src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <MoreInfo>Clique para mais informações</MoreInfo>
      </Card>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ImageCard src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p><strong>Tipo:</strong> {item.type || 'Não especificado'}</p>
          <p><strong>Descrição:</strong> {item.description || 'Sem descrição'}</p>
          <p><strong>Efeito:</strong> {item.effect || 'Nenhum efeito registrado'}</p>
        </Modal>
      )}
    </>
  );
}

export default ItemCard;
