import { api } from "./api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL + "/user";

export async function getDashboardUsers() {
  const response = await api.get(BASE_URL + "/dashboard");
  return response.data;
}
