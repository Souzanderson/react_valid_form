import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 35vw;
  height: 100vh;
  position: relative;
`;

export const ButtonSend = styled.div`
  padding: 1em 2.5em;
  color: #fff;
  border-radius: 0.25em;

  background-image: linear-gradient(75deg, #fdc830, #f37335, #f12711, #f5af19);
  background-size: 300%;
  background-position: left;
  width: 150px;
  text-align: center;

  transition: 300ms background-position ease-in-out;

  margin: 12px;
  float: right;
  cursor: pointer;

  &:hover {
    background-position: right;
  }
`;
