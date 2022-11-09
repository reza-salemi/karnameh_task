interface QuestionCardProps {
  title: string;
  date: string;
  time: string;
  text: string;
  commentsCount: number;
}

const QuestionCard = ({
  title,
  date,
  time,
  text,
  commentsCount,
}: QuestionCardProps) => {
  return (
    <article className="border rounded-lg border-slate-200 bg-[#F9F9F9] mx-8 mb-4 shadow-md">
      <header className="flex bg-white justify-between border-b rounded-lg border-slate-200 py-2">
        <div className="flex items-center gap-6 px-4">
          <div>
            <span>{commentsCount}</span>
            <svg
              className="inline ml-1"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.75 2C5.02208 2 2 5.02208 2 8.75C2 9.43791 2.14554 10.1468 2.35732 10.8091L2.36068 10.8196C2.57868 11.5014 2.74647 12.0261 2.86295 12.4222C2.97485 12.8028 3.05981 13.1293 3.08134 13.3849C3.10678 13.6867 3.12001 13.9487 3.08147 14.2236C3.04294 14.4985 2.9582 14.7467 2.85076 15.0299C2.79524 15.1763 2.71923 15.3302 2.6228 15.5H8.75C12.4779 15.5 15.5 12.4779 15.5 8.75C15.5 5.02208 12.4779 2 8.75 2ZM0.631647 15.8254C0.548607 15.9462 0.5 16.0924 0.5 16.25C0.5 16.6642 0.835786 17 1.25 17H8.75C13.3063 17 17 13.3063 17 8.75C17 4.19365 13.3063 0.5 8.75 0.5C4.19365 0.5 0.5 4.19365 0.5 8.75C0.5 9.63943 0.686196 10.5079 0.928582 11.2659C1.15063 11.9604 1.31298 12.4683 1.42388 12.8454C1.53994 13.2401 1.57966 13.4281 1.58664 13.5109C1.61071 13.7964 1.60979 13.9169 1.59599 14.0154C1.58219 14.1138 1.54994 14.2299 1.44829 14.4979C1.3664 14.7137 1.17416 15.0116 0.631647 15.8254Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66675 7.08334C4.66675 6.66912 5.00253 6.33334 5.41675 6.33334H12.0834C12.4976 6.33334 12.8334 6.66912 12.8334 7.08334C12.8334 7.49755 12.4976 7.83334 12.0834 7.83334H5.41675C5.00253 7.83334 4.66675 7.49755 4.66675 7.08334Z"
                fill="#9CAEBB"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66675 10.4167C4.66675 10.0025 5.00253 9.66666 5.41675 9.66666H8.75008C9.16429 9.66666 9.50008 10.0025 9.50008 10.4167C9.50008 10.8309 9.16429 11.1667 8.75008 11.1667H5.41675C5.00253 11.1667 4.66675 10.8309 4.66675 10.4167Z"
                fill="#9CAEBB"
              />
            </svg>
          </div>

          <div className="flex gap-2">
            <div>
              <span id="date">{date}</span>
              <label className="text-[#777777]" htmlFor="date">
                {" "}
                :تاریخ
              </label>
            </div>

            <span>|</span>

            <div>
              <span id="time">{time}</span>
              <label className="text-[#777777]" htmlFor="time">
                {" "}
                :ساعت
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center px-4">
          <h2 className="text-xl">{title}</h2>
          <img
            className="object-cover w-8 h-8 rounded-md"
            src="https://images.unsplash.com/photo-1667935764607-73fca1a86555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="author avatar"
          />
        </div>
      </header>

      <section className="px-6 py-4">
        <p className="flex flex-row-reverse mb-4">{text}</p>

        <button className="px-2 py-2 border rounded-md border-[#27AE60] text-[#27AE60] hover:border-[#199DA3] hover:text-[#199DA3] text-sm">
          مشاهده جزییات
        </button>
      </section>
    </article>
  );
};

export default QuestionCard;
