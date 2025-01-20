import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledA href="">Home</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="">About</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="">Services</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="">Portfolio</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="">Blogs</StyledA>
                </StyledLi>
                <StyledLi>
                    <StyledA href="">Contact</StyledA>
                </StyledLi>
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

const StyledLi = styled.li`

`