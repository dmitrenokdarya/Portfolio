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
    width: 304px;
    font-weight: 400;
    font-size: 17px;
    line-height: 225%;
    letter-spacing: 0.02em;
    color: ${Theme.colors.font.topFooterText};
    margin-right: 146px;
`

const Text = styled.p`
    margin-bottom: 38px;
`

const Input = styled.input`
    margin-bottom: 14px;
    background-color: ${Theme.colors.font.placeholder};
    height: 50px;
    border: none;

    &::placeholder{
        font-family: 'Manrope';
        font-weight: 400;
        font-size: 17px;
        letter-spacing: 0.02em;
        text-transform: capitalize;
        color: ${Theme.colors.font.topFooterText};
    }
`

const StyledButton = styled.button`
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    text-align: center;
    color: ${Theme.colors.font.white};
    background-color: ${Theme.colors.secondaryBg.buttonsBlack};
    letter-spacing: 0.10em;
    padding: 11px;
`