import { useState } from "react";
import Header from "./components/layouts/header";
import QuestionModal from "./components/question-modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#E5E5E5] font-yekan">
      <Header setShowModal={setShowModal} />

      <main></main>

      <QuestionModal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
