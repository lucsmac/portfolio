import styled from 'styled-components';

interface IBlock {
  index: number;
}

const images = ['one', 'two', 'three', 'four', 'five', 'six'];

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1190px;
  width: 80%;
  height: 80vh;
  overflow: hidden;
  box-shadow: inset 0 0 100px black;
`;

export const Header = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  color: white;
  letter-spacing: 3px;
  z-index: 5;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 0.7rem;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 200%;
  height: 200%;

  @media screen and (max-width: 768px) {
    width: 750%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 64px 0;
`;

export const Block = styled.div<IBlock>`
  width: 500px;
  height: 400px;
  background: grey;
  margin: 16px;
  filter: grayscale(1);
  opacity: 0.4;
  transition: 1s;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  background-image: url(${props => '/images/' + images[props.index] + '.jpg'});

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
`;
