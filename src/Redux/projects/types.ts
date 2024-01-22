export interface TypeLot {
  _id: string;
  typeName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Projet {
  _id: string;
  name: string;
  adresse: string;
  etat: number;
  datefin: string;
  datestart: string;
  description: string;
}

export interface Lot {
  _id: string;
  numerodelot: string;
  surfacetotal: number;
  surfacesansbalcon: number;
  prix: number;
  bloc: string;
  etage: number;
  typelot: TypeLot[];
  projet: Projet ;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: Lot[];
}
