import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <StyledLi>
                    <a href="">Home</a>
                </StyledLi>
                <StyledLi>
                    <a href="">About</a>
                </StyledLi>
                <StyledLi>
                    <a href="">Services</a>
                </StyledLi>
                <StyledLi>
                    <a href="">Portfolio</a>
                </StyledLi>
                <StyledLi>
                    <a href="">Blogs</a>
                </StyledLi>
                <StyledLi>
                    <a href="">Contact</a>
                </StyledLi>
            </ul>
        </StyledNav>
    );
};


const StyledNav = styled.nav`
`

const StyledLi = styled.li`
    color: ${Theme.colors.font.topFooterPassiveMenu};
    font-weight: 600;
    font-size: 17px;
    line-height: 331%;
    letter-spacing: 0.09em;
    text-transform: uppercase;

    &:hover{
        color: ${Theme.colors.font.topFooterActiveMenu};
    }
`
