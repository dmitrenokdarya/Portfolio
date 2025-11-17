import styled from "styled-components";
import { Email } from "./blocks/Email";
import { Container } from "../../components/Container";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { Theme } from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Icon iconId={'logoDark'} width={'calc( (100vw - 576px)/(1920 - 576) * (127 - 54.8) + 54.8px)'} height={'45'} viewBox={'0 0 127 45'} />
                <FooterTop>
                    <StyledMenu>
                        <Menu />
                    </StyledMenu>
                    <Email />
                </FooterTop>
            </Container>
            <FooterBottom>
                <StyledP>Template designed by : daarry.s</StyledP>
            </FooterBottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
`

const StyledMenu = styled.div`
    margin-right: 5.625rem;

    @media ${Theme.media.tablet}{
        margin-right: 0;
    }
`

const FooterTop = styled.div`
    height: 5rem;
    margin: 1.5rem 0px 11.025rem 0px;
    display: flex;
    justify-content: space-between;

    @media ${Theme.media.tablet}{
        flex-direction: column;
        height: auto;
        margin: 1.5rem 0px 8rem 0px;
    }
`

const FooterBottom = styled.div`
    display: flex;
    justify-content: center;
    height: 7rem;
    background-color: ${Theme.colors.secondaryBg.bottomFooterBlack};
    color: #8C8C8C;

    @media ${Theme.media.tablet}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 5rem;
    }
`

const StyledP = styled.p`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    margin: auto;

    @media ${Theme.media.tablet}{
        margin: 0;
    }
`