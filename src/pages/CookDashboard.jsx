import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CookDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Cook Dashboard</h1>
      <p className="text-lg mb-2">Welcome, {auth.name || "Guest"}!</p>
      <p className="text-lg mb-4">Your role: {auth.role || "Cook"}</p>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default CookDashboard;
