import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/button/Button";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  const Skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS",
    "Redux Toolkit",
    "RTK Query",
    "React Hook Form",
    "Zod",
    "Tailwind CSS",
    "Radix UI",
    "Git",
    "REST API",
    "Vite",
    "Figma",
  ];

  return (
    <Container>
      <StyledAboutMe>
        <TitleBlock>
          <ZText>about</ZText>
          <SectionTitle>who am i</SectionTitle>
        </TitleBlock>
        <FlexBlock>
          <TextButtonBlock>
            <AboutMeText>
              Frontend Developer with 1+ years of experience in the React /
              Next.js / TypeScript stack. Actively interested in modern
              approaches within the React ecosystem, specifically studying the
              principles of Server Components in Next.js. Looking towards React
              Native mobile development as a promising direction for growth.
              Open to your opportunities.
            </AboutMeText>
            <Link to="/aboutme">
              <Button text="about me" />
            </Link>
          </TextButtonBlock>
          <FlexBlockWrapper>
            <StyledUl>
              {Skills.map((s) => (
                <Skill skill={s}/>
              ))}
            </StyledUl>
          </FlexBlockWrapper>
        </FlexBlock>
      </StyledAboutMe>
    </Container>
  );
};

export const TitleBlock = styled.div`
  font-size: calc((100vw - 576px) / (1920 - 576) * (120 - 70) + 70px);
  margin-bottom: 3rem;
  width: 3.017em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Theme.media.tablet} {
    margin: 3vh auto;
  }
`;

const StyledAboutMe = styled.section`
  margin-bottom: 13.01vh;
  background-color: ${Theme.colors.primaryBg};
  z-index: 0;
`;

export const ZText = styled.span`
  font-family: "Jost";
  font-weight: 300;
  text-transform: uppercase;
  line-height: 150%;
  letter-spacing: -0.04em;
  text-align: center;
  color: ${Theme.colors.secondaryBg.titleBorder};
  z-index: 1;
`;

const FlexBlock = styled.div`
  display: flex;
  gap: 7vw;

  @media ${Theme.media.tablet} {
    flex-direction: column;
  }
`;

export const AboutMeText = styled.p`
  font-size: calc((100vw - 576px) / (1920 - 576) * (17 - 10) + 10px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 238%;
  color: ${Theme.colors.font.paragraph};
  margin-bottom: 3.53em;

  @media ${Theme.media.screen} {
    margin-bottom: 1.8em;
  }

  @media ${Theme.media.tablet} {
    margin-bottom: 3.53em;
  }
`;

const TextButtonBlock = styled.div`
  max-width: 49.84%;

  @media ${Theme.media.tablet} {
    max-width: 100%;
    margin-bottom: 3.53em;
  }
`;
const FlexBlockWrapper = styled.div``;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 220px);
`;
