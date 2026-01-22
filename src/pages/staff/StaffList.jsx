import { useEffect, useState } from "react";
import { getAllStaff, deleteStaff } from "../../services/staffService";
import { useNavigate } from "react-router-dom";

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = async () => {
    try {
      const data = await getAllStaff();
      setStaff(data);
    } catch (error) {
      console.error("Failed to load staff:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff member?"))
      return;

    try {
      await deleteStaff(id);
      loadStaff();
    } catch (error) {
      alert("Delete failed");
    }
  };

  if (loading) {
    return <p>Loading staff...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Staff List</h3>
        <button
          onClick={() => navigate("/staff/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Staff
        </button>
      </div>

      {staff.length === 0 ? (
        <p className="text-gray-600">No staff members found.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Role</th>
              <th className="border p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.id}>
                <td className="border p-2">{s.name}</td>
                <td className="border p-2">{s.email}</td>
                <td className="border p-2">{s.roleName}</td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => navigate(`/staff/edit/${s.id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StaffList;
