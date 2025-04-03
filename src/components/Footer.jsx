import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.background || '#f2f2f2'};
  color: ${({ theme }) => theme.text || '#333'};
  text-align: center;
  padding: 20px;
  font-size: 0.85rem;
  border-top: 1px solid #ddd;
`;

export default function PageFooter() {
  return (
    <Footer>
      © {new Date().getFullYear()} Holanda Desenvolvimento de Software ME · CNPJ: 50.509.731/0001-35<br />
      Todos os direitos reservados.
    </Footer>
  );
}
