import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import ImageOfClient from "../../../assets/images/author.png"
import { Slider } from "../../../components/slider/Slider";
import { Container } from "../../../components/Container";
import TestimonialsImg from "../../../assets/images/smoke.webp";
import { Theme } from "../../../styles/Theme";


export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <BlackFont>
                <Container>
                    <TitleBlock>
                        <ZText>testimonials</ZText>
                        <Title>What clients says</Title>
                    </TitleBlock>
                    <FlexWrapper justify="center">
                        <Slider review="“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”" imgsrc={ImageOfClient} client="Lucas wolfer" post="ceo - raisins"/>
                    </FlexWrapper>
                </Container>
            </BlackFont>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    background-image: url(${TestimonialsImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 17.64vh;
`
const BlackFont = styled.div`
    z-index: -100;
    position: relative;
    background-color: ${Theme.colors.font.activeSlider.strokeActiveSlider};
`

const TitleBlock = styled.div`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (120 - 70) + 70px);
    margin: 0 auto;
    margin-bottom: 6.06vh;
    width: 3.017em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.tablet}{
        margin: 3vh auto;
    }
`

const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-align: center;
    color: ${Theme.colors.secondaryBg.testimonials};
    z-index: 1;
`

const Title = styled.h2`
    color: ${Theme.colors.primaryBg};
    text-transform: uppercase;
    background-color: ${Theme.colors.font.activeSlider.strokeActiveSlider};
    width: fit-content;
    padding: 0.167em 0.694em;
    font-family: "Inconsolata";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.1em;
    line-height: 126%;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (22 - 12.83) + 12.83px);
    border: 0.09em solid ${Theme.colors.secondaryBg.testimonials};
    position: absolute;
    z-index: 100;
`