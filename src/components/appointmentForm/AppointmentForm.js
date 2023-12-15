import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export default function AppointmentForm({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  onHandleSubmit,
  onChange,
  contactsValue,
}) {
  return (
    <form onSubmit={onHandleSubmit}>
      <label>Title</label>
      <input
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <ContactPicker
        contacts={contacts}
        setContact={setContact}
        onChange={onChange}
        name="contact"
        contactsValue={contactsValue}
      />

      <label>Date</label>
      <input
        value={date}
        type="date"
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      ></input>

      <label>Time</label>
      <input
        value={time}
        type="time"
        onChange={(e) => setTime(e.target.value)}
      ></input>

      <button>Submit</button>
    </form>
  );
}
