import { useState } from 'react';
import Modal from '../../Modal/Index';
import { Card, CardName, ImageCard, MoreInfo } from './WeaponCard.styles'; 
import { BossImage } from '../../../pages/Home/Home.styles'; 

function WeaponCard({ weapon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card onClick={() => setIsOpen(true)}>
        <BossImage src={weapon.image} alt={weapon.name} />
        <CardName>{weapon.name}</CardName> 
        <MoreInfo>Clique para mais informações</MoreInfo>
      </Card>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ImageCard src={weapon.image} alt={weapon.name} /> 
          <h2>{weapon.name}</h2> 
          <p><strong>Tipo:</strong> {weapon.type || 'Sem tipo'} </p> 
          <p><strong>Descrição:</strong> {weapon.description || 'Sem descrição'}</p>
          <p><strong>Infusão:</strong> {weapon.infusion || 'Sem infusão'}</p> 
        </Modal>
      )}
    </>
  );
}

export default WeaponCard;