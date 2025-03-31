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

const Testimonial = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

export default function TestimonialsSection() {
  return (
    <Section>
      <Title>Veja o que dizem os alunos</Title>

      <Testimonial>
        “Achei que nunca conseguiria aprender programação. Mas esse curso me deu direção e motivação.”
        <Name>— Juliana F.</Name>
      </Testimonial>

      <Testimonial>
        “O Código de Partida me ajudou a sair de um emprego que eu odiava e entrar em tech. Gratidão define!”
        <Name>— Rafael P.</Name>
      </Testimonial>

      <Testimonial>
        “A forma como o conteúdo é passado é simples, prática e direta. Vale cada centavo.”
        <Name>— Henrique A.</Name>
      </Testimonial>
    </Section>
  );
}
