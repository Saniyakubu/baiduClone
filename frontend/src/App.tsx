import { Routes, Route } from "react-router-dom";
import FrontPage from "./components/frontPage";
import ResultPage from "./components/ResultPage";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </main>
  );
}

export default App;
