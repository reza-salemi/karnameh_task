import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import QuestionDetails from "./pages/question-details";
import QuestionList from "./pages/question-list";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E5E5E5] font-yekan">
      <Header />

      <main className="px-8 mb-4">
        <Routes>
          <Route path="/" element={<QuestionList />} />
          <Route path="/question/:id" element={<QuestionDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
