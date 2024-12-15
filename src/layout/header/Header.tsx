import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: gray;
    display: flex;
`