import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    margin-top: 300px;

    .spinner {
        width: 48px;
        height: 48px;
        border: 6px solid #cce4ff;
        border-top: 6px solid #007bff;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
    }
`;

export default function Loading() {
  return (
    <Container>
        <div className='spinner'></div>
    </Container>
  )
}
