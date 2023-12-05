import { useState } from "react";

import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

export default function AppointmentsPage({
  contacts,
  appointments,
  onNewAppointment,
}) {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleOnChange(e) {
    setContact(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !contact || !date || !time) return;

    const newAppointment = {
      title,
      contact,
      date,
      time,
    };

    onNewAppointment(newAppointment);

    setTitle("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section className="appointment">
        <h2>Add Appointment</h2>
        <AppointmentForm
          {...{
            contacts,
            title,
            setTitle,
            contact,
            setContact,
            date,
            setDate,
            time,
            setTime,
          }}
          onHandleSubmit={handleSubmit}
          onChange={handleOnChange}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
}
