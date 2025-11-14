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
                <FlexBlock>
                    <TextButtonBlock>
                        <AboutMeText>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</AboutMeText>
                        <Button text="about me"/>
                    </TextButtonBlock>
                    <FlexBlockWrapper>
                        <StyledUl>
                            <Skill skill='photoshop' percentage='75%'/>
                            <Skill skill='illustrator' percentage='87%'/>
                            <Skill skill='figma' percentage='85%'/>
                            <Skill skill='after effect' percentage='78%'/>
                            <Skill skill='indesign' percentage='87%'/>
                        </StyledUl>
                    </FlexBlockWrapper>
                </FlexBlock>
            </StyledAboutMe>
        </Container>
    );
};

const TitleBlock = styled.div`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    margin-bottom: 2.21vh;
    width: 3.017em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.tablet}{
        margin: 3vh auto;
    }
`

const StyledAboutMe = styled.section`
    margin-bottom: 13.01vh;
    background-color: ${Theme.colors.primaryBg};
    z-index: 0;
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

const FlexBlock = styled.div`
    display: flex;
    
    @media ${Theme.media.tablet}{
        flex-direction: column;
    }
`

const AboutMeText = styled.p`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 10) + 10px);
    font-weight: 400;
    letter-spacing: 0.02em;
    line-height: 238%;
    color: ${Theme.colors.font.paragraph};
    margin-bottom: 3.53em;

    @media ${Theme.media.screen}{
        margin-bottom: 1.8em;
    }

    @media ${Theme.media.tablet}{
        margin-bottom: 3.53em;
    }
`

const TextButtonBlock = styled.div`
    max-width: 49.84%;
    margin-right: 9.375%;

    @media ${Theme.media.tablet}{
        max-width: 100%;
        margin-right: none;
        margin-bottom: 3.53em;
    }
`
const FlexBlockWrapper = styled.div`
`

const StyledUl = styled.ul`

`