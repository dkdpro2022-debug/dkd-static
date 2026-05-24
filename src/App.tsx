import Header from "./components/Header";
import Hero from "./components/Hero";
import HomepageSections from "./components/HomepageSections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-100 selection:text-slate-900">
      <Header />
      <Hero />
      <HomepageSections />
      <Footer />
    </div>
  );
}
