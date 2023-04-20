import axios, { AxiosResponse } from "axios";
import ArticleType from "@/types/ArticleType";

export const fetchArticleById = async (
  id: string
): Promise<ArticleType[] | null> => {
  const url = `http://localhost:8000/api/article/${id}`;
  try {
    const response: AxiosResponse<ArticleType[]> = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
