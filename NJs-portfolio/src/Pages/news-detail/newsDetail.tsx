import ArticleMenu from "./articleMenu";
import ArticleFooter from "./articleFooter";
import ArticleDetailContent from "./articleDetailContent";
import ArticleHeader from "./articleHeader";
import Preloader from "./preLoader";

export default function NewsDetail() {
  return (
    <>
      <Preloader />
      <ArticleHeader />
      <ArticleMenu />
      <ArticleDetailContent />
      <ArticleFooter />
    </>
  );
}
