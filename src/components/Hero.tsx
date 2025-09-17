import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  // List of image filenames
  const images = [
    "/Hero/1.png", "/Hero/2.png", "/Hero/3.png", "/Hero/4.png", "/Hero/5.png", "/Hero/6.png", 
    "/Hero/7.png", "/Hero/8.png", "/Hero/9.png", "/Hero/10.png", "/Hero/11.png",
  ];
  

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Purple border decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Organization Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-blue-600 inline-flex text-sm font-medium bg-blue-100 px-8 py-2 rounded-full">
                <p>Organisasi Riset & Inovasi</p>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 mb-4">
                RIPSTEK
              </h1>
              <h2 className="text-3xl lg:text-4xl font-medium text-gray-800">
                FMIPA
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              Organisasi <strong>Riset, Inovasi, Pendidikan dan Teknologi</strong> yang berdedikasi untuk mengembangkan penelitian berkualitas dan menciptakan inovasi yang berdampak nyata bagi masyarakat.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
                Bergabung Sekarang
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative min-h-[60vh] flex items-end justify-end"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white">
              <ImageWithFallback
                src={images[current]}
                alt={`Hero ${current + 1}`}
                className="h-[60vh] w-auto object-contain block"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <path
            d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V120Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}