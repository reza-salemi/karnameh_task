import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import QuestionCard from "../components/question-card";
import { getQuestions } from "../features/question/question-slice";

const QuestionList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const { questions, isLoading } = useAppSelector((state) => state.question);

  if (isLoading) return <p>Loading...</p>;

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
              commentsCount={question.commentsCount}
            />
          ))
        : null}
    </>
  );
};

export default QuestionList;
