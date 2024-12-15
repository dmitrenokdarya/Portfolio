import React from "react";
import styled from "styled-components";

type AwardPropsType = {
    title: string
    text: string
}

export const Award = (props: AwardPropsType) => {
    return (
        <StyledAward>
            <AwardsTitle>{props.title}</AwardsTitle>
            <AwardsText>{props.text}</AwardsText>   
        </StyledAward>
    );
};

const StyledAward = styled.div`
    width: 33%;
`

const AwardsTitle = styled.div`

`

const AwardsText = styled.div`

`