import axios from "axios";
import { getApiUrl } from "@/common/utils/api";

export const fetcher = (url: string) => {
  // Ensure API URLs are not prefixed with locale
  const apiUrl = url.startsWith("/api/") ? getApiUrl(url) : url;
  return axios.get(apiUrl).then((response) => response.data);
};
