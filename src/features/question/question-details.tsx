import QuestionCard from "./question-card";

const QuestionDetails = () => {
  return (
    <>
      <QuestionCard
        type="card"
        title="علی"
        text="محمد"
        time="14:00"
        date="1400/18/9"
        commentsCount={20}
      />

      <section className="mb-8">
        <h2 className="text-right text-2xl font-bold mb-4">پاسخ ها</h2>
        <QuestionCard
          type="comment"
          title="علی"
          text="محمد"
          time="14:00"
          date="1400/18/9"
          likeCounts={10}
          dislikeCounts={12}
        />
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
