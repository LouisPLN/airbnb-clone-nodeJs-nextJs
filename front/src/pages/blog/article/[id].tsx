import AuthorArticle from "@/components/ArticleComponents/Author";
import ContentArticle from "@/components/ArticleComponents/Content";
import CategoryArticle from "@/components/ArticleComponents/Category";
import FormComment from "@/components/CommentComponents/Form";
import ResponseComment from "@/components/CommentComponents/Response";
import Navigation from "@/navigation";
import { useEffect, useState } from "react";
import { fetchArticleById } from "@/services/getArticleById";
import { useRouter } from "next/router";
import ArticleType from "@/types/ArticleType";

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
        <main className="blog-container">
          <AuthorArticle article={article} />
          <CategoryArticle article={article} />
          <ContentArticle article={article} />
          {/* <FormComment articleId={article.id} />
          <ResponseComment articleId={article.id} /> */}
        </main>
      </div>
    );
  }
};

export default Article;
