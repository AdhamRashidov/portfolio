import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
