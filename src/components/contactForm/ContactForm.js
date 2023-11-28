export default function ContactForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  onHandleSubmit,
}) {
  return (
    <form onSubmit={onHandleSubmit}>
      <label>Name</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>Phone</label>
      <input
        pattern="^((0047)?|(+47)?)[1-9] ?\d ?\d ?\d ?\d ?\d ?\d ?\d$"
        placeholder="00-00-00-00"
        value={phone}
        onChange={(e) => setPhone(Number(e.target.value))}
        type="text"
      ></input>

      <label>Email</label>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <button>Submit</button>
    </form>
  );
}
