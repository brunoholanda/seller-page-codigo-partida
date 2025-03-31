import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background: #fff;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Question = styled.details`
  margin-bottom: 20px;
  background: #f5f5f5;
  padding: 16px;
  border-radius: 6px;

  summary {
    font-weight: bold;
    cursor: pointer;
  }

  p {
    margin-top: 10px;
    font-size: 0.95rem;
  }
`;

export default function FaqSection() {
  return (
    <Section>
      <Title>Dúvidas Frequentes</Title>

      <Question>
        <summary>Preciso saber algo antes de começar?</summary>
        <p>Não! O curso foi feito para quem está começando do zero.</p>
      </Question>

      <Question>
        <summary>O curso tem certificado?</summary>
        <p>Sim! Você recebe um certificado ao concluir todas as aulas.</p>
      </Question>

      <Question>
        <summary>Posso assistir pelo celular?</summary>
        <p>Sim! Todo o conteúdo é responsivo e acessível por qualquer dispositivo.</p>
      </Question>

      <Question>
        <summary>Como funciona a comunidade?</summary>
        <p>Você receberá um link para o Discord onde poderá tirar dúvidas e interagir com outros alunos.</p>
      </Question>
    </Section>
  );
}
