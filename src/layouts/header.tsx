import AddQuestion from "../components/add-question-button";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const title =
    pathname === "/"
      ? "لیست سوالات"
      : pathname.includes("question")
      ? "جزییات سوال"
      : "";

  return (
    <header className="bg-white mb-8">
      <nav className="flex flex-row-reverse py-2 justify-between container mx-auto items-center">
        <h1 className="text-3xl">{title}</h1>
        <Link to={"/"}>
          <span className="text-2xl">خانه</span>
        </Link>

        <div className="flex gap-10 items-center">
          <div>
            <span>محمدرضا سالمی</span>
            <img
              className="inline object-cover ml-4 w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1667935764607-73fca1a86555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="UserProfile Avatar"
            />
          </div>
          <AddQuestion />
        </div>
      </nav>
    </header>
  );
};

export default Header;
