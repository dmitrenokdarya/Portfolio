import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../../components/FlexWrapper";

type WorkPropsType = {
    imgsrc: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <FlexWrapper direction="column" align="end">
                <ImageWork src={props.imgsrc} alt="" />
                <Description>{props.text}</Description>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`

`

const ImageWork = styled.img`
    width: 300px;
`

const Description = styled.a`

`