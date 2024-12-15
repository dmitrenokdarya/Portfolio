import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Quote = () => {
    return (
        <StyledQuote>
            <FlexWrapper direction="column">
                <FlexWrapper>
                    <Icon iconId='cosochki_1' width="321" heigth="385" viewBox="0 0 400 385"/>
                    <p>Quote of the day</p>
                </FlexWrapper>
                <FlexWrapper>
                    <FlexWrapper direction="column">
                        <p>“Success is not final; failure is not fatal: it is the courage to continue that counts.”</p>
                        <p>-Winston Churchill</p>
                    </FlexWrapper>
                    <Icon iconId='cosochki_2' width="321" heigth="385" viewBox="0 0 400 385"/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.div`
    background-color: #0D0D0D;
    color: #EAEAEA;//у всех элементов разные цвета
    min-height: 690px;
`