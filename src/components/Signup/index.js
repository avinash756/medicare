import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        "https://medicarebackend.vercel.app/signup",
        {
          username,
          password,
          role,
        }
      );
      setMessage(res.data.message);
      setError("");
      navigate("/login"); // Go to login after successful signup
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Medicare Sign Up</h2>
        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="caretaker">Caretaker</option>
        </select>
        <button onClick={handleSignup}>Sign Up</button>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <p style={{ marginTop: "10px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#0077cc", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
