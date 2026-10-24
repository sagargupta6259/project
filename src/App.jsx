
import { Routes, Route } from "react-router-dom";
import Home from "./Componenet/Home";
import Booklsit from "./Componenet/Booklsit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/book" element={<Home />} />
      <Route path="/booklist" element={<Booklsit />} />
    </Routes>
  );
}

export default App;
