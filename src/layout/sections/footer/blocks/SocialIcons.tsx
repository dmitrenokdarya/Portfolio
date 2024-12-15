import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";


export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <Icon iconId="facebook"/>
            <Icon iconId="twiter"/>
            <Icon iconId="linkid"/>
            <Icon iconId="shar"/>
            <Icon iconId="youtube"/>
        </StyledSocialIcons>
    );
};


const StyledSocialIcons = styled.div`

`
