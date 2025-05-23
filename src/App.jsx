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
    <div>
      <nav className="bg-gray-300 pb-3 shadow-xl">
        <h1 className="flex">
          <a href="https://github.com/">
            <img
              src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              alt=""
              className="w-[75px] p-3 rounded"
            />
          </a>
          <h1 className="mt-2 font-bold text-3xl">GitHub User Finder</h1>
        </h1>
        <p className="ml-20 mt-[-35px]">
          To find the users details
          <a
            href="https://docs.github.com/en/rest?apiVersion=2022-11-28"
            className="text-green-500"
          >
            {" "}
            the GitHub API
          </a>
        </p>
      </nav>
      <div className="max-w-md mx-auto mb-6 shadow-2xl">
        <form
          className="flex rounded-md overflow-hidden border mt-20"
          onSubmit={(e) => {
            e.preventDefault();
            FetchDetails(userName);
          }}
        >
          <input
            type="text"
            placeholder="Enter the username...."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-3 text-gray-500"
          />
          <button
            className="bg-gray-500 text-white hover:bg-gray-600 transition duration-300 cursor-pointer w-[150px]"
            onClick={() => {
              FetchDetails(userName);
            }}
          >
            Get Data
          </button>
        </form>
      </div>

      <div className="p-4">{user && <ProfilePage contextData={user} />}</div>
    </div>
  );
}

export default App;
