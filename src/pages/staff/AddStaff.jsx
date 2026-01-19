import { useState } from "react";
import { addStaff } from "../../services/staffService";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStaff(form);
    navigate("/staff");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Staff</h1>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          className="border p-2 w-full"
          onChange={handleChange}
          required
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddStaff;
