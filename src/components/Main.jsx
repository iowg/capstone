import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ChicagoPage from "../pages/ChicagoPage";
import CustomersPage from "../pages/CustomersPage";
import SpecialsPage from "../pages/SpecialsPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/chicago" element={<ChicagoPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/specials" element={<SpecialsPage />} />
      </Routes>
    </main>
  );
}

export default Main;
