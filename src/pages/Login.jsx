import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login as loginService } from "../services/authService";

const Login = () => {
  const { saveAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginService({ email, password });
      saveAuth(data.token, data.name, data.role); // redirects automatically
    } catch (err) {
      setError(err || "Login failed. Check your credentials.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
