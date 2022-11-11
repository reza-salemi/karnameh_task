import ReactDOM from "react-dom";
import AddQuestionForm from "./add-question-form";
interface ModalProps {
  isVisible: boolean;
  setShowModal: (closeModal: boolean) => void;
}

const ModalOverLay = ({ isVisible, setShowModal }: ModalProps) => {
  if (!isVisible) return null;

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-40">
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
        <AddQuestionForm handleClose={handleClose} />
      </div>
    </div>
  );
};

const QuestionModal = ({ isVisible, setShowModal }: ModalProps) => {
  const overLayElement = document.getElementById("overlay")!;
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverLay isVisible={isVisible} setShowModal={setShowModal} />,
        overLayElement
      )}
    </>
  );
};

export default QuestionModal;
