import { Link } from "react-router-dom";

function ProfileCard({ contextData }) {
  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-2xl border shadow-2xl px-4 py-6 mt-8 sm:mt-14">
      <div className="flex flex-col items-center text-center">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-500"
          src={contextData.avatar_url}
          alt="profile"
        />
        <h1 className="mt-4 text-lg sm:text-2xl font-bold text-gray-800 break-words">
          {contextData.name}
        </h1>
        <h2 className="text-sm sm:text-lg text-gray-600 underline mt-1 break-all">
          @{contextData.login}
        </h2>

        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 w-full">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              {contextData.followers}
            </p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              {contextData.following}
            </p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        <Link
          to={contextData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="mt-6 w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 sm:px-6 rounded-full transition-all duration-300 shadow-md">
            Go to Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
