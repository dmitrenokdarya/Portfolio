import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { AboutMePage } from "./pages/AboutMePage";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./routes/Router";
import { ProjectsPage } from "./pages/ProjectsPage";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const basename = process.env.PUBLIC_URL || '';
  return (
    <BrowserRouter basename={basename}>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="aboutme" element={<AboutMePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
