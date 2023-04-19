import React from "react";

import AuthorArticle from "@/components/ArticleComponents/Author";
import ContentArticle from "@/components/ArticleComponents/Content";
import CategoryArticle from "@/components/ArticleComponents/Category";

const Article = () => {
  return (
    <main>
      <AuthorArticle />
      <CategoryArticle />
      <ContentArticle />
    </main>
  );
};

export default Article;
