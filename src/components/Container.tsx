import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const Container = styled.div`
  max-width: 1280px;
  padding: 0px 7%;
  margin-left: auto;
  margin-right: auto;
  @media ${Theme.media.screen} {
    padding: 0px 13%;
  }
`;
