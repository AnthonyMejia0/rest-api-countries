import { useRecoilValue } from "recoil";
import { darkAtomState } from "./atoms/darkAtom";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const darkMode = useRecoilValue(darkAtomState);

  return (
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
  );
}

export default App;
