import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction="column">
                <Greetings>hi! everyone</Greetings>
                <MainText>
                    <H2Styled>Chris Lee</H2Styled>
                    <H2Styled as='h1'>Brand designer</H2Styled>
                </MainText>
                <MainDescription>Make designs mainly logos, visual identities, apps & websites,<br/>social media and magazines.</MainDescription>
                <GetInTouch href="#">get in touch</GetInTouch>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    max-height: 595px;
    margin-left: 25%;
    color: ${Theme.colors.font.white};
`
const Greetings = styled.span`
    text-transform: uppercase;
    background-color: rgba(236, 236, 236, 0.17);;
    width: fit-content;
    padding: 0.35em 0.7em 0.35em 0.7em;
    font-family: "Inconsolata";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.24em;
    font-size: 18px;
    margin-bottom: 45px;
`

const MainText = styled.div`
    line-height: 1.11;
`

const H2Styled = styled.h2`
    font-weight: 800;
    font-size: 108px;
    letter-spacing: -0.04em;
`
const MainDescription = styled.p`
    margin: 35px 0px 67px 0px;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.02em;
    line-height: 1.98;
`

const GetInTouch = styled.a`
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 500;
    color: ${Theme.colors.font.white};
    border: 1px solid ${Theme.colors.font.white};
    width: fit-content;
    letter-spacing: 0.10em;
    padding: 18px 52px 18px 52px;
`