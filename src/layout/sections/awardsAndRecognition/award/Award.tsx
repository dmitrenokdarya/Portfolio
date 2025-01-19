import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

type AwardPropsType = {
    title: string
    text: string
}

export const Award = (props: AwardPropsType) => {
    return (
        <StyledAward>
            <AwardsTitle>{props.title}</AwardsTitle>
            <AwardsText>{props.text}</AwardsText> 
            <StyledHr/>
        </StyledAward>
    );
};

const StyledAward = styled.div`

`

const AwardsTitle = styled.div`
    font-weight: 500;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (22 - 12.83) + 12.83px);
    text-transform: capitalize;
    color: ${Theme.colors.font.title};
`

const AwardsText = styled.div`
    font-weight: 300;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (19 - 11.083) + 11.083px);
    line-height: 188%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: ${Theme.colors.font.littleAwards};
    margin-bottom: 4.41vh;
`

const StyledHr = styled.hr`
    border: 0.05vh solid ${Theme.colors.font.lineAwards};
`