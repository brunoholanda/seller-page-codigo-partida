import React from 'react';
import styled from 'styled-components';
import erro404 from './404.webp';
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 8rem 8rem 1rem 8rem;
  font-family: var(--fonte-principal);
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  img {
    max-width: 300px;
  }

  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 1.88rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 1em 2em;

    img {
      width: 150px;
    }

    h1 {
      font-size: 1.25rem;
    }
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.primary || '#ff7a00'};
  color: ${({ theme }) => theme.textContrast || '#ffffff'};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || '#e56c00'};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Section>
      <img src={erro404} alt="Imagem da página de erro" />
      <div>
        <h1>Ops... Página não encontrada... Clique em voltar!</h1>
        <p>
          Provavelmente a página que você tentou acessar ainda está em produção. Logo mais, novas funcionalidades ficarão disponíveis...
        </p>
        <StyledButton onClick={() => navigate(-1)}>VOLTAR</StyledButton>
      </div>
    </Section>
  );
}
