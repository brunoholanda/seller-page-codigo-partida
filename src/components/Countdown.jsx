import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const CountdownBar = styled.div`
  background-color: #ff7a00;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 12px;
  flex-wrap: wrap;
`;

const CountdownLabel = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CountdownBox = styled.div`
  background-color: #fff;
  color: #424242;
  padding: 5px 10px;
  border-radius: 10px;
  min-width: 40px;
  text-align: center;
  font-weight: bold;
  margin: 0 5px;
`;

const CountdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TimeValue = styled.div`
  font-size: 1.2rem;
`;

const TimeLabel = styled.div`
  font-size: 0.75rem;
`;


export default function Countdown() {
    const [time, setTime] = useState({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  
    useEffect(() => {
      const updateCountdown = () => {
        const now = new Date();
        const target = new Date();
        target.setHours(23, 50, 0, 0);
  
        if (now > target) {
          target.setDate(target.getDate() + 1);
        }
  
        const diff = target.getTime() - now.getTime();
  
        const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  
        setTime({ days, hours, minutes, seconds });
      };
  
      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <CountdownBar>
        <CountdownLabel>OFERTA DISPONÍVEL ATÉ:</CountdownLabel>
        <CountdownContainer>
          <CountdownBox>
            <TimeValue>{time.days}</TimeValue>
            <TimeLabel>Dias</TimeLabel>
          </CountdownBox>
          <CountdownBox>
            <TimeValue>{time.hours}</TimeValue>
            <TimeLabel>Hrs</TimeLabel>
          </CountdownBox>
          <CountdownBox>
            <TimeValue>{time.minutes}</TimeValue>
            <TimeLabel>Min</TimeLabel>
          </CountdownBox>
          <CountdownBox>
            <TimeValue>{time.seconds}</TimeValue>
            <TimeLabel>Seg</TimeLabel>
          </CountdownBox>
        </CountdownContainer>
      </CountdownBar>
    );
  }