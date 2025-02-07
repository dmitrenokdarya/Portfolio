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
                <BlockNew>
                    <New cardImg={Shoper} section="Graphic Design" date="July 1, 2021" caption="Graphic Designing Useful Tips & Best Practices"/>
                    <New cardImg={Package} section="Graphic Design" date="July 1, 2021" caption="basic typography rules for ui designing"/>
                    <New cardImg={Camera} section="Graphic Design" date="July 1, 2021" caption="top 10 graphic designs review in 2021"/>
                </BlockNew>
                <FlexBlockWrapper>
                    <StyledButton href="">view all blogs</StyledButton>
                    <Icon iconId="buttonStrelBlack" width="calc( (100vw - 576px)/(1920 - 576) * (16 - 9.3) + 9.3px)" heigth="13" viewBox="0 0 10 9"/>
                </FlexBlockWrapper>
            </StyledLatestNews>
        </Container>
    );
};


const BlockNew = styled.div`
    display: flex;
    gap: 2.5vw;

    @media ${Theme.media.lgTablet}{
        flex-direction: column;
    }
`

const StyledLatestNews = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 13.01vh;
`
const FlexBlockWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.213vh 1.98vw;
    margin-top: 6.84vh;
`

const TitleBlock = styled.div`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    margin: 0 auto;
    margin-bottom: 6.06vh;
    width: 3.017em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.tablet}{
        margin: 3vh auto;
    }
`

const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-align: center;
    color: ${Theme.colors.secondaryBg.titleBorder};
    z-index: 1;
`

const StyledButton = styled.a`
    text-transform: uppercase;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.92) + 9.92px);
    font-weight: 600;
    line-height: 235%;
    text-align: center;
    color: ${Theme.colors.font.title};
    background-color: transparent;
    letter-spacing: 0.10em;
`