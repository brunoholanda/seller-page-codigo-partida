import React from 'react';
import styled from 'styled-components';
import { CheckCircle } from 'lucide-react';

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
  padding: 15px 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.20);
  border-radius: 15px;

`;

const Item = styled.li`
  margin: 10px 15px;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const Icon = styled(CheckCircle)`
  flex-shrink: 0;
  color: #28a745; // verde de confirmação
  margin-top: 2px;
`;

export default function ForWhoSection() {
  return (
    <Section>
      <Title>Esse curso é pra você que...</Title>
      <List>
        <Item><Icon size={18} />Nunca programou na vida</Item>
        <Item><Icon size={18} />Quer mudar de carreira e entrar em tecnologia</Item>
        <Item><Icon size={18} />Está cansado de cursos teóricos e sem prática</Item>
        <Item><Icon size={18} />Já tentou aprender, mas se sentiu perdido</Item>
        <Item><Icon size={18} />Quer sair do zero e construir seu primeiro site</Item>
        <Item><Icon size={18} />Busca uma formação prática e moderna para o mercado de tecnologia</Item>
        <Item><Icon size={18} />Precisa de ajuda com foco, disciplina e consistência nos estudos</Item>
        <Item><Icon size={18} />Quer aprender com quem já trilhou o caminho e vive de tecnologia</Item>
        <Item><Icon size={18} />Tem interesse em ganhar dinheiro como freelancer na área dev</Item>
        <Item><Icon size={18} />Quer usar inteligência artificial no seu dia a dia como programador</Item>
        <Item><Icon size={18} />Está perdido sobre como montar um portfólio, GitHub e LinkedIn</Item>
      </List>
    </Section>
  );
}
