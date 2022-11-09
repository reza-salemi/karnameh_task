const Header = () => {
  return (
    <header className="bg-white mb-8">
      <nav className="flex py-2 justify-between container mx-auto items-center">
        <div className="flex gap-10">
          <div>
            <span>محمدرضا سالمی</span>
            <img
              className="inline object-cover ml-4 w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1667935764607-73fca1a86555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
              alt="UserProfile Avatar"
            />
          </div>

          <button className="inline-block px-6 py-2 bg-green-500 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
            سوال جدید
            <p className="inline pl-2 text-lg">+</p>
          </button>
        </div>

        <h1 className="text-2xl">لیست سوالات</h1>
      </nav>
    </header>
  );
};

export default Header;
