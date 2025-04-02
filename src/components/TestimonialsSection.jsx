import React from 'react';
import styled from 'styled-components';
import henrique from '../assets/henrique.webp';
import daniela from '../assets/daniela.webp';
import rafael from '../assets/rafael.webp';

const Section = styled.section`
  padding: 40px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TestimonialWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0;
`;

const Stars = styled.div`
  color: #f5a623;
  margin: 4px 0;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.4;
`;

export default function TestimonialsSection() {
  return (
    <Section>
      <Title>O que os alunos estão dizendo</Title>

      <TestimonialWrapper>
        <Avatar src={henrique} alt="Henrique Alves" />
        <Content>
          <Name>Henrique Alves</Name>
          <Stars>★★★★★</Stars>
          <Text>
            O curso é excelente! As aulas são muito bem explicadas e fáceis de acompanhar. Estou muito satisfeito com meu progresso!
          </Text>
        </Content>
      </TestimonialWrapper>

      <TestimonialWrapper>
        <Avatar src={daniela} alt="Daniela Costa" />
        <Content>
          <Name>Daniela Costa</Name>
          <Stars>★★★★★</Stars>
          <Text>
            Esse curso foi um divisor de águas pra mim. Nunca imaginei que aprenderia tanto em tão pouco tempo!
          </Text>
        </Content>
      </TestimonialWrapper>

      <TestimonialWrapper>
        <Avatar src={rafael} alt="Rafael Pereira" />
        <Content>
          <Name>Rafael Pereira</Name>
          <Stars>★★★★★</Stars>
          <Text>
            Recomendo o Código de Partida a todos que querem entrar na área de tecnologia. Vale muito a pena!
          </Text>
        </Content>
      </TestimonialWrapper>
    </Section>
  );
}
