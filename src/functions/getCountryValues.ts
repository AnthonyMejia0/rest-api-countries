import { countryType } from "../types/types";

export const getCurrencyArray = (country: countryType) => {
  let currencyArray = [] as string[];

  if (!country.currencies) {
    return currencyArray;
  }

  Object.values(country.currencies).map((curr) =>
    currencyArray.push(curr.name)
  );

  return currencyArray;
};

export const getNativeName = (country: countryType) => {
  return Object.values(country.name.nativeName)[
    Object.values(country.name.nativeName).length - 1
  ].common;
};

export const getCountryLanguages = (country: countryType) => {
  let languageArray = [] as string[];
  Object.values(country.languages).map((lang) => languageArray.push(lang));

  return languageArray;
};

export const getCountryBorders = async (country: countryType) => {
  let borderArray = [] as countryType[];

  if (!country.borders) {
    return borderArray;
  }

  for (const countryCode of country.borders) {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const borderCountry = await response.json();

    borderArray.push(borderCountry[0]);
  }

  return borderArray;
};
