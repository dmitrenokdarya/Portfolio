import React from "react";
import styled from "styled-components";

type SkillPropsType = {
    skill: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <li>{props.skill}</li>

        </StyledSkill>
    );
};

const StyledSkill = styled.div`

`