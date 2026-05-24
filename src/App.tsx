import Header from "./components/Header";
import Hero from "./components/Hero";
import HomepageSections from "./components/HomepageSections";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import DetailPage from "./components/DetailPage";
import { contentDetails, defaultContentDetail, homepageSections } from "./data";

const normalizePath = (value?: string) => {
  if (!value) return "/";
  return value.replace(/\/+$/, "") || "/";
};

export default function App() {
  const currentPath = normalizePath(window.location.pathname);
  const contentMatch = homepageSections.flatMap((section) =>
    section.items.map((item) => ({ section, item }))
  ).find(({ item }) => normalizePath(item.href) === currentPath);
  const sectionPage = homepageSections.find((section) => section.sourceUrl && normalizePath(section.sourceUrl) === currentPath);
  const blogSection = homepageSections.find((section) => section.id === "blog");

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      <Header />
      {contentMatch ? (
        <DetailPage
          item={contentMatch.item}
          section={contentMatch.section}
          detail={contentDetails[contentMatch.item.href] ?? defaultContentDetail(contentMatch.item.title, contentMatch.section.title)}
          relatedItems={contentMatch.section.items.filter((item) => item.href !== contentMatch.item.href)}
          blogItems={blogSection?.items ?? []}
        />
      ) : sectionPage ? (
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
