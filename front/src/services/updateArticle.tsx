import axios from "axios";
import ArticleType from "@/types/ArticleType";

export const updateArticle = async (
  id: string,
  updatedArticle: ArticleType
) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/edit/article/${id}`,
      updatedArticle
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update article.");
  }
};
