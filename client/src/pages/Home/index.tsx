import BlogSection from "./components/blog";
import CategoriesSection from "./components/categories";
import ExplorerSection from "./components/explorer";
import JoinUsSection from "./components/joinUs";
import LatestSeciton from "./components/latest";
import LatestCommentSection from "./components/latestComment";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ExplorerSection />
      <LatestSeciton />
      <CategoriesSection />
      <BlogSection />
      <LatestCommentSection />
      <JoinUsSection />
    </motion.div>
  );
}

export default Home;
