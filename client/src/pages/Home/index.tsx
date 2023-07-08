import BlogSection from "./components/blog";
import CategoriesSection from "./components/categories";
import ExplorerSection from "./components/explorer";
import JoinUsSection from "./components/joinUs";
import LatestSeciton from "./components/latest";
import LatestCommentSection from "./components/latestComment";

function Home() {
  return (
    <>
    <ExplorerSection /> 
    <LatestSeciton />
    <CategoriesSection />
    <BlogSection />
    <LatestCommentSection />
    <JoinUsSection />
       </>
  );
}

export default Home;
