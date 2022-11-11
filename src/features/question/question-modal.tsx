import ReactDOM from "react-dom";
import AddQuestionForm from "./add-question-form";
import { ReactComponent as CloseButton } from "../../assets/close-button.svg";
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
            <CloseButton />
          </button>
          <h2>ایجاد سوال جدید</h2>
        </header>
        <AddQuestionForm setShowModal={setShowModal} />
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
