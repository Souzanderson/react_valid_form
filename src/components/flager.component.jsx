import styled from "styled-components";

export const Flagger = ({ text = "", color = "red", margin = "0", flag=null }) => {
  return (
    <FlaggerStyled color={color} margin={margin}>
      {!flag ? text : ""}
    </FlaggerStyled>
  );
};

const FlaggerStyled = styled.div`
  height: 12px;
  margin: 2px;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "red")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
