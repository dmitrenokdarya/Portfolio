import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";

export const Quote = () => {
    return (
        <StyledQuote>
            <FlexWrapper align="start">
                <Icon iconId='cosochki_1' width="calc( (100vw - 576px)/(1920 - 576) * (385 - 224.6) + 22.46px)" heigth="321" viewBox="0 0 385 321"/>
            </FlexWrapper>
            <FlexWrapper direction="column" align="center" justify="center">
                <QuoteTitle>Quote of the day</QuoteTitle>
                <StyledHr/>
                <FlexWrapper direction="column" align="center">
                    <QuoteText>“Success is not final; failure is not fatal: it is the courage to continue that counts.”</QuoteText>
                    <QuoteAuthor>-Winston Churchill</QuoteAuthor>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper align="end">
                <Icon iconId='cosochki_2' width="calc( (100vw - 576px)/(1920 - 576) * (385 - 224.6) + 22.46px)" heigth="calc( (100vw - 576px)/(1920 - 576) * (321 - 187.25) + 187.25px)" viewBox="0 0 385 321"/>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 9vh 3.125vw;
    background-color: ${Theme.colors.secondaryBg.quoteBlack};
`

const QuoteTitle = styled.p`
    font-family: 'Jost';
    font-weight: 300;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    line-height: 150%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    text-align: center;
    color: ${Theme.colors.font.bigQuote};
`

const StyledHr = styled.hr`
    border: 0.22vh solid ${Theme.colors.font.bigQuote};
    width: 11.5625vw;
    margin-bottom: 9.392vh;
`

const QuoteText = styled.blockquote`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (34 - 19.83) + 19.83px);
    line-height: 174%;
    text-align: center;
    color: ${Theme.colors.primaryBg};
    margin-bottom: 5.513vh;
    width: 38.697vw;
`

const QuoteAuthor = styled.span`
    font-weight: 700;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (18 - 10.5) + 10.5px);
    line-height: 180%;
    color: ${Theme.colors.font.littleQuote};
`
