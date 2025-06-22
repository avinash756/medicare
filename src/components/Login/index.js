import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      if (res.data.role === "caretaker") {
        navigate("/caretaker-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Medicare Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}

        <p style={{ marginTop: "10px" }}>
          New user?{" "}
          <Link to="/signup" style={{ color: "#0077cc", fontWeight: "bold" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
