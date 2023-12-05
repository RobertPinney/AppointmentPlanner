export default function ContactPicker({ contacts, onChange, name }) {
  return (
    <select name={name} onChange={onChange}>
      <option key="default" value="">
        No Contact Selected
      </option>
      {contacts.map((contact, i) => {
        return (
          <option key={i} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
}
