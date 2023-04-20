import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { createArticle } from "@/services/postArticle";
import { useRouter } from "next/router";

const NewArticleForm = () => {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quill.root.innerHTML);
        setContent(quill.root.innerHTML);
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
    await createArticle(obj);

    router.push("/blog");
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
          required
        />
      </div>
      <div className="mb-6 height-[150px]">
        <div style={{ width: "100%", height: "auto" }}>
          <div ref={quillRef} />
        </div>
      </div>
      <button type="submit" className="btn btn-active btn-primary text-white">
        Poster l'article
      </button>
    </form>
  );
};

export default NewArticleForm;
