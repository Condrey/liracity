import { getLastTenNewsArticles } from "./action";
import ListOfNewsArticles from "./list-of-news-articles";

export async function NewsArticles(){
    const newsArticles = await getLastTenNewsArticles()
    return <ListOfNewsArticles newsArticles={newsArticles}/>
}