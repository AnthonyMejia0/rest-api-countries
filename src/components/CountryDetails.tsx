import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { countryAtomState } from "../atoms/countryAtom";
import { darkAtomState } from "../atoms/darkAtom";
import {
  getCountryBorders,
  getCountryLanguages,
  getCurrencyArray,
  getNativeName,
} from "../functions/getCountryValues";
import { countryType } from "../types/types";

function CountryDetails() {
  const darkMode = useRecoilValue(darkAtomState);
  const [country, setCountry] = useRecoilState(countryAtomState);
  const [nativeName, setNativeName] = useState("");
  const [currencies, setCurrencies] = useState([] as string[]);
  const [languages, setLanguages] = useState([] as string[]);
  const [borders, setBorders] = useState([] as countryType[]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBorders = async () => {
      setBorders(await getCountryBorders(country));
    };

    setNativeName(getNativeName(country));
    setCurrencies(getCurrencyArray(country));
    setLanguages(getCountryLanguages(country));
    getBorders();
  }, [country]);

  return (
    <div className="mb-20">
      <button
        onClick={() => navigate(-1)}
        className={`back-button flex items-center py-2 pl-5 pr-6 rounded mt-10 md:mt-20 ml-8 md:ml-16 ${
          darkMode ? "bg-dark-blue text-white" : "bg-white text-very-dark-Blue"
        }`}
      >
        <ArrowLeftIcon className="h-3 w-5 mr-1" />
        Back
      </button>

      <div className="mt-16 mx-8 xl:mx-16 xl:mt-20 xl:grid xl:grid-cols-2">
        <img
          className="w-full lg:w-[65%] xl:w-[35vw] lg:aspect-video mx-auto lg:mx-0"
          src={country.flags.svg}
          alt="Country Flag"
        />

        <div className="w-full">
          <h2 className="font-extrabold text-[1.75rem] mt-9 md:mt-5">
            {country.name.common}
          </h2>

          <div className="mt-6 md:flex md:space-x-20 3xl:space-x-28 md:w-max md:justify-between">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Native Name</span>: {nativeName}
              </li>
              <li>
                <span className="font-semibold">Population</span>:{" "}
                {country.population}
              </li>
              <li>
                <span className="font-semibold">Region</span>: {country.region}
              </li>
              <li>
                <span className="font-semibold">Sub Region</span>:{" "}
                {country.subregion}
              </li>
              <li>
                <span className="font-semibold">Capital</span>:{" "}
                {country.capital}
              </li>
            </ul>

            <ul className="mt-10 md:mt-0 space-y-2">
              <li>
                <span className="font-semibold">Top Level Domain</span>:{" "}
                {country.tld[0]}
              </li>
              <li>
                <span className="font-semibold">Currencies</span>:{" "}
                {currencies.join(", ")}
              </li>
              <li>
                <span className="font-semibold">Languages</span>:{" "}
                {languages.join(", ")}
              </li>
            </ul>
          </div>

          <div className="mt-10 xl:flex xl:space-x-5 xl:items-baseline">
            <h2 className="font-semibold text-xl">Border Countries:</h2>
            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-3 gap-y-1 justify-items-center">
              {borders.map((country, i) => (
                <button
                  key={i}
                  onClick={() => setCountry(country)}
                  className={`back-button text-xs md:text-sm text-center w-full h-min xl:px-4 mt-4 xl:mt-0 py-2 rounded ${
                    darkMode
                      ? "bg-dark-blue text-white"
                      : "bg-white text-very-dark-Blue"
                  }`}
                >
                  {country.name.common}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
