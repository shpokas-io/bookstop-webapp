import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/reservations" element={<ReservationsPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
