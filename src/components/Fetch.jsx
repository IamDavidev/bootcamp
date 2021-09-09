import { useState, useEffect } from "react";
import RenderFetch from "./RenderFetch";
const Fetch = () => {
  const [news, setnews] = useState([]);
  //27ed20020309422ca0b45da73e1e7893
  useEffect(() => {
   fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-09&sortBy=publishedAt&apiKey=27ed20020309422ca0b45da73e1e7893"
    )
      .then((res) => res.json())
      .then((response) => {
        const dataNew = response
        const {content , title , url , publishedAt } = dataNew
        const {urlToImage} = dataNew
        return {content , title , url , publishedAt}
    }); 
    
  }, []);
  return <RenderFetch />;
};
// publishedAt urlToImage
export default Fetch;
