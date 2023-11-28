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
  const [contacts, setContacts] = useState("");

  function addNewContact() {
    return <p>Hello</p>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage contacts={contacts} newContact={addNewContact} />
          }
        />
        <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
