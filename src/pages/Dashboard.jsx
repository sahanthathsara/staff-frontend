import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear auth
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {auth.name ? (
        <>
          <p className="text-xl mb-2">
            Welcome, <span className="font-semibold">{auth.name}</span>!
          </p>
          <p className="text-lg mb-4">
            Your role: <span className="font-semibold">{auth.role}</span>
          </p>
        </>
      ) : (
        <p className="text-red-600 mb-4">No user info found.</p>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
