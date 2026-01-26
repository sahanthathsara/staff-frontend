import { useState } from "react";
import { addStaff } from "../../services/staffService";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    roleId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStaff(form);
    navigate("/manager-dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Staff</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <br /><br />

        <input name="email" placeholder="Email" onChange={handleChange} required />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <select name="roleId" onChange={handleChange} required>
          <option value="">Select Role</option>
          <option value="1">Manager</option>
          <option value="2">Cook</option>
          <option value="3">Cleaner</option>
          <option value="4">HR</option>
        </select>

        <br /><br />
        <button type="submit">Add Staff</button>
      </form>
    </div>
  );
};

export default AddStaff;
