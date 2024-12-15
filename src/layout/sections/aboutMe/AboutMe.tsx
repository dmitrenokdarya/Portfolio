import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";


export const AboutMe = () => {
    return (
        <StyledAboutMe>
            <SectionTitle>who am i</SectionTitle>
            <FlexWrapper>
                <div>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</p>
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
    background-color: #4add5e71;
`