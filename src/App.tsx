import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layouts/layout";
import QuestionDetails from "./features/question/question-details";
import QuestionList from "./features/question/question-list";

function App() {
  const { pathname } = useLocation();
  const headerTitle =
    pathname === "/"
      ? "لیست سوالات"
      : pathname.includes("question")
      ? "جزییات سوال"
      : "";

  return (
    <Routes>
      <Route path="/" element={<Layout headerTitle={headerTitle} />}>
        <Route index element={<QuestionList />} />
        <Route path="/question/:id" element={<QuestionDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
