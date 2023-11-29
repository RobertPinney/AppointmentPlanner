import { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export default function ContactsPage({ contacts, onNewContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) return;

    const id = crypto.randomUUID();
    const newContacts = {
      id,
      name,
      phone,
      email,
    };

    contacts.map((contact) => contact.name).includes(newContacts.name)
      ? window.alert(` Contact "${newContacts.name}" is a duplicate`)
      : onNewContact(...contacts, newContacts);

    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          onHandleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
}
