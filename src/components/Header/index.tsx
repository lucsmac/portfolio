import React from 'react';
import { Container, Content, Nav } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Nav>
          <li>Início</li>
          <li>Sobre</li>
        </Nav>
      </Content>
    </Container>
  );
}

export { Header };
