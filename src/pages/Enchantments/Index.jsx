import { useEffect, useState } from 'react';
import api from '../../services/api';
import EnchantmentCard from '../../components/Cards/EnchantmentCard/Index';
import SearchBar from '../../components/SearchBar/Index';
import { Container, Title, Content, EnchantmentGrid } from './Enchantments.styles';
import Header from '../../components/Header/Index';

function Enchantments() {
  const [enchantments, setEnchantments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/incantations?limit=100')
      .then(response => setEnchantments(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const filteredEnchantments = enchantments.filter((enchantment) =>
    enchantment.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Encantamentos</Title>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome..."
        />

        <Content>
          <EnchantmentGrid>
            {filteredEnchantments.map((enchantment) => (
              <EnchantmentCard key={enchantment.id} enchantment={enchantment} />
            ))}
          </EnchantmentGrid>
        </Content>
      </Container>
    </>
  );
}

export default Enchantments;
