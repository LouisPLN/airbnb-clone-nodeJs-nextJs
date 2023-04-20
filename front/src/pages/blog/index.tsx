import CardArticles from "@/components/ArticleComponents/CardArticles";
import Navigation from "@/navigation";
import { useEffect, useState } from "react";
import { fetchAllArticles } from "@/services/getAllArticles";
import ArticleType from "@/types/ArticleType";

export default function Index() {
  const [data, setData] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchAllArticles();
      setData(apiData);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Navigation />
      <div className="blog-container">
        {!data || data.length === 0 ? (
          <div>
            Il n'existe aucun article sur le blog{" "}
            <a
              href="/blog/article/new"
              className="text-primary hover:underline"
            >
              créez en un !
            </a>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {data.map((article: ArticleType) => (
              <CardArticles article={article} key={article.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
