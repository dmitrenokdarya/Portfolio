import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";
import { Subscribe } from "./blocks/Subscribe";
import { Menu } from "../../../components/menu/Menu";
import { Email } from "./blocks/Email";
import { SocialIcons } from "./blocks/SocialIcons";


export const Footer = () => {
    return (
        <StyledFooter>
            <Logo/>
            <FooterTop>
                <Subscribe/>
                <StyledMenu>
                    <Menu/> 
                </StyledMenu>
                <Email/>               
            </FooterTop>
            <FooterBottom>
                <SocialIcons/>
                <p>Template designed by : Templates Jungle</p>
            </FooterBottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    min-height: 584px;
    background-color: #eb348f6c;
`

const StyledMenu = styled.div`
    width: 33%;
`

const FooterTop = styled.div`
    min-height: 334px;
    margin-bottom: 100px;
    display: flex;
`

const FooterBottom = styled.div`
    display: flex;
    min-height: 150px;
    background-color: #1A1A1A;
    color: #8C8C8C;
`