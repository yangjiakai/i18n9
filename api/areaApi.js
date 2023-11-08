import axios from "axios";
const url = "https://acme.riyuhouse.com/api/v1/estate/area";

export async function getAreas(params) {
  const response = await axios.get(url, { params });
  return response.data;
}
