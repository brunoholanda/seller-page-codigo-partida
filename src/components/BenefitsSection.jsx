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

const BenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media(min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Benefit = styled.div`
  background-color: ${({ theme }) => theme.backgrounds};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  flex: 1;
`;

const Emoji = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const BenefitText = styled.p`
  font-size: 1rem;
`;

export default function BenefitsSection() {
  return (
    <Section>
      <Title>Por que escolher o Código de Partida?</Title>
      <BenefitsWrapper>
        <Benefit>
          <Emoji>🧠</Emoji>
          <BenefitText>+200 aulas práticas, direto ao ponto</BenefitText>
        </Benefit>
        <Benefit>
          <Emoji>⚙️</Emoji>
          <BenefitText>HTML, CSS, JavaScript e React do básico ao avançado</BenefitText>
        </Benefit>
        <Benefit>
          <Emoji>⏰</Emoji>
          <BenefitText>Acesso vitalício e no seu ritmo</BenefitText>
        </Benefit>
        <Benefit>
          <Emoji>🧑‍🤝‍🧑</Emoji>
          <BenefitText>Comunidade ativa para tirar dúvidas e evoluir junto</BenefitText>
        </Benefit>
      </BenefitsWrapper>
    </Section>
  );
}
