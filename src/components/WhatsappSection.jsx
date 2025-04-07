import React from 'react';
import styled from 'styled-components';

const WhatsappSection = () => {
  return (
    <SectionContainer>
      <Title>Ficou com alguma dúvida?</Title>
      <Subtitle>Me chama no WhatsApp que eu te ajudo a decidir se esse curso é pra você 👇</Subtitle>
      <Button href="https://wa.me/5583998150712?text=Oi%20Bruno%2C%20vi%20sua%20página%20do%20curso%20e%20tô%20com%20uma%20dúvida..." target="_blank" rel="noopener noreferrer">
        Falar com Bruno no WhatsApp
      </Button>
    </SectionContainer>
  );
};

export default WhatsappSection;

// Styled Components
const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
  border-radius: 16px;
  margin: 30px 20px;
  text-align: center;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.25);

`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.subText || '#666'};

`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.subText || '#666'};
`;

const Button = styled.a`
  background-color: #25D366;
  color: #fff;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1ebe5d;
  }
`;
