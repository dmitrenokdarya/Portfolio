import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Theme } from "../../../styles/Theme";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <ZText>about</ZText>
            <SectionTitle>who am i</SectionTitle>
            <FlexWrapper>
                <div>
                    <AboutMeText>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</AboutMeText>
                    <div>
                        <a href="">about me</a>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <ul>
                        <Skill skill='photoshop'/>
                        <Skill skill='illustrator'/>
                        <Skill skill='figma'/>
                        <Skill skill='after effect'/>
                        <Skill skill='indesign'/>
                    </ul>
                </div>
            </FlexWrapper>
    </StyledAboutMe>
    );
};

const StyledAboutMe = styled.section`
    min-height: 541px;
    margin-bottom: 118px;
    background-color: ${Theme.colors.primaryBg};
`
const ZText = styled.span`
    font-family: 'Jost';
    font-weight: 300;
    text-transform: uppercase;
    font-size: 120px;
    color: ${Theme.colors.secondaryBg.titleBorder};
`

const AboutMeText = styled.p`
    font-size: 17px;
    letter-spacing: 0.2em;
    line-height: 2.375;
    color: ${Theme.colors.font.paragraph};
`