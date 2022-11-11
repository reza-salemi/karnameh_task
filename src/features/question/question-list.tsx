import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import QuestionCard from "./question-card";
import { getQuestions } from "./question-slice";

const QuestionList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const { questions } = useAppSelector((state) => state.question);

  return (
    <>
      {questions
        ? questions.map((question) => (
            <QuestionCard
              type="question"
              key={question.id}
              id={question.id}
              title={question.title}
              text={question.text}
              time={question.time}
              date={question.date}
              commentsCount={question.comments}
            />
          ))
        : null}
    </>
  );
};

export default QuestionList;
