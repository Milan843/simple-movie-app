import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
