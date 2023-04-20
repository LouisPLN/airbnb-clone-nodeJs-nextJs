import axios from "axios";

export const deleteArticleById = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/delete/article/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
