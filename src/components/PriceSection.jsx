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

const CTAButton = styled.a`
  background: white;
  color: #ff7a00;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  display: inline-block;
`;


export default function PriceSection() {
  const whatsappLink = 'https://pay.kiwify.com.br/GAQHdpq';

  return (
    <Section>
      <Title>Comece agora o Código de Partida</Title>
      <Price>De R$797 por R$497 à vista</Price>
      <Installments>ou 12x de R$51,40</Installments>
      <CTAButton href={whatsappLink} target="_blank" rel="noopener noreferrer">
        Quero começar agora
      </CTAButton>
    </Section>
  );
}
