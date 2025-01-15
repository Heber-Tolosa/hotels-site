export interface FakeAPIResponse {
  suggestions: Suggestion[];
  hotels: HotelElement[];
}

export interface HotelElement {
  id: number;
  hotel: HotelHotel;
  lowestPrice: Price;
  rooms: Room[];
}

export interface HotelHotel {
  name: string;
  address: string;
  stars: number;
  image: string;
  description: string;
}

export interface Price {
  currency: Currency;
  amount: number;
}

export enum Currency {
  Brl = "BRL",
}

export interface Room {
  roomType: RoomType;
  price: Price;
  cancellationPolicies: CancellationPolicies;
}

export interface CancellationPolicies {
  refundable: boolean;
}

export interface RoomType {
  name: string;
}

export interface Suggestion {
  id: number;
  name: string;
  region: string;
  type: Type;
}

export enum Type {
  M = "M",
}
