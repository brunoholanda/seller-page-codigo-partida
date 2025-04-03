import React, { useRef, useState, forwardRef } from 'react';
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

const MoreButton = styled.button`
  margin: 20px auto 0;
  display: block;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.primary || '#ff7a00'};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

function Question({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      setHeight(el.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
        setIsOpen(false);
      });
    } else {
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

const FaqSection = forwardRef((props, ref) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section ref={ref}>
      <Title>Dúvidas Frequentes</Title>

      <Question title="Preciso saber algo antes de começar? ">
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

      {!showMore && (
        <MoreButton onClick={() => setShowMore(true)}>Mais perguntas...</MoreButton>
      )}

      {showMore && (
        <>
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

          <Question title="Esse curso é atualizado com as tecnologias atuais?">
            Sim! Mantemos o conteúdo atualizado para acompanhar o mercado. Você vai aprender ferramentas e práticas que são realmente usadas por empresas e freelancers hoje.
          </Question>

          <Question title="Já tentei aprender antes e não consegui. Esse curso vai funcionar pra mim? ">
            Entendemos isso. O Código de Partida foi pensado exatamente pra quem já tentou e travou. Nosso método é simples, direto e com foco em prática. Você não vai se sentir perdido.
          </Question>

          <Question title="Em quanto tempo vou começar a ver resultado?">
            Vai depender do seu ritmo, mas muitos alunos conseguem montar seu primeiro projeto em menos de uma semana. Com dedicação, você pode ter um portfólio pronto em poucas semanas.
          </Question>
        </>
      )}
    </Section>
  );
});

export default FaqSection;
