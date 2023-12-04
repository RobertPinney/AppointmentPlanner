import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  function handleNewContact(contact) {
    setContacts((contacts) => [...contacts, contact]);
  }

  function handleNewAppontment(appointement) {
    setAppointments((appointments) => [...appointments, appointement]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage contacts={contacts} onNewContact={handleNewContact} />
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              onNewAppointment={handleNewAppontment}
              contacts={contacts}
            />
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
