import EditArticleForm from "@/components/FormComponents/EditArticleForm";
import Navigation from "@/navigation";
import React from "react";

const EditArticle = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="blog-container">
        <EditArticleForm />
      </main>
    </div>
  );
};

export default EditArticle;
