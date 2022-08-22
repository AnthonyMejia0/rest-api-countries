import { useRecoilState } from "recoil";
import { darkAtomState } from "../atoms/darkAtom";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkAtomState);

  return (
    <div
      className={`py-8 px-5 md:py-4 md:px-16 flex items-center justify-between shadow-md ${
        darkMode ? "bg-dark-blue text-white" : "bg-white text-very-dark-Blue"
      }`}
    >
      <h3 className="font-extrabold md:text-lg">Where in the world?</h3>
      {darkMode ? (
        <div className="flex space-x-3">
          <SunIcon className="h-5 w-5" />
          <button onClick={() => setDarkMode(false)} className="font-semibold">
            Light Mode
          </button>
        </div>
      ) : (
        <div className="flex space-x-3">
          <MoonIcon className="h-5 w-5" />
          <button onClick={() => setDarkMode(true)} className="font-semibold">
            Dark Mode
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
