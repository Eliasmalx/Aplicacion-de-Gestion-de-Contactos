

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Demo } from "./pages/Demo";
import Contacts from "./pages/Contacts"
import AddContact from "./pages/AddContact"

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path= "/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addcontact" element= {<AddContact />} />

      </Route>
    )
);