import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Software2 from "./pages/Software2";
import IntroToUni from "./pages/IntroToUni";
import Department from "./pages/Department";
import GradingSystem from "./pages/GradingSystem";
import Admistration from "./pages/Admistration";
import Software from "./pages/Software";
import Software1 from "./pages/Software1";
import Software from "./pages/Software3";
import Software1 from "./pages/Software11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/software3":
        title = "";
        metaDescription = "";
        break;
      case "/intro-to-uni":
        title = "";
        metaDescription = "";
        break;
      case "/department-1":
        title = "";
        metaDescription = "";
        break;
      case "/grading-system":
        title = "";
        metaDescription = "";
        break;
      case "/admistration":
        title = "";
        metaDescription = "";
        break;
      case "/software":
        title = "";
        metaDescription = "";
        break;
      case "/software2":
        title = "";
        metaDescription = "";
        break;
      case "/software4":
        title = "";
        metaDescription = "";
        break;
      case "/software5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/software3" element={<Software2 />} />
      <Route path="/intro-to-uni" element={<IntroToUni />} />
      <Route path="/department-1" element={<Department />} />
      <Route path="/grading-system" element={<GradingSystem />} />
      <Route path="/admistration" element={<Admistration />} />
      <Route path="/software" element={<Software />} />
      <Route path="/software2" element={<Software1 />} />
      <Route path="/software4" element={<Software />} />
      <Route path="/software5" element={<Software1 />} />
    </Routes>
  );
}
export default App;
