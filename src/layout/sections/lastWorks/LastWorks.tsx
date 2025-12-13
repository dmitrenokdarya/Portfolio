import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Work } from "./work/Work";
import { Button } from "../../../components/button/Button";
import { Theme } from "../../../styles/Theme";

import Todolist from "../../../assets/images/todolist.jpg";
import Library from "../../../assets/images/library.jpg";
import MyPixelgram from "../../../assets/images/MyPixelgram.jpg";
import { Link } from "react-router-dom";

export const LastWorks = () => {
  return (
    <Container id="portfolio">
      <FlexWrapper justify="center">
        <StyledLastWorks>
          <TitleBlock>
            <ZText>portfolio</ZText>
            <SectionTitle>Latest works</SectionTitle>
          </TitleBlock>
          <GridBlockWrapper>
            <Work
              marginBottom="6.84vh"
              link="https://mypixelgram.ru/"
              imgsrc={MyPixelgram}
              width="100%"
              text="social media platform"
              discription={
                <>
                  <ProgressLabel>In progress :)</ProgressLabel>
                  <br />
                  A full-fledged social network built from the ground up using a
                  modern technology stack. The platform enables users to:
                  <br />- post photos to their feed,
                  <br />- follow other users' profiles,
                  <br />- purchase a premium subscription,
                  <br />- leave comments,
                  <br />- like content,
                  <br />- exchange private messages.
                  <br />
                  <br />
                  And much more.
                </>
              }
            />
            <Work
              marginBottom="6.84vh"
              link="https://dmitrenokdarya.github.io/my-to-do-list"
              imgsrc={Todolist}
              width="100%"
              text="advanced task management"
              discription="A task management application built with React and TypeScript to ensure code reliability and strict typing. All tasks are stored in the browser's local storage (localStorage), guaranteeing data persistence between sessions. The interface features a clean, minimalist design that focuses on productivity."
            />
            <Work
              marginBottom="6.84vh"
              link="https://dmitrenokdarya.github.io/2-sprint-hw/#/pre-junior"
              imgsrc={Library}
              width="100%"
              text="react components library"
              discription="A compact library of reusable React components across three difficulty levels (Pre-junior, Junior, Junior+)."
            />
            <Link to="/projects" style={{ display: "block", width: "100%" }}>
              <Button
                text="view all portfolio"
                padding="0.65em 2.12em"
                width="100%"
                margin="280px 0 0 0 "
              />
            </Link>
          </GridBlockWrapper>
        </StyledLastWorks>
      </FlexWrapper>
    </Container>
  );
};

const StyledLastWorks = styled.section`
  background-color: ${Theme.colors.primaryBg};
  margin-bottom: 11rem;

  @media ${Theme.media.tablet} {
    margin-bottom: 13.01vh;
  }
`;

const TitleBlock = styled.div`
  font-size: calc((100vw - 576px) / (1920 - 576) * (120 - 70) + 70px);
  margin: 0 auto;
  margin-bottom: 3.97vh;
  width: 3.017em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${Theme.media.tablet} {
    margin: 3vh auto;
  }
`;

const GridBlockWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-auto-rows: 13px;
  gap: 3vh;
  grid-template-rows: masonry;

  @media ${Theme.media.lgScreen} {
    grid-auto-rows: 15px;
  }
`;

const ZText = styled.span`
  font-family: "Jost";
  font-weight: 300;
  text-transform: uppercase;
  line-height: 150%;
  letter-spacing: -0.04em;
  text-align: center;
  color: ${Theme.colors.secondaryBg.titleBorder};
  z-index: 1;
`;

export const ProgressLabel = styled.span`
  display: inline-block;
  color: orange;
  font-weight: bold;
  margin-bottom: 10px;
`;
