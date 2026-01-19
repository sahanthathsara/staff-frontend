import { useEffect, useState } from "react";
import { getAllStaff, deleteStaff } from "../../services/staffService";
import StaffTable from "../../components/staff/StaffTable";
import { useNavigate } from "react-router-dom";

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    const data = await getAllStaff();
    setStaff(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this staff member?")) {
      await deleteStaff(id);
      loadStaff();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Staff Management</h1>
        <button
          onClick={() => navigate("/staff/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Staff
        </button>
      </div>

      <StaffTable staff={staff} onDelete={handleDelete} />
    </div>
  );
};

export default StaffList;
