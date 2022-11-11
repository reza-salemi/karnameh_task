import QuestionCard from "../components/question-card";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getQuestionById } from "../features/question/question-by-id.slice";
import { getCommentsById } from "../features/comments/comment.slice";

const QuestionDetails = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(getQuestionById(id as string));
    dispatch(getCommentsById(id as string));
  }, [dispatch, id]);

  const { question, isLoading } = useAppSelector((state) => state.questionById);

  const { comments, isLoading: loadingComment } = useAppSelector(
    (state) => state.comments
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <QuestionCard
        type="card"
        title={question[0]?.title}
        text={question[0]?.text}
        time={question[0]?.time}
        date={question[0]?.date}
        commentsCount={question[0]?.commentsCount}
      />

      <section className="mb-8">
        <h2 className="text-right text-2xl font-bold mb-4">پاسخ ها</h2>
        {loadingComment && (
          <p className="flex justify-center">در حال دریافت پاسخ ها</p>
        )}
        {comments.length ? (
          comments.map((comment) => (
            <QuestionCard
              type="comment"
              key={comment.id}
              title={comment.author}
              text={comment.text}
              time={comment.time}
              date={comment.date}
              likeCounts={comment.likeCounts}
              dislikeCounts={comment.dislikeCounts}
            />
          ))
        ) : (
          <p className="flex justify-center">هنوز هیچ پاسخی ثبت نشده است</p>
        )}
      </section>

      <form className="flow-root">
        <h2 className="float-right text-2xl font-bold mb-4">
          پاسخ خود را ثبت کنید
        </h2>
        <textarea
          className="text-right w-full border border-gray-200 rounded-md shadow-sm px-4 py-4"
          rows={8}
          placeholder="... متن پاسخ"
          id="text"
        ></textarea>
        <button type="submit" className="float-right btn-primary">
          ارسال پاسخ
        </button>
      </form>
    </>
  );
};

export default QuestionDetails;
