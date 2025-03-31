import React, { useState } from 'react';
import styled from 'styled-components';
import suaFoto from '../assets/bruno.webp';

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media(min-width: 768px) {
    padding: 80px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;

  @media(min-width: 768px) {
    font-size: 2rem;
  }
`;

const Img = styled.img`
  width: 320px;
  height: 410px;
  object-fit: cover;
  opacity: 80%;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};

  @media(min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Toggle = styled.span`
  color: #ff7a00;
  cursor: pointer;
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

export default function MentorSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section>
      <Title>Quem vai ser seu mentor?</Title>
      <Img src={suaFoto} alt="Bruno - Mentor do curso" />
      <Paragraph>
        Bruno Holanda aqui. Produzo conteúdo sobre tecnologia e ensino desde 2013.
        <br /><br />
        Já ajudei pessoas a entrarem na área de TI, inclusive muitas que vieram de áreas completamente diferentes, como saúde, administração e até bancária (minha antiga profissão!).
        {!showMore ? (
          <Toggle onClick={() => setShowMore(true)}>Ler mais...</Toggle>
        ) : (
          <>
            <br /><br />
            Trabalhei por mais de uma década com gestão e tecnologia, e hoje sou desenvolvedor full-stack com projetos rodando em empresas e no setor público. Além disso, sou criador de conteúdo, já dei aulas presenciais, cursos online e hoje dedico parte do meu tempo a ensinar de forma simples e direta.
            <br /><br />
            A missão do <strong>Código de Partida</strong> é mostrar que, com dedicação e orientação certa, qualquer pessoa pode aprender programação — mesmo começando do zero.
            Estou aqui pra te guiar nessa jornada.
            <Toggle onClick={() => setShowMore(false)}>Mostrar menos</Toggle>
          </>
        )}
      </Paragraph>
    </Section>
  );
}
