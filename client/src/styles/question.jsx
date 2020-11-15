import styled from 'styled-components';

const Container = styled.div`
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
const Title = styled.h2`
  color: white;
  margin: 0px auto 20px auto;
`;
const Choice = styled.input`
  height: 25px;
  width: 25px;
  background-color: #eee;

  &:hover {
    background-color: #ccc;
  }
`;
const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 7px;
`;
const ChoiceText = styled.p`
  color: white;
  margin: 7px 5px;
  padding: 0;
`;
export { Container, Title, Choice, ChoiceWrapper, ChoiceText };
