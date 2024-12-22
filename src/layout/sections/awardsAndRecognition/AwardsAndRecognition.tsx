import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Award } from "./award/Award";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

export const AwardsAndRecognition = () => {
    return (
        <Container>
            <StyledAwardsAndRecognition>
                <TitleBlock>
                    <ZText>achievement</ZText>
                    <SectionTitle>awards and recognition</SectionTitle>
                </TitleBlock>
                    <FlexWrapper gap="61px" wrap="wrap" justify="space-between">
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                        <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    </FlexWrapper>
            </StyledAwardsAndRecognition>
        </Container>
    );
};

const StyledAwardsAndRecognition = styled.section`
    min-height: 497px;
    margin-bottom: 128px;
`

const TitleBlock = styled.div`
    margin-bottom: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 120px;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-align: center;
    color: ${Theme.colors.secondaryBg.titleBorder};
    z-index: 1;
`
