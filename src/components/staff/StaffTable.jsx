const StaffTable = ({ staff, onDelete }) => {
  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Role</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((s) => (
          <tr key={s.id}>
            <td className="border p-2">{s.name}</td>
            <td className="border p-2">{s.email}</td>
            <td className="border p-2">{s.role}</td>
            <td className="border p-2 space-x-2">
              <button className="text-blue-600">Edit</button>
              <button
                onClick={() => onDelete(s.id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;
