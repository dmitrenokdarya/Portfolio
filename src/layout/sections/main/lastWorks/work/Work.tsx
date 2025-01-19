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
    max-width: ${props => props.widthImg};
    margin-bottom: 1.985%;
`

const Description = styled.a`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (26 - 15.17) + 15.17px);
    line-height: 104%;
    text-transform: lowercase;
    text-align: right;
    color: ${Theme.colors.font.littleText};
    margin-bottom: 0.31em;
`

const StyledHr = styled.hr`
    border: 0.115em solid ${Theme.colors.font.littleText};
`