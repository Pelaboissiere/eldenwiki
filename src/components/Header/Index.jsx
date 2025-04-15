import { HeaderContainer, Nav, Logo, LogoSpan , NavLink, Title } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <Logo>Elden</Logo>
        <LogoSpan>Wiki</LogoSpan>
      </Title>
      
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/bosses">Bosses</NavLink>
        <NavLink to="/itens">Itens</NavLink>
        <NavLink to="/armas">Armas</NavLink>
        <NavLink to="/encantamentos">Encantamentos</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
