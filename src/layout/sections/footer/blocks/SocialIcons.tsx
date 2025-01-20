import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { Theme } from "../../../../styles/Theme";


export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <StyledA><Icon iconId="facebook" width="14px" /></StyledA>
            <StyledA><Icon iconId="twiter" width="14px"/></StyledA>
            <StyledA><Icon iconId="linkid" width="14px"/></StyledA>
            <StyledA><Icon iconId="shar" width="14px"/></StyledA>
            <StyledA><Icon iconId="youtube" width="14px" viewBox="0 0 18 14"/></StyledA>
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

const StyledA = styled.a`
    &:hover{
        cursor: pointer;
    }
`
