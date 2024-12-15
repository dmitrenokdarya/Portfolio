import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction="column">
                <span>hi! everyone</span>
                <h2>Chris Lee</h2>
                <h1>Brand designer</h1>
                <span>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</span>
                <a href="">get in touch</a>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-color: #a52a2a58;
`