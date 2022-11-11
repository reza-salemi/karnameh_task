import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addQuestion } from "../features/question/question-slice";
interface AddQuestionFormProp {
  setShowModal: (closeModal: boolean) => void;
}

const AddQuestionForm = ({ setShowModal }: AddQuestionFormProp) => {
  const [form, setForm] = useState({
    title: "",
    text: "",
  });

  const { text, title } = form;

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { id, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [id]: value }));
  };

  const onSaveQuestionClicked = () => {
    if (title && text) {
      dispatch(addQuestion(title, text));

      handleClose();
    }
  };

  const canSave = Boolean(title) && Boolean(text);

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
