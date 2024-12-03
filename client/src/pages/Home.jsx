import Discover from "../components/Discover";
import Hero from "../components/Hero";
import RecentBlog from "../components/RecentBlog";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Hero />
      <Discover />
      <RecentBlog/>
    </>
  );
};
export default Home;
