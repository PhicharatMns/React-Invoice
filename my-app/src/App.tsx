import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componend/Home";
import Invoice from "./componend/Invoice";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Invoice" element={<Invoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
