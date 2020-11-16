import React, { useEffect, useState, useRef, useContext } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import {
  Container,
  Title,
  ChoiceWrapper,
  Choice,
  ChoiceText,
} from '../styles/question';
import { SubmitButton } from '../styles/form';
import { get, getChoices } from '../utils/questionService';
import { update } from '../utils/choiceService';
import { GlobalContext } from '../context/GlobalUserContext';

const Question = ({history}) => {
  const [question, setQuestion] = useState();
  const [choices, setChoices] = useState();
  const [error, setError] = useState(null);
  const [chosenAnswers, setChosenAnswers] = useState([]);
  const questionId = useRef();
  const questionState = useContext(GlobalContext);

  const { id } = useParams();
  questionId.current = id;

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, err } = await get(questionId.current);
      if (err) {
        setError(err);
      } else {
        setQuestion(data);
      }
    };

    fetchQuestion();
  }, []);

  useEffect(() => {
    const fetchChoices = async () => {
      const { data, err2 } = await getChoices(questionId.current);
      if (err2) {
        setError(err2);
      } else {
        setChoices(data);
      }
    };
    fetchChoices();
  }, []);

  const removeAnswer = (answerToBeRemoved) => {
    const removed = chosenAnswers.filter(
      (answer) => answer !== answerToBeRemoved
    );
    setChosenAnswers([...removed]);
  };

  const handleCheckedAnswer = (newestChecked) => {
    // eslint-disable-next-line array-callback-return
    chosenAnswers.map(
      (existingCheckedAnswer) => {
        if (newestChecked === existingCheckedAnswer) {
          removeAnswer(newestChecked);
        }
      },
      setChosenAnswers((prev) => [newestChecked, ...prev])
    );
  };

  const handleAnswerVotes = async (e) => {
    console.log(chosenAnswers);
    const updates = await update(chosenAnswers);
    console.log(updates);
    chosenAnswers.map((ans) => removeAnswer(ans));
    console.log(questionId.current);
    console.log(id);
    history.push(`/results/`);
  };

  return (
    <Container>
      {error && <p>{error}</p>}
      {question && <Title key={question._id}>{question.question}</Title>}
      <div>
        {choices &&
          choices.map((choice) => {
            if (choice === null) return;
            return (
              <ChoiceWrapper key={choice._id}>
                <Choice
                  type="checkbox"
                  onChange={() => handleCheckedAnswer(choice)}
                />
                <ChoiceText>{choice.description}</ChoiceText>
              </ChoiceWrapper>
            );
          })}
      </div>
      <div>
        {question && (
          <SubmitButton key={question._id} onClick={handleAnswerVotes}>
            Submit answer
          </SubmitButton>
        )}
      </div>
    </Container>
  );
};

export default withRouter(Question);
