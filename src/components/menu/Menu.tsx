import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Modal } from "../modal/Modal";

export const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <StyledNav>
            <StyledUl>
                <div>
                    <StyledLi>
                        <StyledA href="#home">Home</StyledA>
                    </StyledLi>
                    <StyledLi>
                        <StyledA href="#about">About</StyledA>
                    </StyledLi>
                    <StyledLi>
                        <StyledA href="#portfolio">Portfolio</StyledA>
                    </StyledLi>
                    <StyledLi>
                        <ButtonLink onClick={() => setIsModalOpen(true)}>Contact</ButtonLink>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </StyledLi>
                </div>
            </StyledUl>
        </StyledNav>
    );
};


const StyledNav = styled.nav`

`
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    height: 25.36vh;
    gap: 5.52vw;
    flex-wrap: wrap;
    justify-content: start;

    @media ${Theme.media.lgTablet}{
        height: auto;
        gap: 0;
    }

    @media ${Theme.media.tablet}{
        height: 20.36vh;
        align-items: center;
        gap: 3vw;
    }
`

const StyledA = styled.a`
    font-weight: 600;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    line-height: 331%;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font.topFooterPassiveMenu};

    &:hover{
        color: ${Theme.colors.font.topFooterActiveMenu};
    }
`

const ButtonLink = styled.button`
   font-weight: 600;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    line-height: 331%;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: ${Theme.colors.font.topFooterPassiveMenu};

    &:hover{
        color: ${Theme.colors.font.topFooterActiveMenu};
    }
`;

const StyledLi = styled.li`

`
