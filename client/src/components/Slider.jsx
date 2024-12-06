import { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1610703119104-0b00d2b369a1",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen">
      {/* Slider Images */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out slider-image"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-center mb-4">
          Explore the Beauty of Nature
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-center max-w-lg">
          Immerse yourself in breathtaking landscapes and discover the world
          like never before.
        </p>
        <a
          href="#"
          className="inline-block bg-yellow-300 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-yellow-400"
        >
          Start Your Journey
        </a>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full"
        onClick={() =>
          setCurrentImage(
            (prevImage) => (prevImage - 1 + images.length) % images.length
          )
        }
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-opacity-70 hover:bg-opacity-100 p-3 rounded-full"
        onClick={() =>
          setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }
      >
        &#8594;
      </button>
    </section>
  );
};

export default Slider;
