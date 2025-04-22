import { useState } from 'react';
import Modal from '../../Modal/Index';
import { Card, CardName, ImageCard, MoreInfo } from './BossCard.styles';
import { BossImage } from '../../../pages/Home/Home.styles';

function BossCard({ boss }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <BossImage src={boss.image} alt={boss.name} />
        <CardName>{boss.name}</CardName>
        <MoreInfo>Clique para mais informações</MoreInfo>
      </Card>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ImageCard src={boss.image} alt={boss.name} />
          <h2>{boss.name}</h2>
          <p><strong>Localização:</strong> {boss.location}</p>
          <p><strong>Recompensas:</strong> {boss.drops}</p>
          <p><strong>Descrição:</strong> {boss.description || 'Sem descrição'}</p>
        </Modal>
      )}
    </>
  );
}

export default BossCard;
