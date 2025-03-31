import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/hero.webp'; // use a imagem que você quiser

const Hero = styled.section`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  color: white;
  text-align: center;
  background-color: #000;

  @media (min-width: 768px) {
    padding: 120px 60px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  padding: 12px 20px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 32px;
  }
`;

export default function HeroSection() {
  const whatsappLink = `https://wa.me/5583998150712?text=${encodeURIComponent("quero aprender programação do zero")}`;

  return (
    <Hero>
      <Title>Código de Partida</Title>
      <Subtitle>Aprenda programação do zero e mude sua vida com a tecnologia</Subtitle>
      <CTAButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
        Quero começar agora
      </CTAButton>
    </Hero>
  );
}
