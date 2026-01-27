import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import StaffList from "./staff/StaffList";

const ManagerDashboard = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Manager Dashboard</h1>

      <p><b>Welcome:</b> {auth.name}</p>
      <p><b>Role:</b> {auth.role}</p>

      <button
        onClick={() => navigate("/staff/add")}
        style={btnPrimary}
      >
        + Add Staff
      </button>

      

      <hr style={{ margin: "20px 0" }} />

      <StaffList />
      <button
        onClick={logout}
        style={btnDanger}
      >
        Logout
      </button>
    </div>
  );
};

const btnPrimary = {
  marginRight: "10px",
  padding: "8px 12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const btnDanger = {
  padding: "8px 12px",
  background: "#dc2626",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default ManagerDashboard;
