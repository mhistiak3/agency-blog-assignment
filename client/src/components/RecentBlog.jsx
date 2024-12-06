import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const RecentBlog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/blogs`
        );
        if(response.data.success){
          setBlogPosts(response.data.data);
        }
      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <section className="py-16 bg-gray-50 px-2">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Recent Blogs
        </h2>

        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {  blogPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image.imageURL}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read More
                </a>
              </div>
            </div>
            )).slice(0, 4)}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentBlog;
