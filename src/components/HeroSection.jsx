import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/hero_resized.webp';

const Hero = styled.section`
  min-height: 400px;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  padding: 80px 15px;
  color: white;
  text-align: center;
  background-color: #000;

  @media (min-width: 768px) {
    padding: 120px 60px;
    min-height: 600px;
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

const CTAButton = styled.a`
  padding: 12px 20px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 32px;
  }
`;

const StoryBlock = styled.p`
  font-size: .8rem;
  margin: 20px auto;
  max-width: 600px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;


export default function HeroSection() {
  const whatsappLink = `https://pay.kiwify.com.br/GAQHdpq`;

  return (
    <>
      <Hero>
        <Title>Código de Partida</Title>
        <Subtitle>Aprenda programação do zero e mude sua vida com a tecnologia</Subtitle>

        <StoryBlock>
          Você não precisa ser um gênio pra programar.<br />
          O que você precisa é de um passo a passo simples e direto — e alguém que já trilhou o caminho pra te guiar.<br />
        </StoryBlock>

        <CTAButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Quero começar agora
        </CTAButton>
      </Hero>
    </>
  );
}
