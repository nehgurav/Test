import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomerSearch from "./pages/CustomerSearch.jsx";
import CustomerDetail from "./pages/CustomerDetail.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<CustomerSearch />} />
        <Route path="/customers/:customerId" element={<CustomerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
