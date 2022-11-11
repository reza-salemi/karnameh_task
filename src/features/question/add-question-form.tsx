interface AddQuestionFormProp {
  handleClose: (closeModal: boolean) => void;
}

const AddQuestionForm = ({ handleClose }: AddQuestionFormProp) => {
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
        ></textarea>
      </div>

      <button className="btn-primary mr-2">ایجاد سوال</button>
      <button onClick={() => handleClose} className="text-green-500 px-4">
        انصراف
      </button>
    </form>
  );
};

export default AddQuestionForm;
