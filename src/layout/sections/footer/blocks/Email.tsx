import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";


export const Email = () => {
    return (
        <StyledEmail>
            <FlexWrapper direction="column">
                <StyledP>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</StyledP>
                <StyledA href="">templatesjungle@gmail.com</StyledA>
                <StyledHr/>
            </FlexWrapper>
        </StyledEmail>
    );
};

const StyledEmail = styled.div`
    width: 21.458vw;

    @media ${Theme.media.tablet}{
        width: 100%;
    }
`
const StyledP = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    line-height: 225%;
    letter-spacing: 0.02em;
    color: ${Theme.colors.font.topFooterText};
    margin-bottom: 3.638vh;

    @media ${Theme.media.tablet}{
        margin-bottom: 1vh;
    }
`

const StyledA = styled.a`
    font-weight: 300;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (30 - 17.5) + 17.5px);
    line-height: 183%;
    letter-spacing: 0.01em;
    color: ${Theme.colors.font.topFooterEmail};
`

const StyledHr = styled.hr`
    width: 20.468vw;
    border: 0.11vh solid ${Theme.colors.font.littleText};
`