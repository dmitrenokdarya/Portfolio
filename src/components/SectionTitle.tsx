import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-transform: uppercase;
    background-color: ${Theme.colors.font.white};
    width: fit-content;
    padding: 0.167em 0.694em;
    font-family: "Inconsolata";
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.1em;
    line-height: 126%;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (22 - 12.83) + 12.83px);
    border: 0.09em solid ${Theme.colors.secondaryBg.titleBorder};
    position: absolute;
    z-index: 100;
`