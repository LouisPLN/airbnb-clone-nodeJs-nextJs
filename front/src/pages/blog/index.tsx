import CardArticles from "@/components/ArticleComponents/CardArticles";
import Navigation from "@/navigation";
import { useEffect, useState } from "react";
import { fetchApiData } from "@/services/getAllArticles";
import ArticleType from "@/types/ArticleType";

export default function Index() {
  const [data, setData] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await fetchApiData();
      setData(apiData);
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="app-container">
        <Navigation />
        <div className="blog-container">
          <div className="flex flex-wrap justify-center gap-6">
            {data.map((article: ArticleType) => (
              <CardArticles article={article} key={article.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
