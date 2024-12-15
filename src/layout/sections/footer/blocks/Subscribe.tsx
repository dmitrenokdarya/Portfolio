import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";


export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <FlexWrapper direction="column">
                <p>Subscribe to newsletter to get some updates related with branding, designs and more.</p>
                <input type="text" placeholder="write your email address"/>
                <button>subscribe it</button>
            </FlexWrapper>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.div`
    width: 33%;
`