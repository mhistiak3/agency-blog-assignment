import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row justify-between gap-4">
          {/* Left Side - Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              Empowering your blogging journey with insightful content and
              professional guidance. Our mission is to provide a platform that
              encourages creativity, knowledge sharing, and community
              engagement. Join us as we explore the art of blogging together!
            </p>

            {/* Additional Info */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to inspire individuals to start their blogging
                journey, providing them with tools and resources that make it
                easier to share their stories, ideas, and experiences with the
                world.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We envision a world where anyone with a story to tell has the
                opportunity to share it with an engaged audience.
              </p>
            </div>

            {/* Call to Action */}
            <a
              href="#"
              className="inline-block text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md transition mt-4"
            >
              Join Us Today
            </a>
          </div>

          {/* Right Side - Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_vector-1726250667231-3193654a4712"
              alt="About Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <Team/>
    </div>
  );
};

export default About;
