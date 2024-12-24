import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <a><Icon iconId="facebook"/></a>
            <a><Icon iconId="twiter"/></a>
            <a><Icon iconId="linkid"/></a>
            <a><Icon iconId="shar"/></a>
            <a><Icon iconId="youtube"/></a>
        </StyledSocialIcons>
    );
};


const StyledSocialIcons = styled.div`
    display: flex;
    gap: 66px;
    margin: auto 0px auto 322px;
`
