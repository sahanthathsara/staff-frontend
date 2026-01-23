import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login as loginService } from "../services/authService";
import { Link } from "react-router-dom";

const Login = () => {
  const { auth, saveAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Redirect if already logged in
  useEffect(() => {
    if (auth.token && auth.role) {
      redirectByRole(auth.role);
    }
  }, [auth]);

  const redirectByRole = (role) => {
    switch (role) {
      case "Manager":
        navigate("/manager-dashboard");
        break;
      case "Cook":
        navigate("/cook-dashboard");
        break;
      case "Cleaner":
        navigate("/cleaner-dashboard");
        break;
      case "HR":
        navigate("/hr-dashboard");
        break;
      default:
        navigate("/login");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginService({ email, password });

      // IMPORTANT: backend must return these fields
      saveAuth(data.token, data.name, data.role);

      redirectByRole(data.role);
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      <p>
        New user? <Link to="/signup" className="text-blue-600 underline">
       Sign up
      </Link>
      </p>
    </div>
  );
};

export default Login;

