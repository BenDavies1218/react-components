import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth", {
        method: "POST",
        body: JSON.stringify({ userEmail: email, userPassword: password }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>
        Welcome To <strong>Tourist Media</strong>
      </h1>
      <div className="formContainer">
        <form onSubmit={handleFormSubmit}>
          <div className="formItem">
            <label htmlFor="email">Email: </label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <div className="formItem">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="formItem">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
