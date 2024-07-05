export default function Name({
  name,
  email,
  company,
  message,
  updateName,
  updateEmail,
  updateCompany,
  updateMessage,
  handleSubmit,
}) {
  return (
    <>
      <h3>My Name is: {name}</h3>
      <h3>My Email is: {email}</h3>
      <h3>My Company is: {company}</h3>
      <h3>My Message is: {message}</h3>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={updateName} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" onChange={updateEmail} />
      <label htmlFor="company">Company</label>
      <input type="text" name="company" onChange={updateCompany} />
      <label htmlFor="message">Message</label>
      <input type="text" name="message" onChange={updateMessage} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
