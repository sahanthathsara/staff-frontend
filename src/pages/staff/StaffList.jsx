import { useEffect, useState } from "react";
import { getAllStaff } from "../../services/staffService";

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadStaff = async () => {
      try {
        const data = await getAllStaff();
        setStaff(data);
      } catch {
        setError("Failed to load staff");
      }
    };

    loadStaff();
  }, []);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Staff List</h2>

      {staff.length === 0 ? (
        <p className="text-gray-500">No staff found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Role</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{s.name}</td>
                  <td className="p-2 border">{s.email}</td>
                  <td className="p-2 border">{s.roleName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StaffList;
