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
    font-size: 22px;
    text-transform: capitalize;
    color: ${Theme.colors.font.title};
`

const AwardsText = styled.div`
    font-weight: 300;
    font-size: 19px;
    line-height: 188%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: ${Theme.colors.font.littleAwards};
    margin-bottom: 40px;
`

const StyledHr = styled.hr`
    border: 0.5 solid ${Theme.colors.font.lineAwards};
`