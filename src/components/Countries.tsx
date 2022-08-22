import {
  ChevronDownIcon,
  ChevronUpIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React, { Key, useEffect, useState } from "react";
import ReactDropdown from "react-dropdown";
import { useRecoilValue } from "recoil";
import { darkAtomState } from "../atoms/darkAtom";
import { countryType } from "../types/types";
import Country from "./Country";

function Countries() {
  const darkMode = useRecoilValue(darkAtomState);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [allCountries, setAllCountries] = useState([] as countryType[]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const getAllCountries = await response.json();
      setAllCountries([...getAllCountries]);
      console.log("Countries", getAllCountries);
    };
    fetchCountries();
  }, [filterValue]);

  return (
    <>
      <div className="flex items-center justify-center md:justify-start py-7 px-5 md:px-16">
        <form
          className={`w-full md:w-[29rem] flex items-center py-2 px-10 space-x-6 rounded-lg shadow-lg ${
            darkMode ? "bg-dark-blue" : "bg-white"
          }`}
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon className="h-5 w-5" />
          <input
            className="bg-transparent focus:outline-none p-2"
            type="text"
            placeholder="Search for a country..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
      </div>

      <div className="relative h-[3.5rem] ml-5 mt-4 mb-12 md:ml-16">
        <ReactDropdown
          controlClassName={`flex items-center justify-between py-4 px-5 w-[15rem] rounded-lg shadow-lg cursor-pointer ${
            darkMode
              ? "bg-dark-blue text-white"
              : "bg-white text-very-dark-Blue"
          }`}
          options={["All", "Africa", "America", "Asia", "Europe", "Oceania"]}
          placeholder="Filter by Region"
          value={filterValue}
          onChange={(_onSelect) => setFilterValue(_onSelect.value)}
          arrowOpen={<ChevronUpIcon className="h-4 w-4" />}
          arrowClosed={<ChevronDownIcon className="h-4 w-4" />}
          menuClassName={`z-10 mt-1 space-y-1 absolute w-[15rem] left-0 rounded-lg shadow-lg py-4 px-5 cursor-pointer ${
            darkMode
              ? "bg-dark-blue text-white"
              : "bg-white text-very-dark-Blue"
          }`}
        />
      </div>

      <div className="z-0 flex flex-col md:grid md:gap-10 3xl:gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 md:px-16 space-y-12 md:space-y-0 items-center md:justify-start mb-20">
        {allCountries
          .filter(
            (country) =>
              country.name.official
                .toLowerCase()
                .includes(searchValue.toLowerCase()) &&
              (filterValue !== "All"
                ? country.region.includes(filterValue)
                : true)
          )
          .map((country: countryType, i: Key) => (
            <Country key={i} country={country} />
          ))}
      </div>
    </>
  );
}

export default Countries;
