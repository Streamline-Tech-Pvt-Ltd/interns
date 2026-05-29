import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "25px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px gray",
  },

  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
  },

  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;
