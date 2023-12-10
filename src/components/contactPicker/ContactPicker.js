export default function ContactPicker({
  contacts,
  onChange,
  name,
  contactsValue,
}) {
  return (
    <select name={name} onChange={onChange} value={contactsValue}>
      <option key="default" value="placeholder">
        No contact selected
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
