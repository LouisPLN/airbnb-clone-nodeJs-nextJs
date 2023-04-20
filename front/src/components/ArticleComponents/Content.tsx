import ArticleType from "@/types/ArticleType";

const ContentArticle = ({ article }: { article: ArticleType }) => {
  return (
    <article className="text-justify w-full">
      <h1 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
        Titre de l'article
      </h1>
      <div
        className="mb-8 leading-tight"
        dangerouslySetInnerHTML={{ __html: article.article_content }}
      />
      <hr />
      <div className="flex items-center justify-end w-full my-6 text-base font-light text-gray-800 dark:text-gray-400 ">
        <time>
          Mis en ligne le{" "}
          {new Date(article?.article_publish_date).toLocaleDateString()}
        </time>
      </div>
    </article>
  );
};

export default ContentArticle;
