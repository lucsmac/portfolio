import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

export const Content = styled.div`
  max-width: 1190px;
  width: 80%;
  padding: 2rem 0;

  color: var(--text-title);
`;

export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
  justify-content: start;
`;
