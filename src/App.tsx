import { AppRoutes } from "../Routes";
import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import GlobalStyles from "./Style/global";

export const App = () => (
  <>
    <Header />
    <Dashboard />
    <GlobalStyles />
  </>
);
