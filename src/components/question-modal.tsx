interface ModalProps {
  isVisible: boolean;
  setShowModal: (closeModal: boolean) => void;
}

const QuestionModal = ({ isVisible, setShowModal }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-25">
      <div className="bg-white w-[700px]">
        <header className="flex py-2 px-2 justify-between">
          <button onClick={handleClose}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 11L1 1"
                stroke="#454545"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <h2>ایجاد سوال جدید</h2>
        </header>

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
              className="text-right w-full border border-gray-200 rounded-md shadow-sm"
              rows={6}
              id="text"
            ></textarea>
          </div>

          <button className="btn-primary mr-2">ایجاد سوال</button>
          <button onClick={handleClose} className="text-green-500 px-4">
            انصراف
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuestionModal;
