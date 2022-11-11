import { useState } from "react";
import QuestionModal from "./question-modal";

const AddQuestionButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handlModal = () => setShowModal(true);

  return (
    <>
      <button onClick={handlModal} className="btn-primary">
        سوال جدید
        <p className="inline pl-2 text-lg">+</p>
      </button>

      {showModal && (
        <QuestionModal isVisible={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default AddQuestionButton;
