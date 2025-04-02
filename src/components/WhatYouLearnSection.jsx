import React from 'react';
import styled from 'styled-components';
import { BookOpen, CheckCircle } from 'lucide-react';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Grid = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  gap: 16px;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.backgrounds};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Icon = styled(BookOpen)`
  color: #28a745;
  flex-shrink: 0;
  margin-top: 2px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
`;

export default function WhatYouLearnSection() {
  return (
    <Section>
      <Title>O que você vai aprender</Title>
      <Grid>
        <Item><Icon size={20} /><Text>HTML e CSS do zero</Text></Item>
        <Item><Icon size={20} /><Text>Lógica de programação aplicada</Text></Item>
        <Item><Icon size={20} /><Text>JavaScript moderno com projetos</Text></Item>
        <Item><Icon size={20} /><Text>React com componentes reais</Text></Item>
        <Item><Icon size={20} /><Text>Como programar usando inteligência artificial</Text></Item>
        <Item><Icon size={20} /><Text>Como criar portfólio, LinkedIn e currículo de dev</Text></Item>
        <Item><Icon size={20} /><Text>Como otimizar seu LinkedIn para receber propostas</Text></Item>
        <Item><Icon size={20} /><Text>Como conseguir trabalhos freelancer e faturar</Text></Item>
        <Item><Icon size={20} /><Text>Desafios e projetos para treinar tudo isso</Text></Item>
      </Grid>
    </Section>
  );
}
