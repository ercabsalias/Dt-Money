import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./src/Pages/Home/index";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
//export default AppRoutes;
