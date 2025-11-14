import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Award } from "./award/Award";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const AwardsAndRecognition = () => {
    return (
        <Container>
            <StyledAwardsAndRecognition>
                <TitleBlock>
                    <ZText>achievement</ZText>
                    <SectionTitle>awards and recognition</SectionTitle>
                </TitleBlock>
                    <FlexWrapper gap="3.177vw" wrap="wrap" justify="center">
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    </FlexWrapper>
            </StyledAwardsAndRecognition>
        </Container>
    );
};

const StyledAwardsAndRecognition = styled.section`
    margin-bottom: 14.11vh;
`

const TitleBlock = styled.div`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    margin: 0 auto;
    margin-bottom: 3.97vh;
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
