import { useState } from "react";

function App() {

  const [page, setPage] = useState("login"); // login | signup | home
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // SIGNUP
  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    alert(data.message);

    if (data.message === "User registered successfully") {
      setPage("login");
    }
  };

  // LOGIN
  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      setPage("home");
    } else {
      alert(data.message);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setPage("login");
  };

  // UI
  return (
    <div style={{ padding: "20px" }}>

      {page === "signup" && (
        <div>
          <h2>Signup</h2>

          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br /><br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <button onClick={handleSignup}>Signup</button>

          <p>
            Already have account?{" "}
            <button onClick={() => setPage("login")}>Login</button>
          </p>
        </div>
      )}

      {page === "login" && (
        <div>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <button onClick={handleLogin}>Login</button>

          <p>
            New user?{" "}
            <button onClick={() => setPage("signup")}>Signup</button>
          </p>
        </div>
      )}

      {page === "home" && (
        <div>
          <h1>Welcome 🎉</h1>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

    </div>
  );
}

export default App;