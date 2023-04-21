import AuthorArticle from "@/components/ArticleComponents/Author";
import ContentArticle from "@/components/ArticleComponents/Content";
import CategoryArticle from "@/components/ArticleComponents/Category";
import FormComment from "@/components/FormComponents/NewCommentForm";
import ResponseComment from "@/components/CommentComponents/Response";
import Navigation from "@/navigation";
import { useEffect, useState } from "react";
import { fetchArticleById } from "@/services/getArticleById";
import { useRouter } from "next/router";
import ArticleType from "@/types/ArticleType";
import DeleteButton from "@/components/ArticleComponents/DeleteButton";
import EditButton from "@/components/ArticleComponents/EditButton";

const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  // const [article, setArticle] = useState<ArticleType[] | null>([]);
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

  if (!article) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app-container">
        <Navigation />
        <main className="blog-container relative">
          <div className="flex justify-between items-start w-full">
            <AuthorArticle article={article} />
            <div className="flex">
              <EditButton articleId={article.id} />
              <DeleteButton articleId={article.id} />
            </div>
          </div>
          <CategoryArticle article={article} />
          <ContentArticle article={article} />
          {/* <FormComment />
          {/* article={article.id}  */}
          {/* <ResponseComment />  */}
        </main>
      </div>
    );
  }
};

export default Article;
