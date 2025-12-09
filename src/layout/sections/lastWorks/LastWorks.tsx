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
                    <br/>A comprehensive social media platform developed from scratch using modern web technologies. The application enables users to create accounts, share multimedia content, interact through likes and comments, and build connections in a visually appealing interface. Built with a scalable architecture supporting real-time updates and responsive design for optimal user experience across all devices.
                    </>
            }
              />
              <Work
                marginBottom="6.84vh"
                link="https://dmitrenokdarya.github.io/my-to-do-list/"
                imgsrc={Todolist}
                width="100%"
                text="advanced task management"
                discription="Todo List application with task management capabilities. Developed using React and TypeScript for code reliability, with local storage for data saving. Features a clean, minimalist interface design."
              />
              <Work
                marginBottom="6.84vh"
                link="https://dmitrenokdarya.github.io/2-sprint-hw/#/pre-junior"
                imgsrc={Library}
                width="100%"
                text="react components library"
                discription="A compact UI Components Library with three complexity tiers (Pre-junior, Junior, Junior+). A small collection of reusable React components showcasing different implementation approaches from basic to advanced patterns."
              />
            <Button
              text="view all portfolio"
              margin="15vw 0 0 0"
              padding="0.65em 2.12em"
              width="17.18em"
              link="https://github.com/dmitrenokdarya"
            />
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
  grid-auto-rows: 5px; 
  gap: 3vw;
  grid-template-rows: masonry; 
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

const ProgressLabel = styled.span`
  display: inline-block;
  color: orange;
  font-weight: bold;
  margin-bottom: 10px;
`;

