import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
