import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type NewPropsType = {
    section: string
    date: string
    caption: string
}

export const New = (props: NewPropsType) => {
    return (
        <StyledNew>
            <FlexWrapper direction="column">
                <div>
                    <span>{props.section}</span>
                    <span>/</span>
                    <time>{props.date}</time>
                </div>
                <h3>{props.caption}</h3>
            </FlexWrapper>
        </StyledNew>
    );
};

const StyledNew = styled.div`
    min-height: 477px;
    min-width: 396px;

`