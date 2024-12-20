import styled from "styled-components";
import { Theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type ButtonPropsType = {
    text: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <FlexWrapper justify="space-between">
            <StyledA href="">{props.text} <Icon iconId="buttonStrel" width="10" height="9" viewBox="0 0 10 9"/></StyledA>
        </FlexWrapper>
    )
}

const StyledA = styled.a`
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    line-height: 235%;
    text-align: center;
    color: ${Theme.colors.font.white};
    background-color: ${Theme.colors.secondaryBg.buttonsBlack};
    letter-spacing: 0.10em;
    padding: 11px 38px;
`