import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientList from "./pages/ClientList";
import LedgerPage from "./pages/LedgerPage";
import StatementPage from "./pages/StatementPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/ledger/:id" element={<LedgerPage />} />
        <Route path="/statement/:id" element={<StatementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;