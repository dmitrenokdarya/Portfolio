import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Theme } from "../../styles/Theme";
import styled from 'styled-components';
import { Icon } from "../icon/Icon";

export const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleContactClick = () => {
        setIsModalOpen(true);
        setIsMenuOpen(false);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen}>
                <Icon
                    iconId="menu"
                    width="calc( (100vw - 576px)/(1920 - 576) * (32 - 18.7) + 18.7px)"
                    height="32"
                    viewBox="0 0 32 32"
                />
            </BurgerButton>

            <HeaderMenu isOpen={isMenuOpen}>

                <CloseButton onClick={toggleMenu}>
                    <CloseIcon>×</CloseIcon>
                </CloseButton>

                <StyledNav>
                    <StyledUl>
                        <StyledLi>
                            <StyledA href="#home" onClick={handleLinkClick}>Home</StyledA>
                        </StyledLi>
                        <StyledLi>
                            <StyledA href="#about" onClick={handleLinkClick}>About</StyledA>
                        </StyledLi>
                        <StyledLi>
                            <StyledA href="#portfolio" onClick={handleLinkClick}>Portfolio</StyledA>
                        </StyledLi>
                        <StyledLi>
                            <ButtonLink onClick={handleContactClick}>Contact</ButtonLink>
                        </StyledLi>
                    </StyledUl>
                </StyledNav>

                <CloseButton onClick={toggleMenu}>
                    <Icon iconId="close" width="24" height="24" viewBox="0 0 24 24" />
                </CloseButton>
            </HeaderMenu>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

const BurgerButton = styled.button<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    @media ${Theme.media.tablet} {
        display: flex;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
    }
`;

const CloseIcon = styled.span`
    font-size: 2rem;
    color: ${Theme.colors.font.topFooterPassiveMenu};
    line-height: 1;
    
    ${CloseButton}:hover & {
        color: ${Theme.colors.font.topFooterActiveMenu};
    }
`;

const HeaderMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh; /* На всю высоту экрана */
    background: ${Theme.colors.primaryBg}; /* Или любой другой фон */
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    /* Если хочешь только высоту хедера, замени на: */
    /* height: ваша_высота_хедера; */
    /* top: 0; */
    /* box-shadow: 0 2px 10px rgba(0,0,0,0.1); */
`;


const StyledNav = styled.nav`
    width: 100%;
    max-width: 400px;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

const StyledA = styled.a`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font.topFooterPassiveMenu};
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 1rem 2rem;
    width: 100%;
    text-align: center;

    &:hover {
        color: ${Theme.colors.font.topFooterActiveMenu};
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
    }
`;

const ButtonLink = styled.button`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font.topFooterPassiveMenu};
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem 2rem;
    width: 100%;
    transition: all 0.3s ease;

    &:hover {
        color: ${Theme.colors.font.topFooterActiveMenu};
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
    }
`;

const StyledLi = styled.li`
    list-style: none;
    width: 100%;
    text-align: center;
`;