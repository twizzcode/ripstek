import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const newsData = [
  {
    id: 1,
    title: "RIPSTEK FMIPA Raih Hibah Penelitian International Senilai 2 Miliar",
    excerpt: "Tim peneliti RIPSTEK berhasil mendapatkan hibah penelitian dari lembaga internasional untuk pengembangan teknologi nanomaterial.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGdyYW50JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU4MTE0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Penelitian",
    date: "15 September 2025",
    readTime: "3 min",
    featured: true
  },
  {
    id: 2,
    title: "Mahasiswa RIPSTEK Juara 1 Kompetisi Inovasi Teknologi Nasional",
    excerpt: "Tim mahasiswa berhasil meraih juara pertama dengan inovasi aplikasi AI untuk prediksi cuaca berbasis IoT.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXBldGl0aW9uJTIwd2lubmVyc3xlbnwxfHx8fDE3NTgxMTQ1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Prestasi",
    date: "12 September 2025",
    readTime: "4 min",
    featured: false
  },
  {
    id: 3,
    title: "Workshop Machine Learning untuk Pemula Digelar Perdana",
    excerpt: "RIPSTEK mengadakan workshop gratis untuk mahasiswa yang ingin mempelajari dasar-dasar machine learning dan AI.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMG1hY2hpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTgxMTQ1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Event",
    date: "10 September 2025",
    readTime: "2 min",
    featured: false
  },
  {
    id: 4,
    title: "Kolaborasi dengan Industri: MOU dengan PT. Tech Innovation",
    excerpt: "RIPSTEK menandatangani MOU dengan perusahaan teknologi untuk program magang dan transfer teknologi.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwYWdyZWVtZW50fGVufDF8fHx8MTc1ODExNDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Kemitraan",
    date: "8 September 2025",
    readTime: "5 min",
    featured: false
  },
  {
    id: 5,
    title: "Publikasi Internasional Tim RIPSTEK di Journal Nature",
    excerpt: "Penelitian tentang material cerdas berhasil dipublikasikan di jurnal internasional bergengsi Nature Materials.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwcHVibGljYXRpb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NTgxMTQ1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Publikasi",
    date: "5 September 2025",
    readTime: "4 min",
    featured: false
  },
  {
    id: 6,
    title: "RIPSTEK Launching Program Incubator Startup Teknologi",
    excerpt: "Program inkubator baru untuk mendukung mahasiswa mengembangkan startup berbasis teknologi dan inovasi.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwaW5jdWJhdG9yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxMTQ1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Program",
    date: "3 September 2025",
    readTime: "3 min",
    featured: false
  }
];

export function News() {
  const featuredNews = newsData.find(news => news.featured);
  const regularNews = newsData.filter(news => !news.featured);

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Berita & <span className="text-blue-600">Update</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ikuti perkembangan terbaru kegiatan, penelitian, dan pencapaian dari 
            RIPSTEK FMIPA.
          </p>
        </motion.div>

        {/* Featured News */}
        {featuredNews && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <ImageWithFallback
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {featuredNews.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredNews.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredNews.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {news.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                  {news.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {news.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            Lihat Berita Lainnya
          </button>
        </motion.div>
      </div>
    </section>
  );
}