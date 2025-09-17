import { motion } from "motion/react";
import { Calendar, User, ExternalLink, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchProjects = [
  {
    id: 1,
    title: "Machine Learning untuk Prediksi Perubahan Iklim",
    description: "Pengembangan model machine learning untuk memprediksi perubahan iklim berdasarkan data historis dan real-time.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxMTQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Data Science",
    lead: "Dr. Sari Wulandari",
    date: "2024 - Ongoing",
    status: "active"
  },
  {
    id: 2,
    title: "Nanomaterial untuk Energi Terbarukan",
    description: "Penelitian pengembangan nanomaterial inovatif untuk aplikasi sel surya generasi baru dengan efisiensi tinggi.",
    image: "https://images.unsplash.com/photo-1639254062778-a20e66021609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMG5hbm90ZWNobm9sb2d5fGVufDF8fHx8MTc1ODExNDUwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Material Science",
    lead: "Prof. Ahmad Rizky",
    date: "2023 - 2025",
    status: "active"
  },
  {
    id: 3,
    title: "Biostatistika untuk Analisis Genomik",
    description: "Pengembangan metode statistik baru untuk analisis data genomik dalam penelitian biomedis dan farmasi.",
    image: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5vbWljcyUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NTgxMTQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Biostatistics",
    lead: "Dr. Maya Indira",
    date: "2024 - 2026",
    status: "active"
  },
  {
    id: 4,
    title: "Quantum Computing untuk Optimasi",
    description: "Implementasi algoritma quantum untuk menyelesaikan masalah optimasi kompleks dalam industri dan logistik.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY29tcHV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTgxMTQ1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Quantum Computing",
    lead: "Prof. Budi Santoso",
    date: "2023 - 2025",
    status: "active"
  },
  {
    id: 5,
    title: "Bioinformatika untuk Drug Discovery",
    description: "Penggunaan pendekatan komputasi untuk identifikasi dan pengembangan obat baru berbasis struktur protein.",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVnJTIwZGlzY292ZXJ5JTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTgxMTQ1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Bioinformatics",
    lead: "Dr. Fitri Rahmawati",
    date: "2024 - 2027",
    status: "active"
  },
  {
    id: 6,
    title: "Smart Materials untuk IoT",
    description: "Pengembangan material pintar yang dapat beradaptasi untuk aplikasi Internet of Things dan sensor.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBzbWFydCUyMG1hdGVyaWFscyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MTE0NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Smart Materials",
    lead: "Dr. Andi Prasetyo",
    date: "2024 - 2026",
    status: "active"
  }
];

export function Research() {
  return (
    <section id="research" className="py-20 bg-white">
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
            Penelitian <span className="text-blue-600">Terkini</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai proyek penelitian inovatif yang sedang berjalan, menghasilkan kontribusi nyata 
            untuk kemajuan sains dan teknologi.
          </p>
        </motion.div>

        {/* Research Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                    Active
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    {project.lead}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Baca Detail
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ingin Berkolaborasi dalam Penelitian?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan tim peneliti kami dan berkontribusi dalam 
              menciptakan inovasi yang berdampak bagi masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Ajukan Proposal
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Lihat Panduan Kolaborasi
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}