import { useState } from "react";
import Header from "./components/layouts/header";
import QuestionModal from "./components/question-modal";
import QuestionList from "./pages/question-list";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#E5E5E5] font-yekan">
      <Header setShowModal={setShowModal} />

      <main className="px-8 mb-4">
        <QuestionList />
      </main>

      <QuestionModal isVisible={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
