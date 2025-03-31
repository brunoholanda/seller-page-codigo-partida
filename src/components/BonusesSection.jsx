import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const BonusList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BonusItem = styled.li`
  background: #f9f9f9;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
`;

export default function BonusesSection() {
  return (
    <Section>
      <Title>Bônus Exclusivos</Title>
      <BonusList>
        <BonusItem>Comunidade ativa no Discord para dúvidas e networking</BonusItem>
        <BonusItem>Templates prontos de currículo e portfólio</BonusItem>
        <BonusItem>Projetos completos para seu GitHub</BonusItem>
        <BonusItem>Lives e mentorias com Bruno (criador do curso)</BonusItem>
      </BonusList>
    </Section>
  );
}
