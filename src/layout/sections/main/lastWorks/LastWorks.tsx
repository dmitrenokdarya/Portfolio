import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import MagazineGirl from "../../../../assets/images/magazinegirl.webp"
import Bottle from "../../../../assets/images/makeup.webp"
import Magazine from "../../../../assets/images/magazine.png"
import Coffee from "../../../../assets/images/coffee.png"
import Mockup from "../../../../assets/images/mockup.webp"
import Perfume from "../../../../assets/images/perfume.webp"
import { SectionTitle } from "../../../../components/SectionTitle";
import { Work } from "./work/Work";
import { Theme } from "../../../../styles/Theme";
import { Container } from "../../../../components/Container";
import { Button } from "../../../../components/button/Button";


export const LastWorks = () => {
    return (
        <Container>
            <FlexWrapper justify="center">
                <StyledLastWorks>
                    <TitleBlock>
                        <ZText>portfolio</ZText>
                        <SectionTitle>Latest works</SectionTitle>
                    </TitleBlock>
                    <FlexWrapper direction="row" gap="62px">
                        <FlexWrapper direction="column">
                            <Work marginBottom="62px" imgsrc={MagazineGirl} width="617px" text='magazine front design'/>
                            <Work marginBottom="62px" imgsrc={Bottle} width="617px" text='product bottle design'/>
                            <Work imgsrc={Magazine} width="617px" text='magazine & brochure mockup'/>
                        </FlexWrapper>
                        <FlexWrapper direction="column">
                            <Work marginBottom="62px" imgsrc={Coffee} width="601px" text='coffee bottle mockup'/>
                            <Work marginBottom="62px" imgsrc={Mockup} width="601px" text='product tag mockup'/>
                            <Work marginBottom="148px" imgsrc={Perfume} width="601px" text='perfume brand identity'/>
                            <Button text="view all portfolio"/>
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledLastWorks>
            </FlexWrapper>
        </Container>
    );
};

const StyledLastWorks = styled.section`
    background-color: ${Theme.colors.primaryBg};
    min-height: 2482px;
    margin-bottom: 343px;
`

const TitleBlock = styled.div`
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 120px;
    line-height: 150%;
    letter-spacing: -0.04em;
    text-align: center;
    color: ${Theme.colors.secondaryBg.titleBorder};
    z-index: 1;
`