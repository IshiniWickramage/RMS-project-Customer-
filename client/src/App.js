import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CustomerCreation from "./pages/Customer/CustomerCreation";
import CustomerList from "./pages/Customer/CustomerList";
import CustomerOverviewHistory from "./pages/Customer/CustomerOverviewHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerOverviewGenaral from "./pages/Customer/CustomerOverviewGenaral";
import CustomerOverviewSecondTab from "./pages/Customer/CustomerOverviewSecondTab";
import CreateReservations from "./pages/Reservations/CreateReservationpage";





function App() {

  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<CustomerList />}></Route>
  <Route path="/CustomerCreation" element={<CustomerCreation/>}></Route>
  <Route path="/CustomerOverviewGeneral/:id" element={<CustomerOverviewGenaral/>}></Route>
  <Route path="/CustomerOverviewSecondTab" element={<CustomerOverviewSecondTab/>}></Route>
  <Route path="/CustomerOverviewHistory" element={<CustomerOverviewHistory/>}></Route>
  <Route path="/CreateReservations" element={<CreateReservations/>}></Route>
</Routes>
</BrowserRouter>
    );
}

export default App
