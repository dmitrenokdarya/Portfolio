import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";


export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <FlexWrapper direction="column">
                <Text>Subscribe to newsletter to get some updates related with branding, designs and more.</Text>
                <Input type="text" placeholder="write your email address"/>
                <StyledButton>subscribe it</StyledButton>
            </FlexWrapper>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.div`
    width: 15.83vw;
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    line-height: 225%;
    letter-spacing: 0.02em;
    color: ${Theme.colors.font.topFooterText};
    margin-right: 7.6vw;

    @media ${Theme.media.lgTablet}{
        width: 19.83vw;
        margin-right: 2vw;
    }

    @media ${Theme.media.tablet}{
        width: 100%;
        margin-right: 0;
    }
`

const Text = styled.p`
    margin-bottom: 4.189vh;

    @media ${Theme.media.tablet}{
        margin-bottom: 1vh;
    }
`

const Input = styled.input`
    margin-bottom: calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px);
    background-color: ${Theme.colors.font.placeholder};
    height: 5.513vh;
    border: none;
    padding-left: 1.146vw;

    &::placeholder{
        font-family: "Manrope";
        font-weight: 400;
        font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
        letter-spacing: 0.02em;
        text-transform: capitalize;
        color: ${Theme.colors.font.topFooterText};
    }
`

const StyledButton = styled.button`
    font-family: "Manrope";
    text-transform: uppercase;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    font-weight: 400;
    text-align: center;
    color: ${Theme.colors.font.white};
    background-color: ${Theme.colors.secondaryBg.buttonsBlack};
    letter-spacing: 0.10em;
    padding: 1.213vh 0.573vw;

    @media ${Theme.media.tablet}{
        margin-bottom: 5vh;
    }
`