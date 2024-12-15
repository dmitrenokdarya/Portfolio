import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { New } from "./new/New";

export const LatestNews = () => {
    return (
        <StyledLatestNews>
            <SectionTitle>Latest news</SectionTitle>
            <FlexWrapper>
                <New section="Graphic Design" date="July 1, 2021" caption="Graphic Designing Useful Tips & Best Practices"/>
                <New section="Graphic Design" date="July 1, 2021" caption="basic typography rules for ui designing"/>
                <New section="Graphic Design" date="July 1, 2021" caption="top 10 graphic designs review in 2021"/>
            </FlexWrapper>
            <a href="">view all blogs</a>
        </StyledLatestNews>
    );
};

const StyledLatestNews = styled.section`
    min-height: 820px;
    background-color: #dbdd4a6e;
    margin-bottom: 200px;
`