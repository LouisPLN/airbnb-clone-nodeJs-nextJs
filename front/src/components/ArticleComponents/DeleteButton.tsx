import { deleteArticleById } from "@/services/deleteArticleById";
import { useRouter } from "next/router";

const DeleteButton = ({ articleId }: { articleId: number }) => {
  const router = useRouter();
  const handleDeleteArticle = async () => {
    console.log("delete article");
    await deleteArticleById(articleId.toString() as string);
    router.push("/blog"); // redirige vers la liste des articles
  };

  return (
    <button
      className="btn btn-sm btn-outline btn-error text-white text-xs"
      onClick={handleDeleteArticle}
      title="Supprimer l'article"
    >
      🗑️
    </button>
  );
};

export default DeleteButton;
