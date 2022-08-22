interface flags {
  png: string,
  svg: string
}

interface name {
  common: string,
  official: string,
  nativeName: Object
}


export interface countryType {
    name: name;
    population: number;
    region: string;
    capital: string;
    flags: flags;
    subregion: string;
    tld: string[];
    currencies: Object;
    languages: Object;
    borders: string[];
  }