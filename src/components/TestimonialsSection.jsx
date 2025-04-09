import React from 'react';
import styled from 'styled-components';
import henrique from '../assets/henrique.webp';
import daniela from '../assets/daniela.webp';
import rafael from '../assets/rafael.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Section = styled.section`
  padding: 40px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const TestimonialCard = styled.div`
  display: flex !important;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
`;

const Stars = styled.div`
  color: #f5a623;
  margin: 4px 0;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.4;
  font-size: 14px;
`;

const testimonials = [
  {
    name: 'Henrique Alves',
    image: henrique,
    rating: 5,
    text: 'Antes do curso, eu não sabia nada de programação. Hoje consigo desenvolver páginas completas e até ajudo amigos com projetos! Foi um divisor de águas na minha vida.'
  },
  {
    name: 'Daniela Costa',
    image: daniela,
    rating: 5,
    text: 'Sempre achei que tecnologia não era pra mim, mas o curso me provou o contrário. As aulas são didáticas, e o suporte é incrível. Em poucas semanas, já consegui meu primeiro freelinha!'
  },
  {
    name: 'Rafael Pereira',
    image: rafael,
    rating: 5,
    text: 'O Código de Partida me deu clareza e direção. Não só aprendi programação, mas também como montar meu portfólio e buscar clientes. Hoje, trabalho remotamente para uma empresa de fora!'
  }
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Section>
      <Title>O que os alunos estão dizendo</Title>
      <Slider {...settings}>
        {testimonials.map(({ name, image, rating, text }) => (
          <TestimonialCard key={name}>
            <Avatar src={image} alt={name} loading="lazy" />
            <Content>
              <Name>{name}</Name>
              <Stars>{'★'.repeat(rating)}</Stars>
              <Text>{text}</Text>
            </Content>
          </TestimonialCard>
        ))}
      </Slider>
    </Section>
  );
}