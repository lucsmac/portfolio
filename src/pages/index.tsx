import Head from 'next/head';
import { useEffect, useRef } from 'react';
import panzoom from 'panzoom';
import {
  Main,
  Content,
  Header,
  Container,
  Row,
  Block,
} from 'styles/pages/Home';

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  function setupPanzoom(el: HTMLElement) {
    panzoom(el, {
      minZoom: 1,
      maxZoom: 1,
    });
  }

  useEffect(() => {
    container.current && setupPanzoom(container.current);
  }, []);

  const imagesMap = [
    [1, 2, 3, 4, 5, 6],
    [3, 4, 5, 6, 1, 2],
    [5, 6, 1, 2, 3, 4],
    [2, 3, 4, 5, 6, 1],
    [4, 5, 6, 1, 2, 3],
  ];

  return (
    <div>
      <Head>
        <title>Home | Lucas Macedo Portfólio</title>
        <meta
          name="description"
          content="Portfólio de desenvolvimento web de Lucas Macedo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Content>
          <Header>Explore os projetos clicando e arrastando</Header>
          <Container ref={container}>
            {imagesMap.map((line, index) => {
              return (
                <Row key={`${index}`}>
                  {line.map(item => {
                    return <Block key={`${index}-${item}`} index={--item} />;
                  })}
                </Row>
              );
            })}
          </Container>
        </Content>
      </Main>
    </div>
  );
}
