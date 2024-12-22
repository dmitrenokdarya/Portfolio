import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Theme } from "../../../../styles/Theme";

type NewPropsType = {
    section: string
    date: string
    caption: string
    cardImg: string
}

type StyledNewPropsType = {
    cardImg: string
}

export const New = (props: NewPropsType) => {
    return (
        <StyledNew cardImg={props.cardImg} href="">
            <FlexWrapper direction="column">
                <NameOfNew>
                    <SectionAndTime>
                        <NewsSection>{props.section}</NewsSection>
                        <span>/</span>
                        <NewsTime>{props.date}</NewsTime>
                    </SectionAndTime>
                    <NewsTitle>{props.caption}</NewsTitle>
                </NameOfNew>
            </FlexWrapper>
        </StyledNew>
    );
};

const StyledNew = styled.a<StyledNewPropsType>`
    min-height: 477px;
    min-width: 396px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 100%), url(${props => props.cardImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    color: ${Theme.colors.font.littleCard};

    &:hover{
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.cardImg});
    }
`

const NameOfNew = styled.div`
    margin: 0 48px 41px 49px;
`

const SectionAndTime = styled.div`
    margin-bottom: 16px;
    display: flex;
    gap: 12px;
`

const NewsSection = styled.span`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: ${Theme.colors.font.littleCard};
`

const NewsTime = styled.span`
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: ${Theme.colors.font.littleCard};
`

const NewsTitle = styled.h3`
    font-weight: 700;
    font-size: 26px;
    line-height: 160%;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: ${Theme.colors.primaryBg};
`