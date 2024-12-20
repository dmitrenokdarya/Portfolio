import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";

export const Quote = () => {
    return (
        <StyledQuote>
            <FlexWrapper align="start">
                <Icon iconId='cosochki_1' width="385" heigth="321" viewBox="0 0 385 321"/>
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
                <Icon iconId='cosochki_2' width="385" heigth="321" viewBox="0 0 385 321"/>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 691px;
    padding: 0 60px;
    background-color: ${Theme.colors.secondaryBg.quoteBlack};
`

const QuoteTitle = styled.p`
    font-family: 'Jost';
    font-weight: 300;
    font-size: 120px;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    text-align: center;
    color: ${Theme.colors.font.bigQuote};
`

const StyledHr = styled.hr`
    border: 2px solid ${Theme.colors.font.bigQuote};
    width: 222px;
    margin-bottom: 85px;
`

const QuoteText = styled.blockquote`
    font-weight: 400;
    font-size: 34px;
    line-height: 174%;
    text-align: center;
    color: ${Theme.colors.primaryBg};
    margin-bottom: 50px;
    width: 743px;
`

const QuoteAuthor = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 180%;
    color: ${Theme.colors.font.littleQuote};
`