import Category from "./Category";
import ArticleType from "@/types/ArticleType";

const CardArticles = ({ article }: { article: ArticleType }) => {
  return (
    <>
      <a
        href={`/blog/article/${article.id}`}
        className="max-w-[300px] min-w-[300px] rounded-xl overflow-hidden shadow"
      >
        <img
          className="w-full h-36 object-cover"
          src={article.article_image}
          alt={article.article_image}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-4">{article.article_title}</div>
          <p className="text-md text-gray-700 dark:text-white">
            Rédigé par {article.article_author}
          </p>
          <p className=" mt-2 text-sm font-light text-gray-500 dark:text-gray-400 dark:text-gray-400">
            <time>
              Mis en ligne le{" "}
              {new Date(article.article_publish_date).toLocaleDateString()}
            </time>
          </p>
        </div>
        <hr />
        <div className="px-6 pt-4">
          <Category article={article} />
        </div>
      </a>
    </>
  );
};

export default CardArticles;
