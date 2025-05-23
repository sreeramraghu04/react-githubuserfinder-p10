import { Link } from "react-router-dom";

function ProfileCard({ contextData }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl border shadow-2xl p-6 mt-10">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          src={contextData.avatar_url}
          alt="profile"
        />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">{contextData.name}</h1>
        <h2 className="text-lg text-gray-600 underline mt-2">@{contextData.login}</h2>
        <div className="mt-4 flex space-x-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{contextData.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">{contextData.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
        <Link to={contextData.html_url} target="_blank" rel="noopener noreferrer">
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
            Go to Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
