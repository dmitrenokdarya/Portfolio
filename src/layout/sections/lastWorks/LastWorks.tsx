import styled from "styled-components";
import MagazineGirl from "../../../assets/images/magazine.png"
import Bottle from "../../../assets/images/makeup.webp"
import Magazine from "../../../assets/images/magazine.png"
import Coffee from "../../../assets/images/coffee.png"
import Mockup from "../../../assets/images/mockup.webp"
import Perfume from "../../../assets/images/perfume.webp"
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import { Button } from "../../../components/button/Button";
import { Theme } from "../../../styles/Theme";

import Todolist from "../../../assets/images/todolist.jpg"
import Library from "../../../assets/images/library.jpg"



export const LastWorks = () => {
    return (
        <Container>
            <FlexWrapper justify="center">
                <StyledLastWorks>
                    <TitleBlock>
                        <ZText>portfolio</ZText>
                        <SectionTitle>Latest works</SectionTitle>
                    </TitleBlock>
                    <FlexBlockWrapper>
                        <FlexWrapper direction="column">
                            <Work marginBottom="6.84vh" link='https://dmitrenokdarya.github.io/my-to-do-list/' imgsrc={Todolist} width="100%" text='advanced task management' discription="Todo List application with task management capabilities. Developed using React and TypeScript for code reliability, with local storage for data saving. Features a clean, minimalist interface design."/>
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <Work marginBottom="6.84vh" link='https://dmitrenokdarya.github.io/2-sprint-hw/#/pre-junior' imgsrc={Library} width="100%" text='react components library' discription="A compact UI Components Library with three complexity tiers (Pre-junior, Junior, Junior+). A small collection of reusable React components showcasing different implementation approaches from basic to advanced patterns."/>
                            <Button text="view all portfolio" padding="0.65em 2.12em" width="17.18em" />
                        </FlexWrapper>
                    </FlexBlockWrapper>
                </StyledLastWorks>
            </FlexWrapper>
        </Container>
    );
};

const StyledLastWorks = styled.section`
    background-color: ${Theme.colors.primaryBg};
    margin-bottom: 11rem;

    @media ${Theme.media.tablet}{
        margin-bottom: 13.01vh;
    }
`

const TitleBlock = styled.div`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    margin: 0 auto;
    margin-bottom: 3.97vh;
    width: 3.017em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.tablet}{
        margin: 3vh auto;
    }
`

const FlexBlockWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 3.125vw;

    @media ${Theme.media.tablet}{
        flex-direction: column;
        gap: 6.84vh;
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