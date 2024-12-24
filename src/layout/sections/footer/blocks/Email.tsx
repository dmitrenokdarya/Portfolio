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
    width: 412px;
`
const StyledP = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 225%;
    letter-spacing: 0.02em;
    color: ${Theme.colors.font.topFooterText};
    margin-bottom: 33px;
`

const StyledA = styled.a`
    font-weight: 300;
    font-size: 30px;
    line-height: 183%;
    letter-spacing: 0.01em;
    color: ${Theme.colors.font.topFooterEmail};
`

const StyledHr = styled.hr`
    width: 393px;
    border: 1px solid ${Theme.colors.font.littleText};
`