import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Pagination } from "../pagination/Pagitation";
import { Theme } from "../../styles/Theme";

type SliderPropsType = {
    review: string
    imgsrc: string
    client: string
    post: string
}

export const Slider = (props: SliderPropsType) => {
    return (
        <StyledSlider>
                <FlexWrapper direction="column" align="center">
                    <StyledTestimonial>
                        <FlexWrapper gap="6.35vw">
                            <Pagination type="strel_1"/>
                            <FlexWrapper direction="column" align="center">
                                <ReviewText>{props.review}</ReviewText>
                                <ImgOfClient src={props.imgsrc} alt="client" />
                                <ClientText>{props.client}</ClientText>
                                <MiniSpan>{props.post}</MiniSpan>
                            </FlexWrapper>
                            <Pagination type="strel_2"/>
                        </FlexWrapper>
                    </StyledTestimonial>
                </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    color: ${Theme.colors.primaryBg};
`
const StyledTestimonial = styled.section`
    margin-bottom: 13vh;
    text-align: center;
`
const ReviewText = styled.p`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (29 - 16.917) + 16.917px);
    line-height: 183%;
    letter-spacing: 0.01em;
    text-align: center;
    margin-bottom: 5.5127vh;
`

const ClientText = styled.span`
    font-weight: 500;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (21 - 12.25) + 12.25px);
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    text-align: center;
`

const ImgOfClient = styled.img`
    width: 3.4375vw;
    margin-bottom: 1.103vh;
`

const MiniSpan = styled.span`
    color: ${Theme.colors.font.littleSlider};
    font-weight: 500;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px);
    line-height: 179%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
`

