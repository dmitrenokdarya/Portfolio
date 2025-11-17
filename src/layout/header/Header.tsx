import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { BurgerMenu } from "../../components/menu/BurgerMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-between" align="center">
                <Logo/>
                <SizeBoxIcon>
                    <BurgerMenu/>
                </SizeBoxIcon>
            </FlexWrapper>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 7vh 4.2vw 14vh 5.2vw;

    @media ${Theme.media.screen} {
        padding: 7vh 4.2vw 10vh 4.2vw;
    }

    @media ${Theme.media.lgTablet} {
        padding: 7vh 10vw 14vh 10vw;
    }

    @media ${Theme.media.tablet} {
        padding: 3vh 10vw 14vh 10vw;
    }
`

const SizeBoxIcon = styled.div`
    &:hover{
        cursor: pointer;
    }
`