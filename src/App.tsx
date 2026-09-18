import { Routes, Route } from "react-router-dom";
import ArticlePage from "./Pages/real-page/ArticlePage";
import NewsDetail from "./Pages/news-detail/newsDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticlePage />} />
      <Route path="/news-detail" element={<NewsDetail />} />
    </Routes>
  );
}

export default App;
