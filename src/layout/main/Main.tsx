import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";

export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <StyledMain>
            <FlexWrapper direction="column">
                <Greetings>hi! everyone</Greetings>
                <MainText>
                    <H2Styled>Darya Dmitrenok</H2Styled>
                    <H2Styled as='h1'>Front-end developer</H2Styled>
                </MainText>
                <MainDescription>Crafting experiences where logic meets empathy</MainDescription>
                <GetInTouch onClick={() => setIsModalOpen(true)}>
                    get in touch
                </GetInTouch>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    max-height: 100vh;
    margin: 0 20vw 0 16vw;
    color: ${Theme.colors.font.white};
    
    @media ${Theme.media.mdScreen} {
        margin: 0 15vw 0 15vw;
    }

    @media ${Theme.media.lgTablet} {
        margin: 0 10vw 0 10vw;
        padding-bottom: 10vh;
        text-shadow: 0px 0px 2px ${Theme.colors.font.title};
    }

    @media ${Theme.media.mobile} {
        padding-bottom: 13vh;
    }
`

const Greetings = styled.span`
    text-transform: uppercase;
    background-color: rgba(236, 236, 236, 0.17);
    width: fit-content;
    padding: 0.167em 0.694em;
    font-family: "Inconsolata";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.24em;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (18 - 10.5) + 10.5px);
    margin-bottom: 5vh;
`

const MainText = styled.div`
    line-height: 1.11;
`

const H2Styled = styled.h2`
    font-weight: 800;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (108 - 63.2) + 63.2px);
    letter-spacing: -0.04em;
`
const MainDescription = styled.p`
    margin: 4vh 0 7.4vh 0;
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (24 - 14) + 14px);
    letter-spacing: 0.02em;
    line-height: 1.98;
`

const GetInTouch = styled.button`
    text-transform: uppercase;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (19 - 11.2) + 11.2px);
    font-weight: 600;
    color: ${Theme.colors.font.white};
    border: 0.053em solid ${Theme.colors.font.white};
    width: fit-content;
    letter-spacing: 0.10em;
    padding: 0.947em 2.737em;
    transition: all 0.2s ease;

    &:hover{
        color: ${Theme.colors.font.activeMainButton};
        background-color: ${Theme.colors.font.white};
    }

    @media ${Theme.media.lgTablet} {
        text-shadow: 0px 0px 2px ${Theme.colors.font.title};
    }
`

