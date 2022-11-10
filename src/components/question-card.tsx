import { useNavigate } from "react-router-dom";
import { ReactComponent as SadIcon } from "./assets/sad.svg";
import { ReactComponent as HappyIcon } from "./assets/happy.svg";
import { ReactComponent as CommentIcon } from "./assets/comment.svg";
interface QuestionCardProps {
  type: "card" | "question" | "comment";
  id?: number;
  title: string;
  date: string;
  time: string;
  text: string;
  commentsCount?: number;
  likeCounts?: number;
  dislikeCounts?: number;
}

const QuestionCard = ({
  type,
  id,
  title,
  date,
  time,
  text,
  commentsCount,
  likeCounts,
  dislikeCounts,
}: QuestionCardProps) => {
  const navigate = useNavigate();

  const showDetail = (id: number | undefined) => navigate(`/question/${id}`);

  return (
    <article className="border rounded-lg border-slate-200 bg-[#F9F9F9] mb-4 shadow-md">
      <header className="flex bg-white justify-between border-b rounded-lg border-slate-200 py-2">
        <div className="flex items-center gap-6 px-4">
          {commentsCount ? (
            <div>
              <span>{commentsCount}</span>
              <CommentIcon className="inline ml-1" />
            </div>
          ) : null}

          {dislikeCounts ? (
            <div>
              <span>{dislikeCounts}</span>
              <SadIcon className="inline ml-1" />
            </div>
          ) : null}

          {likeCounts ? (
            <div>
              <span>{likeCounts}</span>
              <HappyIcon className="inline ml-1" />
            </div>
          ) : null}

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
        {type === "question" ? (
          <button
            onClick={() => showDetail(id)}
            className="px-2 py-2 border rounded-md border-[#27AE60] text-[#27AE60] hover:border-[#199DA3] hover:text-[#199DA3] text-sm"
          >
            مشاهده جزییات
          </button>
        ) : null}

        {type === "comment" ? (
          <>
            <button className="px-2 py-2 mr-4 border rounded-md border-[#E4E9EC] text-[#27AE60] text-sm">
              پاسخ خوب بود
              <HappyIcon className="inline ml-1" />
            </button>

            <button className="px-2 py-2 border rounded-md border-[#E4E9EC] text-[#F16063] text-sm">
              پاسخ خوب نبود
              <SadIcon className="inline ml-1" />
            </button>
          </>
        ) : null}
      </section>
    </article>
  );
};

export default QuestionCard;
