import AuthorArticle from "@/components/ArticleComponents/Author";
import ContentArticle from "@/components/ArticleComponents/Content";
import CategoryArticle from "@/components/ArticleComponents/Category";
import FormComment from "@/components/CommentComponents/Form";
import ResponseComment from "@/components/CommentComponents/Response";
import Navigation from "@/navigation";

const Article = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="blog-container">
        <AuthorArticle />
        <CategoryArticle />
        <ContentArticle />
        <FormComment />
        <ResponseComment />
      </main>
    </div>
  );
};

export default Article;
