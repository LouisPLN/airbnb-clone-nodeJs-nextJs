import { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "react-quill/dist/quill.snow.css";
import { createArticle } from "@/services/postArticle";

const NewArticleForm = () => {
  const { quill, quillRef } = useQuill();
  const [content, setContent] = useState("");

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quill.root.innerHTML); // Get innerHTML using quill
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

    /**
     * {
    "article_title" : "Titre de l'article 50",
    "article_content" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam odio consectetur expedita, quos, eligendi, veritatis sit mollitia non molestiae in necessitatibus? Magnam repellat, cumque eaque quia nihil distinctio deserunt saepe laudantium ab ex sunt harum atque quam doloribus quae voluptatum odio provident! Delectus, numquam porro? Architecto, error rerum! Quisquam ut reprehenderit asperiores quae odio rem dolor veniam aliquid deserunt consequatur libero dolore blanditiis, doloremque enim nulla, tempora expedita tempore natus cum ab quia! Deserunt dolore iusto rem. Id ab optio pariatur. Corrupti voluptatum laudantium iste nulla, distinctio eum qui similique vitae optio eveniet, vel fugit. Minus, in. Reprehenderit, excepturi debitis.",
    "article_author": "Louis Braga",
    "article_category": "Categorie",
    "article_image": "Url de l'image",
    "article_status": "published"
     */
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Développement web"
            required
          />
        </div>
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
