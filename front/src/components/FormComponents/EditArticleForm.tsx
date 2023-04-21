import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { fetchArticleById } from "@/services/getArticleById";
import router, { useRouter } from "next/router";
import ArticleType from "@/types/ArticleType";
import { updateArticle } from "@/services/updateArticle";

const EditArticleForm = () => {
  const { quill, quillRef } = useQuill();
  const router = useRouter();

  const { id } = router.query;
  const [article, setArticle] = useState<ArticleType | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await fetchArticleById(id as string);
      if (data) {
        setArticle(data[0]);
      }
    };
    fetchArticle();
  }, [id]);

  // Set the value of the input fields

  const [content, setContent] = useState("");

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(article?.article_content || "");
    }
  }, [quill, article]);

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(article?.article_content || "");

      quill.on("text-change", (delta, oldDelta, source) => {
        setContent(quill.root.innerHTML);
        console.log("sah");
      });
    }
  }, [quill]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const obj = {} as any;
    for (let i = 0; i < event.target.length; i++) {
      if (
        event.target[i].nodeName.toUpperCase() == "INPUT" &&
        event.target[i].id != ""
      ) {
        obj[event.target[i].id] = event.target[i].value;
      }
    }

    obj["article_content"] = content;
    if (id) await updateArticle(id as string, obj);

    router.push(`/blog/article/${article?.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="article_author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Auteur de l'article
          </label>
          <input
            type="text"
            id="article_author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="John"
            defaultValue={article?.article_author || ""}
            required
          />
        </div>
        <div>
          <label
            htmlFor="article_category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Catégorie de l'article
          </label>
          <input
            type="text"
            id="article_category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
            placeholder="Développement web"
            defaultValue={article?.article_category || ""}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="article_image"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bannière de l'article (url)
        </label>
        <input
          type="text"
          id="article_image"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
          placeholder="https://www.example.com/image.jpg"
          defaultValue={article?.article_image || ""}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="article_title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Titre de l'article
        </label>
        <input
          type="text"
          id="article_title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
          placeholder="Développer un blog en Next Js & Node Js"
          defaultValue={article?.article_title || ""}
          required
        />
      </div>
      <div className="mb-6 height-[150px] max-width-[769px]">
        <div style={{ width: "100%", height: "auto" }}>
          <div ref={quillRef} />
        </div>
      </div>
      <button type="submit" className="btn btn-active btn-primary text-white">
        Modifier l'article
      </button>
    </form>
  );
};

export default EditArticleForm;
