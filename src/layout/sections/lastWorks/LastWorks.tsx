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
                            <Work marginBottom="6.84vh" imgsrc={MagazineGirl} width="100%" text='magazine front design' />
                            <Work marginBottom="6.84vh" imgsrc={Bottle} width="100%" text='product bottle design' />
                            <Work imgsrc={Magazine} width="100%" text='magazine & brochure mockup' />
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <Work marginBottom="6.84vh" imgsrc={Coffee} width="100%" text='coffee bottle mockup' />
                            <Work marginBottom="6.84vh" imgsrc={Mockup} width="100%" text='product tag mockup' />
                            <Work marginBottom="16.32vh" imgsrc={Perfume} width="100%" text='perfume brand identity' />
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
    margin-bottom: 38.04vh;

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