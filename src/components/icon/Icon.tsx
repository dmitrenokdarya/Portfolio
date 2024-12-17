import React from "react";
import styled from "styled-components";
import iconsSprite from "../../assets/images/image-sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    heigth?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "17"} height={props.heigth || "14"} viewBox={props.viewBox || "0 0 17 14"} fill="none" >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};