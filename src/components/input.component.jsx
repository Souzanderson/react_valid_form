import styled from "styled-components";

const InputComponent = ({
  label,
  id,
  type = "input",
  width = "auto",
  margin = "auto",
  onChange,
  ref,
}) => {
  return (
    <InputSection width={width} margin={margin}>
      <InputLabel>{label}</InputLabel>
      <InpuStyled id={id} type={type} onChange={onChange} ref={ref} />
    </InputSection>
  );
};

export default InputComponent;

const InpuStyled = styled.input`
  outline: none;
  background-color: unset;
  border: unset;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) =>
    props.background ? props.background : "white"};
  padding: 12px;
  border: 1px solid ${(props) => (props.color ? props.color : "#a1a1a1")};
  margin: 8px 20px 0 0;

  &:focus {
    border: 1px solid ${(props) => (props.selected ? props.selected : "green")};
  }
`;

const InputSection = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
`;

const InputLabel = styled.div``;
