import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.li`
  background-color: ${({ theme }) => theme.backgrounds};
    padding: 16px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  font-size: 1rem;
`;

export default function WhatYouLearnSection() {
  return (
    <Section>
      <Title>O que você vai aprender</Title>
      <List>
        <Item>HTML e CSS do zero</Item>
        <Item>Lógica de programação aplicada</Item>
        <Item>JavaScript moderno com projetos</Item>
        <Item>React com componentes reais</Item>
        <Item>Como programar usando inteligencia artificial</Item>
        <Item>Como criar portfólio, LinkedIn e currículo de dev</Item>
        <Item>Como otimizar seu linkedin para receber propostas</Item>
        <Item>Como conseguir trabalhos freelancer e faturar</Item>
        <Item>Desafios e projetos para treinar tudo isso</Item>
      </List>
    </Section>
  );
}
