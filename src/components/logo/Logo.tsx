import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
    return (
        <a href="">
            <Icon iconId={'logo'} width={'calc( (100vw - 576px)/(1920 - 576) * (94 - 54.8) + 54.8px)'} heigth={'45'} viewBox={'0 0 94 45'}/>
        </a>
    );
};
