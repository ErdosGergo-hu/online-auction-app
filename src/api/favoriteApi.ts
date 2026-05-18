import { api } from "./api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/favorite";

export async function getFavoriteAuctionsByUserId(userId: number) {
  const response = await api.get(BASE_URL + "/user/" + userId);
  return response.data;
}

export async function toggleFavorite(userId: number, auctionId: number) {
  const response = await api.post(BASE_URL, {
    userId,
    auctionId,
  });
  return response.data;
}
