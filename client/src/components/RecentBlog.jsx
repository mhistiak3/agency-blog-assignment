const blogPosts = [
  {
    id: 1,
    title: "Blog Title 1",
    description:
      "Short description about the blog post that gives a sneak peek of the content.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    link: "#",
  },
  {
    id: 2,
    title: "Blog Title 2",
    description:
      "A brief summary of the blog post that teases the content inside.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    link: "#",
  },
  {
    id: 3,
    title: "Blog Title 3",
    description: "Insightful snippet from the blog to intrigue the reader.",
    image: "https://images.unsplash.com/photo-1610703119104-0b00d2b369a1",
    link: "#",
  },
  {
    id: 4,
    title: "Blog Title 4",
    description:
      "A quick glimpse of the article, encouraging visitors to explore.",
    image: "https://images.unsplash.com/photo-1610703119104-0b00d2b369a1",
    link: "#",
  },
];

const RecentBlog = () => {
  return (
    <section className="py-16 bg-gray-50 px-2">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Recent Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
