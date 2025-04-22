import { useState } from 'react';
import Modal from '../../Modal/Index';
import { Card, CardName, ImageCard, MoreInfo } from './EnchantmentCard.styles';

function EnchantmentCard({ enchantment }) {
    console.log(enchantment);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <ImageCard src={enchantment.image} alt={enchantment.name} />
        <CardName>{enchantment.name}</CardName>
        <MoreInfo>Clique para mais informações</MoreInfo>
      </Card>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ImageCard src={enchantment.image} alt={enchantment.name} />
          <h2>{enchantment.name}</h2>
          <p><strong>Efeitos:</strong> {enchantment.effects}</p>
          <p><strong>Tipo:</strong> {enchantment.type}</p>
          <p><strong>Custo em mana:</strong> {enchantment.cost}</p>
          <p><strong>Descrição:</strong> {enchantment.description || 'Sem descrição'}</p>
        </Modal>
      )}
    </>
  );
}

export default EnchantmentCard;
