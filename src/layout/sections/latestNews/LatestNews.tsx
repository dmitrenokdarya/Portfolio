import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { New } from "./new/New";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import Shoper from "../../../assets/images/shoper.webp";
import Package from "../../../assets/images/package.webp";
import Camera from "../../../assets/images/camera.png";
import { Icon } from "../../../components/icon/Icon"; 

export const LatestNews = () => {
    return (
        <Container>
            <StyledLatestNews>
                <TitleBlock>
                    <ZText>blogs</ZText>
                    <SectionTitle>Latest news</SectionTitle>
                </TitleBlock>
                <FlexWrapper gap='46px'>
                    <New cardImg={Shoper} section="Graphic Design" date="July 1, 2021" caption="Graphic Designing Useful Tips & Best Practices"/>
                    <New cardImg={Package} section="Graphic Design" date="July 1, 2021" caption="basic typography rules for ui designing"/>
                    <New cardImg={Camera} section="Graphic Design" date="July 1, 2021" caption="top 10 graphic designs review in 2021"/>
                </FlexWrapper>
                <StyledButton href="">view all blogs <Icon iconId="buttonStrelBlack" width="16" heigth="13" viewBox="0 0 10 9"/></StyledButton>
            </StyledLatestNews>
        </Container>
    );
};

const StyledLatestNews = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`

const TitleBlock = styled.div`
    margin-bottom: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 120px;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-align: center;
    color: ${Theme.colors.secondaryBg.titleBorder};
    z-index: 1;
`

const StyledButton = styled.a`
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    line-height: 235%;
    text-align: center;
    color: ${Theme.colors.font.title};
    background-color: transparent;
    letter-spacing: 0.10em;
    padding: 11px 38px;
    margin-top: 62px;
`