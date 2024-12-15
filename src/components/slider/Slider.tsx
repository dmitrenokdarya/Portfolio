import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Pagination } from "../pagination/Pagitation";

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
                                <p>{props.review}</p>
                                <ImgOfClient src={props.imgsrc} alt="" />
                                <span>{props.client}</span>
                                <span>{props.post}</span>
                            </FlexWrapper>
                            <Pagination type="strel_2"/>
                        </FlexWrapper>
                    </StyledTestimonial>
                </FlexWrapper>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    width: 1215px;
`
const StyledTestimonial = styled.section`
    width: 1215px;
    min-height: 838px;
    margin-bottom: 160px;
    text-align: center;
`
const ImgOfClient = styled.img`
    width: 66px;
`

