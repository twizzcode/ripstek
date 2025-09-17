import { motion } from "motion/react";
import { Microscope, Computer, Calculator, FlaskConical, Users, Award } from "lucide-react";

const programs = [
  {
    icon: Microscope,
    title: "Laboratorium Penelitian",
    description: "Fasilitas penelitian canggih dengan peralatan modern untuk mendukung riset berkualitas tinggi.",
    features: ["Mikroskop Electron", "Spektrometer", "Analytical Tools", "Clean Room"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Computer,
    title: "Computational Science",
    description: "Program pengembangan komputasi sains dan pemodelan matematika untuk solusi kompleks.",
    features: ["Machine Learning", "Big Data", "Simulation", "AI Research"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Calculator,
    title: "Applied Mathematics",
    description: "Riset matematika terapan untuk aplikasi industri dan teknologi modern.",
    features: ["Optimization", "Statistics", "Modeling", "Data Analysis"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FlaskConical,
    title: "Material Science",
    description: "Penelitian material maju untuk aplikasi teknologi masa depan.",
    features: ["Nanomaterials", "Biomaterials", "Smart Materials", "Characterization"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Program pendampingan untuk mengembangkan talenta muda dalam bidang riset.",
    features: ["Research Guidance", "Career Development", "Skill Building", "Networking"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Award,
    title: "Innovation Hub",
    description: "Inkubator inovasi untuk mengembangkan ide menjadi produk yang berdampak.",
    features: ["Startup Support", "Patent Assistance", "Commercialization", "Funding"],
    color: "from-teal-500 to-teal-600"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            Program <span className="text-blue-600">Unggulan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Berbagai program inovatif yang dirancang untuk mengembangkan kemampuan riset, 
            inovasi, dan kolaborasi dalam bidang sains dan teknologi.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
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
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Tertarik Bergabung dengan Program Kami?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Dapatkan akses ke fasilitas penelitian terdepan, mentorship berkualitas, 
              dan jaringan kolaborasi yang luas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Daftar Sekarang
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                Download Brosur
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}