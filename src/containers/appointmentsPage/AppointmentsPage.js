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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      contact,
      date,
      time,
    };

    onNewAppointment(newAppointment);

    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
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
          onhandleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* <TileList appointments={appointments} /> */}
      </section>
    </div>
  );
}
