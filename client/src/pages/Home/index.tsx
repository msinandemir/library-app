import BlogSection from "./components/blog";
import CategoriesSection from "./components/categories";
import ExplorerSection from "./components/explorer";
import JoinUsSection from "./components/joinUs";
import LatestSection from "./components/latest";
import LatestCommentSection from "./components/latestComment";
import { AnimatedSection } from "../../components/Animations";

function Home() {
  return (
    <AnimatedSection>
      <ExplorerSection />
      <LatestSection />
      <CategoriesSection />
      <BlogSection />
      <LatestCommentSection />
      <JoinUsSection />
    </AnimatedSection>
  );
}

export default Home;
