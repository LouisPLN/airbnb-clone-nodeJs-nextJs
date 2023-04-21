import router from "next/router";

const EditButton = ({ articleId }: { articleId: number }) => {
  return (
    <a
      className="btn btn-sm btn-outline btn-info text-white text-xs mr-2"
      title="Modifier l'article"
      // href={}
      onClick={() => router.push(`/blog/article/edit/${articleId}`)}
    >
      📝
    </a>
  );
};

export default EditButton;
