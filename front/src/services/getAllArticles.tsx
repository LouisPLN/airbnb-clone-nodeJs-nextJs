import axios, { AxiosResponse } from "axios";
import ArticleType from "@/types/ArticleType";

export const fetchApiData = async (): Promise<ArticleType[]> => {
  const url = "http://localhost:8000/api/articles";
  const response: AxiosResponse<ArticleType[]> = await axios.get(url);
  return response.data;
};
