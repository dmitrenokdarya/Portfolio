import styled from "styled-components";
import { Theme } from "../styles/Theme";
import { Button } from "../components/button/Button";
import { FlexWrapper } from "../components/FlexWrapper";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (

    <FlexWrapper direction="column" align="center" justify="center" style={{width:'310px', margin:'auto'}}>
      <ErrorText>Error Page</ErrorText>
      <p style={{marginBottom:'80px'}}>(don't worry)</p>
      <Link to="/"><Button text="go to the main page :)" width='280px'/></Link>
    </FlexWrapper>
  );
};

const ErrorText = styled.p`
  color: ${Theme.colors.secondaryBg.quoteBlack};
  font-weight: 300;
  font-size: calc((100vw - 576px) / (1920 - 576) * (40 - 10) + 10px);
  margin: 300px auto 10px auto;
  width: fit-content;
`;
