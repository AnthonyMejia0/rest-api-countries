import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countryAtomState } from "../atoms/countryAtom";
import { darkAtomState } from "../atoms/darkAtom";
import { countryType } from "../types/types";

function Country({ country }: { country: countryType }) {
  const darkMode = useRecoilValue(darkAtomState);
  const setcountry = useSetRecoilState(countryAtomState);

  return (
    <Link to={"/details"} onClick={() => setcountry(country)}>
      <div
        className={`w-[18rem] md:w-[13rem] 3xl:w-[16.5rem] overflow-hidden rounded-md shadow-lg cursor-pointer ${
          darkMode ? "bg-dark-blue" : "bg-white"
        }`}
      >
        <img
          className="w-full h-[10rem] md:h-[7.5rem] 3xl:h-[9rem] object-cover"
          src={country.flags.svg}
          alt="Country Flag"
        />
        <div className="flex flex-col items-start space-y-4 md:space-y-2 pt-7 px-7 md:pt-4 md:pl-4 pb-10">
          <h2 className="font-extrabold text-xl md:text-base text-center">
            {country.name.common}
          </h2>
          <div className="space-y-1 md:space-y-0 md:text-sm">
            <p>
              <span className="font-semibold">Population</span>:{" "}
              {country.population}
            </p>
            <p>
              <span className="font-semibold">Region</span>: {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital</span>: {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Country;
