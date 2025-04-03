import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgImg from '../assets/hero.webp';

// === STYLES ===

const CountdownBar = styled.div`
  background-color: #ff7a00;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
  }
`;

const CountdownLabel = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownBox = styled.div`
  background-color: #fff;
  color: #424242;
  padding: 5px 10px;
  border-radius: 10px;
  min-width: 50px;
  text-align: center;
  font-weight: bold;
  margin: 0 5px;
  flex-shrink: 0;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const TimeValue = styled.div`
  font-size: 1.2rem;
  font-family: monospace;
`;

const TimeLabel = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
`;

const Hero = styled.section`
  position: relative;
  min-height: 400px;
  width: 100%;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 12px;
  color: white;
  text-align: center;
  background-color: #1a1a1a;
  display: grid;
  place-content: center;

  @media (min-width: 768px) {
    padding: 120px 60px;
    min-height: 600px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 auto 30px;
  max-width: 95%;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    max-width: 800px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 auto 20px;
  max-width: 90%;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
    max-width: 600px;
  }
`;

const CTAButton = styled.a`
  padding: 12px 20px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 210px;
  transition: transform 0.2s;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 16px 32px;
  }
`;

const StoryBlock = styled.p`
  font-size: 1rem;
  margin: 30px auto;
  max-width: 600px;
  line-height: 1.6;
  padding: 0 15px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

// === COMPONENT ===

function Countdown() {
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(23, 50, 0, 0);

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target.getTime() - now.getTime();

      const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
    return () => clearInterval(interval);
  }, []);

  return (
    <CountdownBar>
      <CountdownLabel>OFERTA DISPONÍVEL ATÉ:</CountdownLabel>
      <CountdownContainer>
        <CountdownBox>
          <TimeValue>{time.days}</TimeValue>
          <TimeLabel>Dias</TimeLabel>
        </CountdownBox>
        <CountdownBox>
          <TimeValue>{time.hours}</TimeValue>
          <TimeLabel>Hrs</TimeLabel>
        </CountdownBox>
        <CountdownBox>
          <TimeValue>{time.minutes}</TimeValue>
          <TimeLabel>Min</TimeLabel>
        </CountdownBox>
        <CountdownBox>
          <TimeValue>{time.seconds}</TimeValue>
          <TimeLabel>Seg</TimeLabel>
        </CountdownBox>
      </CountdownContainer>
    </CountdownBar>
  );
}

export default function HeroSection() {
  const whatsappLink = `https://pay.kiwify.com.br/GAQHdpq`;

  // Pré-carregar a imagem de fundo
  useEffect(() => {
    const img = new Image();
    img.src = bgImg;
  }, []);

  return (
    <>
      <Countdown />
      <Hero>
        <ContentWrapper>
          <Title>Código de Partida</Title>
          <Subtitle>Aprenda programação do zero e mude sua vida com a tecnologia</Subtitle>

          <StoryBlock>
            Você não precisa ser um gênio pra programar.<br />
            O que você precisa é de um passo a passo simples e direto — e alguém que já trilhou o caminho pra te guiar.
          </StoryBlock>

          <CTAButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Quero começar agora
          </CTAButton>
        </ContentWrapper>
      </Hero>
    </>
  );
}