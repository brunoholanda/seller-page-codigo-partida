import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popup = styled.div`
  position: relative;
  background: ${({ theme }) => theme.background || '#fff'};
  color: ${({ theme }) => theme.text || '#111'};
  border-radius: 8px;
  padding: 42px 22px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.text || '#111'};
`;

const Subtitle = styled.p`
  font-size: .8rem;
  margin-bottom: 20px;
`;

const Coupon = styled.div`
  background:#000;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  user-select: none;
`;

const Timer = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.alert || '#d32f2f'};
  font-weight: bold;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary || '#111'};
  color: ${({ theme }) => theme.textContrast || '#ffffff'};
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover || '#e56c00'};
  }
`;

const Small = styled.small`
  display: block;
  margin-top: 12px;
  color: ${({ theme }) => theme.textSecondary || '#777'};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary || '#999'};
  cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  opacity: .7;

  &:hover {
    color: ${({ theme }) => theme.text || '#333'};
    border-color: ${({ theme }) => theme.text || '#333'};
  }
`;

const ExitIntentPopup = ({ mentorRef }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [canTriggerPopup, setCanTriggerPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupExpired', 'true');
  };

  // Observa a visibilidade da seção de referência
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCanTriggerPopup(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (mentorRef.current) {
      observer.observe(mentorRef.current);
    }

    return () => {
      if (mentorRef.current) {
        observer.unobserve(mentorRef.current);
      }
    };
  }, [mentorRef]);

  // Configura os gatilhos de exibição
  useEffect(() => {
    // Função comum para inicializar o timer
    const initializeTimer = () => {
      const storedTime = localStorage.getItem('popupTimer');
      const storedStart = localStorage.getItem('popupStart');
      const now = Date.now();

      if (storedTime && storedStart) {
        const elapsed = Math.floor((now - parseInt(storedStart)) / 1000);
        const remaining = parseInt(storedTime) - elapsed;
        setTimeLeft(remaining > 0 ? remaining : 900);
      } else {
        const initialTime = 900; // 15 minutos
        setTimeLeft(initialTime);
        localStorage.setItem('popupStart', now.toString());
        localStorage.setItem('popupTimer', initialTime.toString());
      }
    };

    // Gatilho para desktop
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && canTriggerPopup && !localStorage.getItem('popupExpired')) {
        initializeTimer();
        setShowPopup(true);
      }
    };

    // Gatilho para mobile
    let startY = 0;
    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const swipeUp = startY - endY > 50;

      if (swipeUp && canTriggerPopup && !localStorage.getItem('popupExpired')) {
        initializeTimer();
        setShowPopup(true);
      }
    };

    // Adiciona listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [canTriggerPopup]);

  // Controla o timer regressivo
  useEffect(() => {
    if (!showPopup || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = prev - 1;

        if (updated <= 0) {
          localStorage.setItem('popupExpired', 'true');
          localStorage.removeItem('popupStart');
          localStorage.removeItem('popupTimer');
          setShowPopup(false);
        }

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showPopup, timeLeft]);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  const handleCouponClick = () => {
    navigator.clipboard.writeText('ULTIMACHANCEDEV');

    toast.success('🎉 Cupom copiado, você será redirecionado para o pagamento.', {
      position: 'top-center',
      autoClose: 3000,
    });

    setTimeout(() => {
      window.location.href = 'https://pay.kiwify.com.br/GAQHdpq';
    }, 1000);
  };


  const handleUseCoupon = () => {
    window.open('https://pay.kiwify.com.br/GAQHdpq', '_blank');
  };

  return (
    <>
      <ToastContainer />
      {showPopup && timeLeft > 0 && (
        <Overlay>
          <Popup>
            <CloseButton onClick={handleClosePopup}>&times;</CloseButton>
            <Title>💥 Última chance antes de sair!</Title>
            <Subtitle>
              Use o cupom abaixo para garantir <strong>25% de desconto</strong> nos próximos <strong>{formatTime(timeLeft)}</strong>.
            </Subtitle>
            <Subtitle>
              Clique Para copiar e cole antes de pagar!
            </Subtitle>
            <Coupon onClick={handleCouponClick}>ULTIMACHANCEDEV</Coupon>
            <Timer>Tempo restante: {formatTime(timeLeft)}</Timer>
            <Button onClick={handleUseCoupon}>Usar meu cupom agora</Button>
            <Small>Essa oferta expira assim que o tempo zerar.</Small>
          </Popup>
        </Overlay>
      )}
    </>
  );
};

export default ExitIntentPopup;