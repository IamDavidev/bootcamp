import { useState, useEffect } from "react";
import RenderFetch from "./RenderFetch";
const Fetch = () => {
  const [news, setNews] = useState([]);
  //27ed20020309422ca0b45da73e1e7893
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-09&sortBy=publishedAt&apiKey=27ed20020309422ca0b45da73e1e7893"
    )
     .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        const arti = articles.map((i) => {
          const { content, title, url, publishedAt } = i;
          const { urlToImage } = i;
          return { content, title, url, publishedAt, urlToImage };
        });
        return setNews(arti)
      });
  }, []);
  return <RenderFetch props={news}/>;
};
export default Fetch;
// publishedAt urlToImage
// const {content , title , url , publishedAt } = dataNew
// console.log(content)
// const {urlToImage} = dataNew
// return setNews({})
