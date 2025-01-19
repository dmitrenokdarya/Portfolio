import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Theme } from "../../../../styles/Theme";


export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <a><Icon iconId="facebook" width="calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px)" /></a>
            <a><Icon iconId="twiter" width="calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px)"/></a>
            <a><Icon iconId="linkid" width="calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px)"/></a>
            <a><Icon iconId="shar" width="calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px)"/></a>
            <a><Icon iconId="youtube" width="calc( (100vw - 576px)/(1920 - 576) * (14 - 8.167) + 8.167px)"/></a>
        </StyledSocialIcons>
    );
};


const StyledSocialIcons = styled.div`
    display: flex;
    gap: 3.4375vw;
    margin: auto 0px auto 16.77vw;

    @media ${Theme.media.tablet}{
        margin: 0;
    }
`
