import { motion } from "motion/react";
import { Users, Target, Lightbulb, BookOpen } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Visi",
    description: "Menjadi pusat unggulan riset dan inovasi yang menghasilkan solusi berkelanjutan untuk kemajuan sains dan teknologi."
  },
  {
    icon: Users,
    title: "Misi",
    description: "Memfasilitasi kolaborasi penelitian, mengembangkan talenta muda, dan menerjemahkan penelitian menjadi inovasi nyata."
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    description: "Mendorong pengembangan teknologi terdepan melalui penelitian interdisipliner dan kemitraan strategis."
  },
  {
    icon: BookOpen,
    title: "Pendidikan",
    description: "Meningkatkan kualitas pendidikan melalui integrasi hasil penelitian ke dalam kurikulum dan pembelajaran."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
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
            Tentang <span className="text-blue-600">RIPSTEK FMIPA</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RIPSTEK FMIPA adalah organisasi yang berdedikasi untuk memajukan penelitian, 
            inovasi, pendidikan, dan teknologi di Fakultas Matematika dan Ilmu Pengetahuan Alam. 
            Kami berkomitmen untuk menciptakan dampak positif melalui kolaborasi dan excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Anggota Aktif</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">75+</div>
              <div className="text-blue-100">Proyek Penelitian</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Publikasi Internasional</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Kemitraan Industri</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}