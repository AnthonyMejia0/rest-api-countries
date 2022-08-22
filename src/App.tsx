import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { darkAtomState } from "./atoms/darkAtom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";

function App() {
  const darkMode = useRecoilValue(darkAtomState);

  return (
    <Routes>
      <Route
        path="/details"
        element={
          <div
            className={`h-screen overflow-x-hidden ${
              darkMode
                ? "bg-very-dark-Blue text-white"
                : "bg-very-light-Gray text-very-dark-Blue"
            }`}
          >
            <Header />
            <CountryDetails />
          </div>
        }
      />

      <Route
        path="/"
        element={
          <div
            className={`h-screen overflow-x-hidden ${
              darkMode
                ? "bg-very-dark-Blue text-white"
                : "bg-very-light-Gray text-very-dark-Blue"
            }`}
          >
            <Header />
            <Countries />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
