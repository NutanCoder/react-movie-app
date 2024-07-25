import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import TrendingMoviePage from "./pages/trending_movie_page";
import AppLayout from "./layouts/app_layout";
import MovieDetailPage from "./pages/movie_detail_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/trending" element={<TrendingMoviePage />} />
            <Route path="/movies/:mId" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;