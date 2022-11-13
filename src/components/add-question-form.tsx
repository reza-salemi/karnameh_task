import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addNewQuestion } from "../features/question/question-slice";
import { persianTime, persianDate } from "../utils/persian-date-time";
interface AddQuestionFormProp {
  setShowModal: (closeModal: boolean) => void;
}

const AddQuestionForm = ({ setShowModal }: AddQuestionFormProp) => {
  const [form, setForm] = useState({
    title: "",
    text: "",
  });

  const { text, title } = form;

  const id = nanoid();
  const commentsCount = 0;

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const canSave = Boolean(title) && Boolean(text);

  const onSaveQuestionClicked = () => {
    if (canSave) {
      try {
        dispatch(
          addNewQuestion({
            id,
            title,
            text,
            time: persianTime,
            date: persianDate,
            commentsCount,
          })
        ).unwrap();
      } catch (error) {
        console.error("Failed to save Question", error);
      }

      handleClose();
    }
  };

  return (
    <form className="bg-[#F9F9F9] px-8 py-4">
      <div className="text-right mb-4">
        <label className="block mb-4" htmlFor="title">
          موضوع
        </label>
        <input
          className="text-right w-full border border-gray-200 rounded-md shadow-sm px-3 py-1"
          id="title"
          type="text"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="text-right mb-4">
        <label className="block mb-4" htmlFor="text">
          متن سوال
        </label>
        <textarea
          className="text-right w-full border border-gray-200 rounded-md shadow-sm px-4 py-4"
          rows={6}
          id="text"
          value={text}
          onChange={handleChange}
        />
      </div>

      <button
        type="button"
        onClick={onSaveQuestionClicked}
        className={canSave ? `btn-primary` : `btn-disabled`}
        disabled={!canSave}
      >
        ایجاد سوال
      </button>
      <button onClick={handleClose} className="text-green-500 px-4">
        انصراف
      </button>
    </form>
  );
};

export default AddQuestionForm;
