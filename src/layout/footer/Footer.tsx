import styled from "styled-components";
import { Subscribe } from "./blocks/Subscribe";
import { Email } from "./blocks/Email";
import { SocialIcons } from "./blocks/SocialIcons";
import { Container } from "../../components/Container";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { Theme } from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Icon iconId={'logoDark'} width={'calc( (100vw - 576px)/(1920 - 576) * (127 - 54.8) + 54.8px)'} heigth={'45'} viewBox={'0 0 127 45'} />
                <FooterTop>
                    {/* <Subscribe /> */}
                    <StyledMenu>
                        <Menu />
                    </StyledMenu>
                    <Email />
                </FooterTop>
            </Container>
            <FooterBottom>
                <SocialIcons />
                <StyledP>Template designed by : daarry.s</StyledP>
            </FooterBottom>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    height: 64.38vh;
`

const StyledMenu = styled.div`
    margin-right: 5.625vw;

    @media ${Theme.media.tablet}{
        margin-right: 0;
    }
`

const FooterTop = styled.div`
    height: 37vh;
    margin: 1.5vh 0px 11.025vh 0px;
    display: flex;
    justify-content: space-between;

    @media ${Theme.media.tablet}{
        flex-direction: column;
        height: auto;
        margin: 1.5vh 0px 8vh 0px;
    }
`

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    height: 16.538vh;
    background-color: ${Theme.colors.secondaryBg.bottomFooterBlack};
    color: #8C8C8C;

    @media ${Theme.media.tablet}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 10vh;
        gap: 1vh;
    }
`

const StyledP = styled.p`
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 9.917) + 9.917px);
    margin: auto 16.77vw auto 0px;

    @media ${Theme.media.tablet}{
        margin: 0;
    }
`