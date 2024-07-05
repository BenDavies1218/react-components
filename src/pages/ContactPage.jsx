import { useState } from "react";
import Counter from "../Components/Counter";
import Name from "../Components/Name";

export default function ContactPage() {
  const [count, setCount] = useState(0);
  const [oneCounter, setOneCounter] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateCompany = (e) => {
    setCompany(e.target.value);
  };

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const closeCounter = () => {
    setOneCounter((prev) => !prev);
  };

  const handleCountButtonClick = (plus) => {
    if (plus) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(name + email + company + message);
      const response = await fetch("http://localhost:3001/contact/submit", {
        method: "POST",
        body: {
          name: name,
          email: email,
          company: company,
          message: message,
        },
      });
      const result = response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h4>{name}</h4>
      <h4>{email}</h4>
      <h4>{company}</h4>
      <h4>{message}</h4>
      <h1>Contact Page</h1>

      <Counter
        count={count}
        oneCounter={closeCounter}
        handleCountButtonClick={handleCountButtonClick}
      />
      {!oneCounter && (
        <Counter
          count={count}
          handleCountButtonClick={handleCountButtonClick}
          oneCounter={closeCounter}
        />
      )}

      <Name
        name={name}
        email={email}
        company={company}
        message={message}
        updateName={updateName}
        updateEmail={updateEmail}
        updateCompany={updateCompany}
        updateMessage={updateMessage}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
