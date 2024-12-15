import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";


export const Email = () => {
    return (
        <StyledEmail>
            <FlexWrapper direction="column">
                <p>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</p>
                <a href="">templatesjungle@gmail.com</a>
            </FlexWrapper>
        </StyledEmail>
    );
};

const StyledEmail = styled.div`
    width: 33%;
`