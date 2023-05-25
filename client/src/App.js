import { BrowserRouter, Route, Routes } from "react-router-dom";
import LocalStorage from "./components/LocalStorage";
import SessionStorage from "./components/SessionStorage";
import Cookies from "./components/Cookies";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/local-storage" element={<LocalStorage />} />
        <Route path="/session-storage" element={<SessionStorage />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
