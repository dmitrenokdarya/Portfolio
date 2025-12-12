import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";

type SkillPropsType = {
    skill: string
    // percentage: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <li>{props.skill}</li>
            {/* <SkillBar>
                <SkillPer width={props.percentage}/>
            </SkillBar> */}
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    font-weight: 400;
    font-size: calc( (100vw - 576px)/(1920 - 576) * (17 - 10) + 10px);
    line-height: 124%;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${Theme.colors.font.littleText};
    margin-bottom: 2em;
    width: fit-content;
    
    &:last-child{
        margin-bottom: 0px;
    }

    @media ${Theme.media.screen}{
        margin-bottom: 3em;
    }

    @media ${Theme.media.tablet}{
        margin-bottom: 2em;
        display: flex;
        flex-direction: column;
        width: auto;
    }
`
