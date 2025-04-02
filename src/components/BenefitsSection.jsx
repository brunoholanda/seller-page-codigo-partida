import React from 'react';
import styled from 'styled-components';
import {
  BadgePlus,
  Code2,
  Users,
  Repeat,
  Briefcase,
  BrainCircuit,
  Rocket,
  Bot
} from 'lucide-react';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: 600px) {
    padding: 10px;
    border-radius: 10px;
    width: 360px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.25);

  }
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.icon || theme.text};
`;

const TextGroup = styled.div``;

const BoldText = styled.p`
  font-weight: bold;
  margin: 0;
`;

const SubText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.subText || '#666'};
`;

export default function BenefitsSection() {
  return (
    <Section>
      <Title>Por que escolher o Código de Partida?</Title>
      <BenefitsGrid>
        <BenefitItem>
          <IconWrapper><BadgePlus size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>+200 aulas práticas</BoldText>
            <SubText>do básico ao avançado</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Code2 size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Aprenda</BoldText>
            <SubText>HTML, CSS, JavaScript e React</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Users size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Acesso vitalício</BoldText>
            <SubText>e comunidade ativa</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Repeat size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Curso focado</BoldText>
            <SubText>em prática, desafios e projetos reais</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Briefcase size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Carreira Dev</BoldText>
            <SubText>LinkedIn, GitHub, portfólio e currículo</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Rocket size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Freelancer</BoldText>
            <SubText>como conseguir clientes na prática</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><Bot size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Programação com IA</BoldText>
            <SubText>use o ChatGPT no dia a dia dev</SubText>
          </TextGroup>
        </BenefitItem>

        <BenefitItem>
          <IconWrapper><BrainCircuit size={24} /></IconWrapper>
          <TextGroup>
            <BoldText>Motivação e Disciplina</BoldText>
            <SubText>organização para manter o foco</SubText>
          </TextGroup>
        </BenefitItem>
      </BenefitsGrid>
    </Section>
  );
}
