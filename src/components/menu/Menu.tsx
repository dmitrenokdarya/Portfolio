import React from "react";
import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Menu = () => {
    return (
        <StyledNav>
            <StyledUl>
                <div>
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
                </div>
                <div>
                    <StyledLi>
                        <StyledA href="">Blogs</StyledA>
                    </StyledLi>
                    <StyledLi>
                        <StyledA href="">Contact</StyledA>
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
    max-height: 230px;
    gap: 106px;
    flex-wrap: wrap;
`

const StyledA = styled.a`
    font-weight: 600;
    font-size: 17px;
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
