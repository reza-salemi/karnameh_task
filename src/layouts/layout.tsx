import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E5E5E5] font-yekan">
      <Header />

      <main className="px-8 mb-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
