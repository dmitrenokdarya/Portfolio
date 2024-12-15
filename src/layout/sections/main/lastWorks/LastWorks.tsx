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


export const LastWorks = () => {
    return (
        <StyledLastWorks>
            <SectionTitle>Latest works</SectionTitle>
            <FlexWrapper direction="row">
                <FlexWrapper direction="column">
                    <Work imgsrc={MagazineGirl} text='magazine front design'/>
                    <Work imgsrc={Bottle} text='product bottle design'/>
                    <Work imgsrc={Magazine} text='magazine & brochure mockup'/>
                </FlexWrapper>
                <FlexWrapper direction="column">
                    <Work imgsrc={Coffee} text='coffee bottle mockup'/>
                    <Work imgsrc={Mockup} text='product tag mockup'/>
                    <Work imgsrc={Perfume} text='perfume brand identity'/>
                    <a href="">view all portfolio</a>
                </FlexWrapper>
            </FlexWrapper>
        </StyledLastWorks>
        
    );
};

const StyledLastWorks = styled.section`
    background-color: #cc4add6e;
    min-height: 2482px;
    margin-bottom: 343px;
`
