import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import QuestionCard from "../components/question-card";
import { getQuestions } from "../features/question/question-slice";

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
