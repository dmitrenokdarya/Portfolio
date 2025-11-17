import styled from 'styled-components';
import { Icon } from '../icon/Icon'
import { Theme } from '../../styles/Theme';

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: Props) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <ContactModalContent />
            </ModalContent>
        </ModalOverlay>
    );
}


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #666;
  }
`;

const ContactModalContent = () => {

    const handleLocationClick = () => {
        window.open('https://www.google.com/maps/place/Minsk', '_blank');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:dmitrenokdarya@gmail.com';
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/darya-dmitrenok', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/dmitrenokdarya', '_blank');
    };

    const handleTelegramClick = () => {
        window.open('https://t.me/daarrys', '_blank');
    };

    const handleCVDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Darya_Dmitrenok_CV.pdf';
        link.download = 'Darya_Dmitrenok_CV.pdf';
        link.click();
    };

    return (
        <ModalContentWrapper>
            <ModalTitle>How would you like to connect?</ModalTitle>
            <ModalDescription>
                Choose your preferred way to get in touch. I'm always open to discussing new opportunities!
            </ModalDescription>

            <ContactButtonsContainer>
                <ContactButton onClick={handleLocationClick}>
                    <Icon iconId='location' width='25' height='25' viewBox='0 0 35 35' />
                    Minsk, Belarus
                </ContactButton>

                <ContactButton onClick={handleCVDownload}>
                    <Icon iconId='email' width='25' height='25' viewBox='0 0 35 35' />
                    Download CV
                </ContactButton>

                <ContactButton onClick={handleEmailClick}>
                    <Icon iconId='email' width='25' height='25' viewBox='0 0 35 35' />
                    Email me
                </ContactButton>

                <ContactButton onClick={handleTelegramClick}>
                    <Icon iconId='telegram' width='25' height='25' viewBox='0 0 40 40' />
                    Telegram
                </ContactButton>

                <ContactButton onClick={handleLinkedInClick}>
                    <Icon iconId='linkedin' width='25' height='25' viewBox='0 0 35 35' />
                    LinkedIn
                </ContactButton>

                <ContactButton onClick={handleGitHubClick}>
                    <Icon iconId='github' width='25' height='25' viewBox='0 0 35 35' />
                    GitHub
                </ContactButton>
            </ContactButtonsContainer>

            <QuickResponse>
                Prefer email or Telegram for the quickest response :)
            </QuickResponse>
        </ModalContentWrapper>
    );
};


const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0;
`;

const ModalTitle = styled.h2`
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.5rem;
`;

const ModalDescription = styled.p`
    margin-bottom: 2rem;
    color: #666;
    line-height: 1.5;
    max-width: 400px;
`;

const ContactButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    margin-bottom: 1.5rem;

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const ContactButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 1rem;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 80px;

    &:hover {
        background: #d6d6d6ff;
        border-color: #a8a6a6ff;
    }
`;

const QuickResponse = styled.p`
    color: #38b76fff;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #f8fff9;
    border-radius: 6px;
    font-size: 0.9rem;
`;