import React from "react";

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
  onhandleSubmit,
}) {
  return (
    <form onSubmit={onhandleSubmit}>
      <label>Name</label>
      <input></input>

      <label>Date</label>
      <input></input>

      <label>Time</label>
      <input></input>

      <button>Submit</button>
    </form>
  );
}
