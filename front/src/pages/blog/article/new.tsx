import NewArticleForm from "@/components/FormComponents/NewArticleForm";
import Navigation from "@/navigation";
import React from "react";

const NewArticle = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="blog-container">
        <NewArticleForm />
      </main>
    </div>
  );
};

export default NewArticle;
