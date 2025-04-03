import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #ff7a00;
  color: white;
  padding: 50px 20px;
  text-align: center;
  color: var(--texto-cinza);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Installments = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
  background: white;
  color: #ff7a00;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
`;

export default function PriceSection() {
  const whatsappLink = `https://wa.me/5583998150712?text=${encodeURIComponent("quero aprender programação do zero")}`;

  return (
    <Section>
      <Title>Comece agora o Código de Partida</Title>
      <Price>De R$897 por R$697 à vista</Price>
      <Installments>ou 12x de R$49,75</Installments>
      <CTAButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
        Quero começar agora
      </CTAButton>
    </Section>
  );
}
