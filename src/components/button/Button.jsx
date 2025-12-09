import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type ButtonPropsType = {
    text: string;
    padding?: string;
    width?: string;
    margin?:string;
    link?:string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <Block padding={props.padding} width={props.width} margin={props.margin}>
            <StyledA href={props.link || ''}>{props.text}</StyledA>
            <Icon iconId="buttonStrel" width="calc( (100vw - 576px)/(1920 - 576) * (10 - 5.83) + 5.83px)" height="9" viewBox="0 0 10 9"/>
        </Block>
    )
}

const Block = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Theme.colors.secondaryBg.buttonsBlack};
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 10) + 10px);
    width: ${props => props.width || '11.4em'};
    height: 3.65em;
    padding: ${props => props.padding || '0.65em 2.24em'};
    margin: ${props => props.margin || ''};
    transition: all 0.2s ease;

    &:hover{
        cursor: pointer;
        width: 100%;
    }
`

const StyledA = styled.a`
    text-transform: uppercase;
    font-weight: 500;
    line-height: 235%;
    text-align: center;
    color: ${Theme.colors.font.white};
    letter-spacing: 0.10em;
`