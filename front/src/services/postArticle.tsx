import axios from "axios";

export const createArticle = async (body: {}) => {
  try {
    console.log(body);
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/article",
      headers: { "Content-Type": "application/json" },
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
};
