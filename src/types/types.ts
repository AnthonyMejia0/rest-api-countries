interface flags {
  png: string,
  svg: string
}

interface name {
  common: string,
  official: string
}

export interface countryType {
    name: name;
    population: number;
    region: string;
    capital: string;
    flags: flags;
    testing: number
  }