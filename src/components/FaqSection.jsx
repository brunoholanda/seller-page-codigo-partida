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

      <Question title="Por quanto tempo terei acesso ao curso?">
        Acesso vitalício. Você pode ver e rever as aulas sempre que quiser, no seu tempo.
      </Question>

      <Question title="Preciso seguir uma rotina rígida?">
        Não! O curso é feito para se adaptar à sua rotina. Você pode estudar nos horários que forem mais confortáveis pra você.
      </Question>

      <Question title="Tem suporte se eu ficar travado(a)?">
        Sim! Você pode tirar dúvidas na comunidade e com o nosso suporte, estamos aqui pra te ajudar.
      </Question>

      <Question title="Tem aulas práticas ou é só teoria?">
        O curso é 100% focado na prática com exercícios, projetos e desafios reais.
      </Question>

      <Question title="Vai me ajudar a conseguir meu primeiro trabalho?">
        Sim! Além das aulas técnicas, você vai aprender a montar um portfólio, LinkedIn e currículo que realmente chamam atenção de recrutadores e clientes.
      </Question>

      <Question title="Tem garantia?">
        Sim! Você tem 7 dias para testar o curso e, se não curtir, pode pedir reembolso total.
      </Question>
    </Section>
  );
}

