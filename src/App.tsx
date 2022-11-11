import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/layout";
import QuestionDetails from "./features/question/question-details";
import QuestionList from "./features/question/question-list";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuestionList />} />
        <Route path="/question/:id" element={<QuestionDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
