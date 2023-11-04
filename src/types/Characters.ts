export type Char = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: string;
};

export type fetchCharType = Omit<Char, "origin"> & { origin: { name: string } };
