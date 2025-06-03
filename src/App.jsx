import { useState } from "react";
import axios from "axios";
import ProfilePage from "./components/ProfilePage";

function App() {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  const FetchDetails = async (userName) => {
    const { data } = await axios.get(
      `https://api.github.com/users/${userName}`
    );

    setUser(data);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-gray-300 shadow-xl px-3 sm:px-4 py-3 flex flex-col sm:flex-row items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              alt="GitHub logo"
              className="w-12 sm:w-14 p-1 rounded"
            />
          </a>
          <h1 className="font-bold text-xl sm:text-3xl text-center sm:text-left">
            GitHub User Finder
          </h1>
        </div>

        <p className="text-xs sm:text-sm text-center sm:text-left px-1 sm:px-0">
          To find the user's details using
          <a
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 underline ml-1"
          >
            GitHub API
          </a>
        </p>
      </nav>

      {/* Search Form */}
      <div className="max-w-xl w-full mx-auto px-4 sm:px-8 mt-8">
        <form
          className="flex flex-col sm:flex-row rounded-md overflow-hidden border shadow-md"
          onSubmit={(e) => {
            e.preventDefault();
            FetchDetails(userName);
          }}
        >
          <input
            type="text"
            placeholder="Enter the username..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-gray-600 text-white px-4 sm:px-6 py-3 hover:bg-gray-700 transition duration-300 w-full sm:w-[150px] text-sm sm:text-base"
          >
            Get Data
          </button>
        </form>
      </div>

      {/* Profile Card */}
      <div className="p-3 sm:p-4">
        {user && <ProfilePage contextData={user} />}
      </div>
    </div>
  );
}

export default App;
