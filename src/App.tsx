import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import QuestionDetails from "./pages/question-details";
import QuestionList from "./pages/question-list";

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
