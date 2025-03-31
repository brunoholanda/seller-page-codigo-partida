import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/hero-bg.png'; // use a imagem que você quiser

const Hero = styled.section`
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
  padding: 12px 20px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
`;

export default function HeroSection() {
  return (
    <Hero>
      <Title>Código de Partida</Title>
      <Subtitle>Aprenda programação do zero e mude sua vida com a tecnologia</Subtitle>
      <CTAButton>Quero começar agora</CTAButton>
    </Hero>
  );
}
