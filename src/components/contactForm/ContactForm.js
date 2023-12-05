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
        pattern="(0047|\+47|47)?\d{8}"
        placeholder="00000000"
        value={phone}
        onChange={(e) => setPhone(Number(e.target.value))}
        type="tel"
      ></input>

      <label>Email</label>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <button>Submit</button>
    </form>
  );
}
