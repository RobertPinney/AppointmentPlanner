import { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export default function ContactsPage({ contacts, newContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.value === name) return window.alert("Name is a dupicate");

    setName(e.target.value);
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
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
          onHandleSubmit={handleSubmit}
          setPhone={setPhone}
          setName={setName}
          setEmail={setEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
}
