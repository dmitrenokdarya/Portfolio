import styled from "styled-components";
import { Container } from "../components/Container";
import { FooterBottom, StyledP } from "../layout/footer/Footer";
import { Header } from "../layout/header/Header";
import { Theme } from "../styles/Theme";
import MyPhoto from "../assets/images/DmitrenokDarya.png";
import { FlexWrapper } from "../components/FlexWrapper";

export const AboutMePage = () => {
  const Skills = {
    FrontendCore: ["JavaScript", "TypeScript", "React.js", "HTML5", "CSS"],
    StateManagement: ["React Router Dom", "RTK Query", "REST API"],
    FormsValidation: ["React Hook Form", "Zod"],
    UILibraries: ["Radix UI", "Material UI"],
    Testing: ["Unit Tests (Jest)", "Storybook"],
    Tools: ["Git/GitHub", "Node.js", "ESLint", "Prettier", "Figma"],
    Languages: ["English (B1)"],
  };

  return (
    <AboutMeWrapper>
      <Header />

      <div style={{ padding: "0 4.2vw 0 5.2vw" }}>
        <H2Text color={Theme.colors.primaryBg}>about</H2Text>
        <FlexWrapper gap="20px">
          <Description>
            Frontend Developer with 1+ years of experience in the React /
            Next.js / TypeScript stack. Actively interested in modern approaches
            within the React ecosystem, specifically studying the principles of
            Server Components in Next.js. Looking towards React Native mobile
            development as a promising direction for growth. Open to your
            opportunities.
          </Description>
          <img
            src={MyPhoto}
            alt="DmitrenokDarya"
            width={700}
            style={{ marginTop: "-300px" }}
          />
        </FlexWrapper>
      </div>

      <SkillsBlock color={Theme.colors.font.placeholder}>
        <Container>
          <H2Text color={Theme.colors.secondaryBg.buttonsBlack}>skills</H2Text>
          <FlexWrapper direction="column" gap="20px">
            <SkillsWrapper p="Frontend Core" array={Skills.FrontendCore} />
            <SkillsWrapper
              p="State Management & Data Fetching"
              array={Skills.StateManagement}
            />
            <SkillsWrapper
              p="Forms & Validation"
              array={Skills.FormsValidation}
            />
            <SkillsWrapper p="UI Libraries" array={Skills.UILibraries} />
            <SkillsWrapper p="Testing & Development" array={Skills.Testing} />
            <SkillsWrapper p="Tools" array={Skills.Tools} />
            <SkillsWrapper p="Languages" array={Skills.Languages} />
          </FlexWrapper>
        </Container>
      </SkillsBlock>

      <SkillsBlock color="">
        <Container>
          <H2Text color={Theme.colors.primaryBg}>education</H2Text>
          <FlexWrapper direction="column" gap="20px">
            <StyledProff>Front-end developer</StyledProff>
            <StyledEd>
              <a
                style={{ cursor: "pointer", color: Theme.colors.primaryBg }}
                href="https://it-incubator.io"
              >
                IT-INCUBATOR
              </a>
              | 2024
            </StyledEd>
            <StyledDisc>
              - Intensive program focused on the modern React/TypeScript stack.
              <br />- Completion of 3+ educational projects with increasing
              complexity, including a final capstone project.
              <br />- Participation in weekly code reviews, Scrum methodology
              sprints, and workshops led by industry mentors.
            </StyledDisc>
            <StyledProff>Bachelor's Degree</StyledProff>
            <StyledEd>Belarusian State University | 2019–2023</StyledEd>
          </FlexWrapper>
        </Container>
      </SkillsBlock>

      <FooterBottom>
        <StyledP>Designed and made by daarry.s</StyledP>
      </FooterBottom>
    </AboutMeWrapper>
  );
};

const StyledProff = styled.p`
  font-weight: 700;
  font-size: calc((100vw - 576px) / (1920 - 576) * (27 - 10) + 10px);
`;
const StyledEd = styled.p`
  margin-top: -15px;
  font-size: calc((100vw - 576px) / (1920 - 576) * (20 - 10) + 10px);
`;
const StyledDisc = styled.p`
  margin-bottom: 40px;
  font-size: calc((100vw - 576px) / (1920 - 576) * (22 - 10) + 10px);
`;

const AboutMeWrapper = styled.div`
  background: #818989;
  color: ${Theme.colors.primaryBg};
`;

const Description = styled.p`
  font-size: calc((100vw - 576px) / (1920 - 576) * (25 - 10) + 10px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 238%;
  color: ${Theme.colors.primaryBg};
  margin-bottom: 3.53em;
`;

const StyledSkill = styled.div`
  font-weight: 500;
  font-size: calc((100vw - 576px) / (1920 - 576) * (22 - 10) + 10px);
  line-height: 124%;
  letter-spacing: 0.02em;
  width: fit-content;
  padding: 0 20px 0 0;
  color: ${Theme.colors.secondaryBg.quoteBlack};
`;

const PSkills = styled.p`
  font-size: calc((100vw - 576px) / (1920 - 576) * (22 - 10) + 10px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 238%;
  color: ${Theme.colors.font.topFooterActiveMenu};
`;

type SkillsWrapperProps = {
  p: string;
  array: string[];
};

const SkillsWrapper = ({ p, array }: SkillsWrapperProps) => {
  return (
    <FlexWrapper align="center">
      <PSkills>{p}</PSkills>
      <div
        style={{
          flex: 1,
          borderBottom: "1px solid #ccc",
          margin: "0 10px",
          alignSelf: "flex-end",
          marginBottom: "8px",
        }}
      />
      {array.map((s) => (
        <StyledSkill>{s}</StyledSkill>
      ))}
    </FlexWrapper>
  );
};

const SkillsBlock = styled.div<H2TextProps>`
  margin: 0 auto;
  padding: 150px 0 200px 0;
  background: ${(props) => props.color};
`;

type H2TextProps = {
  color: string;
};

const H2Text = styled.h2<H2TextProps>`
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: calc((100vw - 576px) / (1920 - 576) * (40 - 10) + 10px);
  margin-bottom: 40px;
`;
