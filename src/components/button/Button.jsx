import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type ButtonPropsType = {
    text: string;
}

export const Button = (props: ButtonPropsType) => {
    return (
        <Block>
            <StyledA href="">{props.text}</StyledA>
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
    width: 11.4em;
    height: 3.65em;
    padding: 0.65em 2.24em;
`

const StyledA = styled.a`
    text-transform: uppercase;
    font-weight: 500;
    line-height: 235%;
    text-align: center;
    color: ${Theme.colors.font.white};
    letter-spacing: 0.10em;
`