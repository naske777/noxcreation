import AllPost from "./components/allPosts";
import FeaturedPosts from "./components/featuredPosts";

export default function Blog() {
  return (
    <main className="mx-5 md:mx-[100px]">
      <FeaturedPosts />
      <AllPost/>
    </main>
  );
}
