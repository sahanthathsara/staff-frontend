import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import StaffList from "./staff/StaffList";

const HrDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>HR Dashboard</h1>

      <p>
        Welcome, <strong>{auth.name}</strong>
      </p>
      <p>
        Role: <strong>{auth.role}</strong>
      </p>

      <hr />

      {/* HR can VIEW staff only */}
      <StaffList />

      <br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HrDashboard;
