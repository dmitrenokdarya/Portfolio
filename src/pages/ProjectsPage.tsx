import styled from "styled-components";
import { Container } from "../components/Container";
import { FooterBottom, StyledP } from "../layout/footer/Footer";
import { Header } from "../layout/header/Header";
import { Theme } from "../styles/Theme";
import { FlexWrapper } from "../components/FlexWrapper";

export const ProjectsPage = () => {
  const Todolist = require("../assets/images/ToDoListVideo.mp4");
  const Library = require("../assets/images/LibraryVideo.mp4");
  const MyPixelgram = require("../assets/images/MyPixelgramVideo.mp4");
  return (
    <ProjectsWrapper>
      <Header />
      <H2Text color={Theme.colors.font.placeholder}>Projects</H2Text>
      <Container>
        <FlexWrapper direction="column" gap="20px">
          <ProjectWrapper
            p="social media platform"
            inProgress
            photo={MyPixelgram}
            linkDemo="https://mypixelgram.ru"
            linkGitHub="https://github.com/dev47771/mypixelgram"
            discription={
              <>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize:
                      "calc((100vw - 576px) / (1920 - 576) * (21 - 10) + 10px)",
                  }}
                >
                  Frontend Development & Architecture:
                </p>
                1. Password Recovery with reCAPTCHA v3:
                <br />- Developed password recovery flow: email input form →
                link sending → password change form
                <br />- Integrated Google reCAPTCHA v3 for bot protection
                <br />
                2. Post Creation with Multi-Modal Interface:
                <br />- Developed complex PostCreator component managing
                navigation between 4 modal windows
                <br />- Implemented state for storing uploaded photos and post
                data
                <br />- Created modal window for applying filters to photos
                according to project design 1. Password Recovery with reCAPTCHA
                <br />
                3. Profile Settings Page with Validation
                <br />- Implemented tab navigation between 4 settings sections
                <br />- Developed profile editing form with 7 fields: Username,
                First Name, Last Name, Date of Birth, Country, City, About Me
                <br />- Created custom DatePicker with two-way synchronization
                (calendar ↔ input)n
                <br />- Configured validation for each form field according to
                technical requirements
                <br />- Implemented dependent selectors "Country → City" with
                data from backend
                <br />- Blocked form submission when required fields are invalid
                <br />
                <br />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize:
                      "calc((100vw - 576px) / (1920 - 576) * (21 - 10) + 10px)",
                  }}
                >
                  {" "}
                  UI/UX & Design System:
                </p>
                - Designed and implemented a design system with custom
                components using Radix UI + Tailwind CSS;
                <br />- Created documentation in Storybook for custom
                components;
                <br />- Added accessibility features: keyboard navigation,
                screen reader support.
                <br />
                <br />
                <p
                  style={{
                    fontWeight: "700",
                    fontSize:
                      "calc((100vw - 576px) / (1920 - 576) * (21 - 10) + 10px)",
                  }}
                >
                  Team Leadership & Project Management:
                </p>
                - Managed a team of 5 frontend developers with distribution
                across feature teams;
                <br />- Implemented Scrum processes with two-week sprints and
                planning poker;
                <br />- Coordinated cross-functional collaboration with the
                backend team.
              </>
            }
          />
          <ProjectWrapper
            p="advanced task management"
            photo={Todolist}
            linkDemo="https://dmitrenokdarya.github.io/my-to-do-list/"
            linkGitHub="https://github.com/dmitrenokdarya/my-to-do-list"
            discription={
              <>
                - Designed and implemented a task tracker with a flexible
                filtering system;
                <br />- Configured state management using Redux Toolkit with RTK
                Query for CRUD operation;
                <br />- Developed an interface based on Material-UI with
                component customization
              </>
            }
          />
          <ProjectWrapper
            p="react components library"
            photo={Library}
            linkDemo="https://dmitrenokdarya.github.io/2-sprint-hw/#/pre-junior"
            linkGitHub="https://github.com/dmitrenokdarya/2-sprint-hw"
            discription={
              <>
                - Built an educational React-based UI component library
                featuring: interactive chat component, bi-directionally
                synchronized form controls, sortable and filterable data tables,
                countdown timer with controls, pagination system, live search
                functionality, custom validation framework, and dynamic theme
                switching;
                <br />- Integrated Local Storage API, geolocation, semantic
                markup with a11y;
                <br />- Utilized React Hooks, Context API, custom validators.
              </>
            }
          />
        </FlexWrapper>
      </Container>
      <FooterBottom>
        <StyledP>Designed and made by daarry.s</StyledP>
      </FooterBottom>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.div`
  background-color: ${Theme.colors.font.paragraph};
  color: ${Theme.colors.primaryBg};
`;

const StyledSkill = styled.a`
  font-weight: 500;
  font-size: calc((100vw - 576px) / (1920 - 576) * (22 - 10) + 10px);
  line-height: 124%;
  letter-spacing: 0.02em;
  width: fit-content;
  color: ${Theme.colors.primaryBg};
`;

const PProject = styled.p`
  font-size: calc((100vw - 576px) / (1920 - 576) * (19 - 10) + 10px);
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 238%;
  margin-top: 15px;
`;

type ProjectWrapperProps = {
  p: string;
  photo?: string;
  linkDemo: string;
  linkGitHub: string;
  discription: string | React.ReactNode;
  inProgress?: boolean;
};

const ProjectWrapper = ({
  p,
  photo,
  discription,
  linkDemo,
  linkGitHub,
  inProgress,
}: ProjectWrapperProps) => {
  return (
    <FlexWrapper direction="column" style={{ marginBottom: "100px" }}>
      <FlexWrapper align="center">
        {inProgress && <ProgressLabel>In progress :)</ProgressLabel>}
        <H3Text>{p}</H3Text>
        {inProgress && <ProgressLabel>In progress :)</ProgressLabel>}
      </FlexWrapper>
      <FlexWrapper gap="15px" style={{ margin: "5px auto 30px auto" }}>
        <StyledSkill href={linkDemo}>Demo</StyledSkill> |{" "}
        <StyledSkill href={linkGitHub}>GitHub</StyledSkill>
      </FlexWrapper>
      <video controls playsInline loop preload="metadata" autoPlay muted>
        <source src={photo} type="video/mp4" />
      </video>
      <H4Text>Key Responsibilities:</H4Text>
      <PProject>{discription}</PProject>
    </FlexWrapper>
  );
};

type H2TextProps = {
  color: string;
};

const H2Text = styled.h2<H2TextProps>`
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-size: calc((100vw - 576px) / (1920 - 576) * (40 - 10) + 10px);
  margin: -50px auto 80px auto;
  width: fit-content;
`;

const H3Text = styled.h3`
  font-weight: 300;
  color: ${Theme.colors.font.placeholder};
  font-size: calc((100vw - 576px) / (1920 - 576) * (35 - 10) + 10px);
  margin: 0 auto 0 auto;
  width: fit-content;
`;

const H4Text = styled.h4`
  font-weight: 700;
  color: ${Theme.colors.font.placeholder};
  font-size: calc((100vw - 576px) / (1920 - 576) * (30 - 10) + 10px);
  margin: 20px 0 0 0;
  width: fit-content;
`;

const ProgressLabel = styled.span`
  font-size: calc((100vw - 576px) / (1920 - 576) * (15 - 10) + 10px);
  color: #ee8f00ff;
  font-weight: bold;
  margin: 0 auto 5px auto;
`;
