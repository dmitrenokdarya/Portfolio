import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";


export const AboutMe = () => {
    return (
        <Container>
            <StyledAboutMe>
                <TitleBlock>
                    <ZText>about</ZText>
                    <SectionTitle>who am i</SectionTitle>
                </TitleBlock>
                <FlexWrapper justify="space-between">
                    <TextButtonBlock>
                        <AboutMeText>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</AboutMeText>
                        <Button text="about me"/>
                    </TextButtonBlock>
                    <FlexWrapper direction="column" align="start">
                        <StyledUl>
                            <Skill skill='photoshop' percentage='75%'/>
                            <Skill skill='illustrator' percentage='87%'/>
                            <Skill skill='figma' percentage='85%'/>
                            <Skill skill='after effect' percentage='78%'/>
                            <Skill skill='indesign' percentage='87%'/>
                        </StyledUl>
                    </FlexWrapper>
                </FlexWrapper>
            </StyledAboutMe>
        </Container>
    );
};

const TitleBlock = styled.div`
    margin-bottom: 20px;
    width: 362px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledAboutMe = styled.section`
    margin-bottom: 118px;
    background-color: ${Theme.colors.primaryBg};
    z-index: 0;
`
const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 120px;
    color: ${Theme.colors.secondaryBg.titleBorder};
    z-index: 1;
`

const AboutMeText = styled.p`
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 238%;
    color: ${Theme.colors.font.paragraph};
    margin-bottom: 60px;
`

const TextButtonBlock = styled.div`
    width: 638px;
`

const StyledUl = styled.ul`
    width: 492px;
`