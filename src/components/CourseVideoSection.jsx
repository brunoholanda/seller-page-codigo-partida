import React from 'react';
import styled from 'styled-components';

const CourseVideoSection = () => {
  return (
    <SectionContainer>
      <Title>Veja como o curso funciona por dentro</Title>
      <Subtitle>
        Eu, Bruno, gravei esse vídeo pra te mostrar todos os detalhes do curso e como ele vai te ajudar a entrar na área de tecnologia.
      </Subtitle>
      <VideoWrapper>
        <iframe
          src="https://player.vimeo.com/video/1086525074?h=9dbc7ebb97&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
          title="Como o curso funciona"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </SectionContainer>
  );
};

export default CourseVideoSection;

// Styled Components
const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  height: 600px; // altura personalizada
  margin: 0 auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

