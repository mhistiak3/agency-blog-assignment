const Discover = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 text-center">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          Discover What We Offer
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide top-notch services and content designed to help you grow
          and succeed.
        </p>

        {/* Features or Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Quality Content
            </h3>
            <p className="text-gray-700">
              We deliver well-researched and engaging content that resonates
              with your audience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Professional Guidance
            </h3>
            <p className="text-gray-700">
              Get expert advice and guidance to elevate your blogging game and
              strategy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Creative Solutions
            </h3>
            <p className="text-gray-700">
              Explore unique and creative strategies to enhance your blog’s
              performance and reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
