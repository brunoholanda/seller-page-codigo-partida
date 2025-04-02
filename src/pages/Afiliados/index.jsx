import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  color: #ffffff;
  padding: 2rem 1rem;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #facc15;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #38bdf8;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 0.5rem;
    &:before {
      content: '✅';
      margin-right: 0.5rem;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background-color: #22c55e;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const FooterNote = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #94a3b8;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Afiliados = () => {
  return (
    <Container>
      <Content>
        <Title>Ganhe R$278 por cada venda do curso <strong>Código de Partida</strong></Title>
        <SubTitle>Comissão de 40%. Sem precisar aparecer. Use nossos materiais prontos e receba comissão direto na conta.</SubTitle>

        <SectionTitle>💰 Curso custa R$697 - Você ganha R$278,80 por venda</SectionTitle>
        <p>O <strong>Código de Partida</strong> ensina programação do zero para quem quer migrar de carreira e trabalhar com tecnologia. São mais de 100 aulas com suporte, comunidade e um passo a passo completo.</p>

        <SectionTitle>🚀 Vantagens para você</SectionTitle>
        <List>
          <li>Comissão de 40%</li>
          <li>Materiais prontos para divulgar</li>
          <li>Suporte em grupo de afiliados</li>
          <li>Trabalhe de onde quiser</li>
        </List>

        <SectionTitle>📦 O que você recebe</SectionTitle>
        <p>Acesso a uma pasta com vídeos, imagens e textos prontos. Além disso, você entra num grupo com dicas e suporte direto comigo.</p>

        <SectionTitle>🎯 Quer começar agora?</SectionTitle>
        <p>Clique no botão abaixo, faça o cadastro como afiliado e aguarde aprovação:</p>
        <Button href="https://dashboard.kiwify.com.br/join/affiliate/oo2eJIE5" target="_blank" rel="noopener noreferrer">          Quero ser um afiliado
        </Button>

        <FooterNote>*Dúvidas? Me chama no Instagram: @bruno.programa</FooterNote>
      </Content>
    </Container>
  );
};

export default Afiliados;