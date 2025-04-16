import { useEffect, useState } from 'react';
import api from '../../services/api';
import WeaponCard from '../../components/Cards/WeaponCard/Index'; // Alterar para o componente de armas
import SearchBar from '../../components/SearchBar/Index';
import { Container, Title, Content, WeaponGrid } from './Weapons.styles'; 
import Header from '../../components/Header/Index';

function Weapons() {
  const [weapons, setWeapons] = useState([]); 
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/weapons?limit=308') 
      .then(response => setWeapons(response.data.data)) 
      .catch(error => console.error(error));
  }, []);

  const filteredWeapons = weapons.filter((weapon) =>
    weapon.name.toLowerCase().includes(search.toLowerCase()) 
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Armas</Title>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome..."
        />

        <Content>
          <WeaponGrid> 
            {filteredWeapons.map((weapon) => ( 
              <WeaponCard key={weapon.id} weapon={weapon} /> 
            ))}
          </WeaponGrid>
        </Content>
      </Container>
    </>
  );
}


export default Weapons;