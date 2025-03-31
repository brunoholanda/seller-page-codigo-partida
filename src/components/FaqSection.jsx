import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.backgroundt};
  padding: 16px;
  border-radius: 6px;
`;

const Summary = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
`;

function Question({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      // Fechar
      setHeight(el.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
        setIsOpen(false);
      });
    } else {
      // Abrir: Ajuste para garantir que o scrollHeight seja atualizado
      setHeight(el.scrollHeight);
      setIsOpen(true);
    }
  };

  return (
    <QuestionWrapper>
      <Summary onClick={toggle}>
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </Summary>
      <Answer style={{ height: isOpen ? `${height}px` : '0px' }}>
        <div ref={contentRef} style={{ overflow: 'hidden' }}>
          <p style={{ marginTop: 10, fontSize: '0.85rem' }}>{children}</p>
        </div>
      </Answer>
    </QuestionWrapper>
  );
}

export default function FaqSection() {
  return (
    <Section>
      <Title>Dúvidas Frequentes</Title>
      <Question title="Preciso saber algo antes de começar?">
        Não! O curso foi feito para quem está começando do zero.
      </Question>
      <Question title="O curso tem certificado?">
        Sim! Você recebe um certificado ao concluir todas as aulas.
      </Question>
      <Question title="Posso assistir pelo celular?">
        Sim! Porém você precisa praticar e para isso é necessário um computador.
      </Question>
      <Question title="Preciso de um computador potente?">
        Não, você pode usar qualquer computador, com qualquer configuração que vai ser possível assistir às aulas e praticar o aprendizado.
      </Question>
      <Question title="Como funciona a comunidade?">
        Você receberá um link para o Discord onde poderá tirar dúvidas e interagir com outros alunos.
      </Question>
    </Section>
  );
}
