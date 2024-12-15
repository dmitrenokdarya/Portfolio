import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between" align="center">
                <Logo/>
                <Icon iconId="burger-menu" width="32" heigth="21" viewBox="0 0 32 21"/>
            </FlexWrapper>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 63px 80px 130px 100px;
`