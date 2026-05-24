import Header from "./components/Header";
import Hero from "./components/Hero";
import HomepageSections from "./components/HomepageSections";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import { homepageSections } from "./data";

const normalizePath = (value?: string) => {
  if (!value) return "/";
  return value.replace(/\/+$/, "") || "/";
};

export default function App() {
  const currentPath = normalizePath(window.location.pathname);
  const sectionPage = homepageSections.find((section) => section.sourceUrl && normalizePath(section.sourceUrl) === currentPath);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      <Header />
      {sectionPage ? (
        <CategoryPage section={sectionPage} />
      ) : (
        <>
          <Hero />
          <HomepageSections />
        </>
      )}
      <Footer />
    </div>
  );
}
