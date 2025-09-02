import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componend/Home";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
