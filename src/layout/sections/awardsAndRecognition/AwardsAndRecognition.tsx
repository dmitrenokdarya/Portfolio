import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Award } from "./award/Award";

export const AwardsAndRecognition = () => {
    return (
        <StyledAwardsAndRecognition>
                <SectionTitle>awards and recognition</SectionTitle>
                <FlexWrapper wrap="wrap">
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                    <Award title='Interior design' text='Breakthrough designer of the year 2020'/>
                </FlexWrapper>
        </StyledAwardsAndRecognition>
    );
};

const StyledAwardsAndRecognition = styled.section`
    min-height: 497px;
    background-color: #4a99dd6f;
    margin-bottom: 128px;
`