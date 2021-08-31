import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const theme = {
  primary: "#3e641b",
  secondary: "#8dc63f",
  tertiary: "#f1f1f1",
  red: "#c63f3f",
  green: "#8dc63f",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  /* width */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #bcd4da;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${theme.primary};
  border-radius: 10px;
}

::-moz-selection {
  /* Code for Firefox */
  color: ${theme.tertiary};
  background: ${theme.primary};
}

::selection {
  color: ${theme.tertiary};
  background: ${theme.primary};
}
`;

const Container = styled.main``;

const TextSpan = styled.span`
  padding-left: ${(props) => (props.left ? props.left : "unset")};
  padding-right: ${(props) => (props.right ? props.right : "unset")};
  padding-top: ${(props) => (props.top ? props.top : "unset")};
  padding-bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

const NoSelection = styled.section`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: 0;
`;

const FlexCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.div`
  background: url(${props => props.src? props.src : 'unset'});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: ${props => props.height? props.height : 'auto'};
  width: ${props => props.width? props.width : 'auto'};
  margin: ${props => props.margin? props.margin : 'unset'};
  padding: ${props => props.padding? props.padding : 'unset'};
`

export { GlobalStyle, Image, theme, NoSelection, Container, TextSpan, FlexCards };
