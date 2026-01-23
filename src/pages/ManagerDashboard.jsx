import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import StaffList from "./staff/StaffList";

const ManagerDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manager Dashboard</h1>

      <p>
        Welcome, <strong>{auth.name}</strong>
      </p>
      <p>
        Role: <strong>{auth.role}</strong>
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* THIS is what you were missing */}
      <StaffList />

      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ManagerDashboard;
