import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// ✅ import StaffList from pages/staff
import StaffList from "./staff/StaffList";

const ManagerDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manager Dashboard</h1>
          <p className="text-lg">Welcome, {auth.name || "Manager"}!</p>
          <p className="text-md text-gray-600">
            Your role: {auth.role || "Manager"}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      {/* Staff Management Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Staff Management</h2>
        <StaffList />
      </div>
    </div>
  );
};

export default ManagerDashboard;
