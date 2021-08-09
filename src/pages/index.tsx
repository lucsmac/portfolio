import { GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Main,
  Content,
  ProjectsSlide,
  CardWrapper,
  CardTitle,
} from 'styles/pages/Home';
import { Swiper, SwiperSlide } from 'swiper/react';

type IProject = {
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

interface IHomeProps {
  projects: IProject[];
}

export default function Home({ projects }: IHomeProps) {
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
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {projects.map(project => (
              <SwiperSlide key={project.id}>
                <ProjectsSlide>
                  <CardWrapper>
                    <CardTitle>
                      <h2 className="title">{project.nameSplit[0]}</h2>
                    </CardTitle>

                    <div className="card__img">
                      <span className="year">{project.year}</span>
                      <Image
                        src={`/images/sites/${project.slug}/${project.mainImg}`}
                        alt={project.name}
                        width={500}
                        height={300}
                      />
                      <span className="type">{project.category}</span>
                    </div>

                    <CardTitle>
                      <h2 className="title">{project.nameSplit[1]}</h2>
                    </CardTitle>
                  </CardWrapper>
                </ProjectsSlide>
              </SwiperSlide>
            ))}
          </Swiper>
        </Content>
      </Main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<IHomeProps>
> => {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects: IProject[] = await response.json();

  return {
    props: {
      projects,
    },
  };
};
