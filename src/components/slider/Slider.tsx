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
                        <FlexWrapper gap="122px">
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
    width: 1215px;
    margin-bottom: 160px;
    text-align: center;
`
const ReviewText = styled.p`
    font-weight: 400;
    font-size: 29px;
    line-height: 183%;
    letter-spacing: 0.01em;
    text-align: center;
    margin-bottom: 50px;
`

const ClientText = styled.span`
    font-weight: 500;
    font-size: 21px;
    line-height: 225%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    text-align: center;
`

const ImgOfClient = styled.img`
    width: 66px;
    margin-bottom: 10px;
`

const MiniSpan = styled.span`
    color: ${Theme.colors.font.littleSlider};
    font-weight: 500;
    font-size: 14px;
    line-height: 179%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
`

