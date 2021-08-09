// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  name: string;
  slug: string;
  nameSplit: string[];
  year: number;
  category: string;
  warning: {
    have: boolean;
    msg: string;
  };
  imgsFolder: string;
  mainImg: string;
  uiImgs: string[];
  tools: string[];
  description: string[];
  siteLink: string;
  codeLink: string;
  next: {
    id: number;
    name: string;
    slug: string;
    img: string;
    nameSplit: string[];
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json([
    {
      id: 1,
      name: 'Portal de meio ambiente',
      slug: 'portal-de-meio-ambiente',
      nameSplit: ['Portal de', 'meio ambiente'],
      year: 2019,
      category: 'Desenvolvimento web / UI design',
      warning: {
        have: false,
        msg: '',
      },
      imgsFolder: 'portal-de-meio-ambiente',
      mainImg: 'portal-de-meio-ambiente.jpg',
      uiImgs: ['ui-1.jpg', 'ui-2.jpg', 'ui-3.jpg'],
      tools: [
        'HTML5',
        'Pré-processadores CSS (SCSS)',
        'Vanilla JavaScript',
        'JQuery',
        'GitHub',
        'Adobe XD',
        'Photoshop',
        'Illustrator',
      ],
      description: [
        'O Portal de Meio Ambiente da UFRN foi desenvolvido com o objetivo de melhorar a comunicação entre a população e a Universidade Federal do Rio Grande do Norte. Pensando nisso, a elaboração da interface se deu com foco na simplicidade, fácil navegação e agradabilidade visual.',
        'Além de toda a parte gráfica, incluindo as ilustrações, desenvolvi todo o código do portal.',
        'Este projeto foi extremamente importante no meu crescimento como profissional, pois me deu a experiência de trabalhar para um público real, com demandas reais, sendo vistorado por um superior.',
      ],
      siteLink: 'http://www.meioambiente.ufrn.br/',
      codeLink: '#',
      next: {
        id: 2,
        name: 'Plenitude consultoria',
        slug: 'plenitude-consultoria',
        img: 'plenitude-consultoria/plenitude.jpg',
        nameSplit: ['Plenitude', 'consultoria'],
      },
    },
    {
      id: 2,
      name: 'Plenitude consultoria',
      slug: 'plenitude-consultoria',
      nameSplit: ['Plenitude', 'consultoria'],
      year: 2020,
      category: 'Desenvolvimento web / UI design',
      warning: {
        have: true,
        msg: '(Em desenvolvimento)',
      },
      imgsFolder: 'plenitude-consultoria',
      mainImg: 'plenitude.jpg',
      uiImgs: ['ui-1.jpg', 'ui-2.jpg', 'ui-3.jpg'],
      tools: [
        'Vuejs',
        'Nuxtjs',
        'Pré-processadores CSS (SCSS)',
        'GitHub',
        'Adobe XD',
        'Photoshop',
      ],
      description: [
        'O site da empresa Plenitude Consultoria foi criado com o objetivo de reunir e expor em um local apropriado as informações sobre os produtos e serviços, criar um canal mais simples de compras para os clientes e melhorar a visibilidade da marca no que diz respeito à autoridade.',
        'Fui o responsável tanto pelo design da interface quanto pelo código. Nesse projeto pude implementar os conhecimentos a cerca de uma das tecnologias mais modernas de desenvolvimento, o VueJS.',
        'Com isso, o aprendizado adquirido durante o processo de construção do site gerou um grande crescimento na minha confiança para trabalhar com frameworks moderno, pois, devido aos problemas encontrados no caminho, me tornei mais familiarizado com o fluxo de trabalho e os problemas que podem aparecer no desenvolvimento web moderno.',
      ],
      siteLink: 'https://plenitudeconsultoria.netlify.app/',
      codeLink: 'https://github.com/lucsmac/plenitude-consultoria',
      next: {
        id: 3,
        slug: 'peridrops',
        name: 'Peridrops',
        img: 'peridrops/peridrops.jpg',
        nameSplit: ['Peridrops', 'Motion'],
      },
    },
    {
      id: 3,
      name: 'Peridrops Motion',
      slug: 'peridrops',
      nameSplit: ['Peridrops', 'Motion'],
      year: 2020,
      category: 'Desenvolvimento web / UI design',
      warning: {
        have: false,
        msg: '',
      },
      imgsFolder: 'peridrops',
      mainImg: 'peridrops.jpg',
      uiImgs: ['ui-1.jpg', 'ui-2.jpg', 'ui-3.jpg'],
      tools: [
        'VueJs',
        'Pré-processadores CSS (SCSS)',
        'GitHub',
        'Adobe XD',
        'Photoshop',
      ],
      description: [
        'O Peridrops é um projeto pessoal criado com o objetivo de ser um portfólio de técnicas para adicionar animações nas interfaces web, e assim, se tornar fonte de aprendizado para outros devs ao mesmo tempo que proporciona um cardápio de recursos em motion para os meus clientes.',
        'Este é um projeto contínuo, portanto, não está finalizado. O propósito por trás dele é ser uma espécie de caderno, onde eu possa criar e experimentar ideias referentes ao desenvolvimento frontend.',
      ],
      siteLink: 'https://peridrops.netlify.app/',
      codeLink: 'https://github.com/lucsmac/peridrops',
      next: {
        id: 1,
        slug: 'portal-de-meio-ambiente',
        name: 'Portal de meio ambiente',
        img: 'portal-de-meio-ambiente/portal-de-meio-ambiente.jpg',
        nameSplit: ['Portal de', 'meio ambiente'],
      },
    },
  ]);
}
