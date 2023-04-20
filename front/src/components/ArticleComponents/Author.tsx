import ArticleType from "@/types/ArticleType";

const AuthorArticle = ({ article }: { article: ArticleType }) => {
  return (
    <address className="w-full flex justify-start items-center mb-6 not-italic relative">
      <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
        <img
          className="mr-4 w-16 h-16 rounded-full"
          src={article.article_image}
          alt={article.article_image}
        />
        <div>
          <a
            href="#"
            rel="author"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            {article.article_author}
          </a>
          <p className="text-base font-light text-gray-500 dark:text-gray-400 dark:text-gray-400">
            <time>
              Mis en ligne le{" "}
              {new Date(article?.article_publish_date).toLocaleDateString()}
            </time>
          </p>
        </div>
      </div>
    </address>
  );
};

export default AuthorArticle;
