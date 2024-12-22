import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Subscribe } from "./blocks/Subscribe";
import { Menu } from "../../../components/menu/Menu";
import { Email } from "./blocks/Email";
import { SocialIcons } from "./blocks/SocialIcons";
import { Theme } from "../../../styles/Theme";
import { Icon } from "../../../components/icon/Icon";
import { Container } from "../../../components/Container";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Icon iconId={"logoBlack"} width={'94'} heigth={'45'} viewBox={'0 0 94 45'}/>
                <FooterTop>
                    <Subscribe/>
                    <StyledMenu>
                        <Menu/> 
                    </StyledMenu>
                    <Email/>               
                </FooterTop>
            </Container>
            <FooterBottom>
                <SocialIcons/>
                <p>Template designed by : Templates Jungle</p>
            </FooterBottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    min-height: 584px;
`

const StyledMenu = styled.div`
    margin-right: 108px;
`

const FooterTop = styled.div`
    min-height: 334px;
    margin: 34px 0px 100px 0px;
    display: flex;
    justify-content: space-between;
`

const FooterBottom = styled.div`
    display: flex;
    min-height: 150px;
    background-color: ${Theme.colors.secondaryBg.bottomFooterBlack};
    color: #8C8C8C;
`