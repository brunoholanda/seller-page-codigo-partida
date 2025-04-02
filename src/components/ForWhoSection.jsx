import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 15px;
  font-size: 1rem;
  position: relative;
  padding-left: 24px;

  &::before {
    content: '✔️';
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export default function ForWhoSection() {
  return (
    <Section>
      <Title>Esse curso é pra você que...</Title>
      <List>
        <Item>Nunca programou na vida</Item>
        <Item>Quer mudar de carreira e entrar em tecnologia</Item>
        <Item>Está cansado de cursos teóricos e sem prática</Item>
        <Item>Já tentou aprender, mas se sentiu perdido</Item>
      </List>
    </Section>
  );
}
