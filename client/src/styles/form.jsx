import styled from 'styled-components';

const Form = styled.form`
  background-color: ${(props) => props.theme.colors.darkPrimary};
  font-family: ${(props) => props.theme.fonts[0]};
  padding: 20px 50px 20px 50px;
  max-width: 60%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SubmitButton = styled.button`
  background-color: #ac3232 !important;
  color: white !important;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.2px;
  padding: 20px;
  transition: 0.4s ease background;
  width: 100%;
  border-radius: 0;
  border: none;

  &:focus {
    box-shadow: none;
    opacity: 1;
  }

  &:hover {
    box-shadow: none;
    opacity: 1;
    background-color: white !important;
    color: black !important;
  }
`;
const Input = styled.input`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.2px;
  transition: 0.3s ease background, color;
  color: white;
  border-radius: 0;
  padding: 15px;
  margin-bottom: 10px;
`;
const Title = styled.h2`
  margin-top: 10px;
  color: white;
`;
const Label = styled.label`
  color: #c4c0c0;
`;

export { Form, SubmitButton, Input, Title, Label };
