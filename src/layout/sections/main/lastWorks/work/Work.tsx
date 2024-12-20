import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../../components/FlexWrapper";
import { Theme } from "../../../../../styles/Theme";

type WorkPropsType = {
    imgsrc: string
    text: string
    width: string
    marginBottom?: string
}

type ImageWorkPropsType = {
    widthImg: string
}

type StyledWorkPropsType = {
    marginBottom?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork marginBottom={props.marginBottom}>
            <FlexWrapper direction="column" align="end">
                <ImageWork widthImg={props.width} src={props.imgsrc} alt="" />
                <FlexWrapper direction="column">
                    <Description>{props.text}</Description>
                    <StyledHr/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div<StyledWorkPropsType>`
    margin-bottom: ${props => props.marginBottom || '0px'};
`


const ImageWork = styled.img<ImageWorkPropsType>`
    width: ${props => props.widthImg};
    margin-bottom: 18px;
`

const Description = styled.a`
    font-weight: 400;
    font-size: 26px;
    line-height: 104%;
    text-transform: lowercase;
    text-align: right;
    color: ${Theme.colors.font.littleText};
    margin-bottom: 8px;
`

const StyledHr = styled.hr`
    border: 2px solid ${Theme.colors.font.littleText};
`