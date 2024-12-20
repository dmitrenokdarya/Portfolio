import React from "react";
import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

type SkillPropsType = {
    skill: string
    percentage: string
}

type SkillPerPropsType = {
    width: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <li>{props.skill}</li>
            <SkillBar>
                <SkillPer width={props.percentage}/>
            </SkillBar>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    font-weight: 400;
    font-size: 17px;
    line-height: 124%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${Theme.colors.font.littleText};
    margin-bottom: 34px;
    &:last-child{
        margin-bottom: 0px;
    }
`

const SkillBar = styled.div`
    display: flex; 
    align-items: center;
    height: 1px;
    background-color: ${Theme.colors.secondaryBg.skillsLine};
    margin-top: 20px;
`

const SkillPer = styled.div<SkillPerPropsType>`
    height: 3px;
    width: ${props => props.width || '0%'};
    background-color: ${Theme.colors.secondaryBg.bigSkillLine};
`