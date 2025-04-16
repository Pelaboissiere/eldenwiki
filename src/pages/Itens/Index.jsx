import { useEffect, useState } from 'react';
import api from '../../services/api';
import ItemCard from '../../components/Cards/ItemCard/Index';
import SearchBar from '../../components/SearchBar/Index';
import Header from '../../components/Header/Index';
import { Container, Title, Content, ItemGrid, SearchBarWrapper } from './Items.styles';

function Items() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/items?limit=500')
      .then(response => setItems(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Itens</Title>

        <SearchBarWrapper>
            
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome..."
        />
        </SearchBarWrapper>

        <Content>
          <ItemGrid>
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </ItemGrid>
        </Content>
      </Container>
    </>
  );
}

export default Items;