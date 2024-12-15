import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import ImageOfClient from "../../../assets/images/author.png"
import { Slider } from "../../../components/slider/Slider";


export const Testimonials = () => {
    return (
        <StyledTestimonials>
                <SectionTitle>What clients says</SectionTitle>
                <FlexWrapper justify="center">
                    <Slider review="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”" imgsrc={ImageOfClient} client="Lucas wolfer" post="ceo - raisins"/>
                </FlexWrapper>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    min-height: 838px;
    background-color: #42423f6d;
    margin-bottom: 160px;
`