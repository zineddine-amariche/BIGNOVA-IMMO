export interface TypeLot {
    _id: string;
    typeName: string;
    createdAt: string;
    updatedAt: string;
  }
export interface AllTypeLots {
  id: string;
  name: string;
  age: number;
}

export interface ApiResponse {
  status: string;
  message: string;
  data:   TypeLot[] | null
}
