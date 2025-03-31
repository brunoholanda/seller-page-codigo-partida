import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 1rem;
`;

export default function GuaranteeSection() {
  return (
    <Section>
      <Title>Garantia de 7 dias</Title>
      <Text>Se não gostar do curso, devolvemos 100% do seu dinheiro. Simples assim.</Text>
    </Section>
  );
}
