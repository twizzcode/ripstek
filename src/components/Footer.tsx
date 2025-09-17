import { motion } from "motion/react";
import { Mail, Phone, MapPin, ExternalLink, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Tentang Kami", href: "#about" },
  { name: "Program", href: "#programs" },
  { name: "Penelitian", href: "#research" },
  { name: "Berita", href: "#news" },
  { name: "Kontak", href: "#contact" },
];

const programs = [
  { name: "Laboratorium Penelitian", href: "#" },
  { name: "Computational Science", href: "#" },
  { name: "Applied Mathematics", href: "#" },
  { name: "Material Science", href: "#" },
  { name: "Innovation Hub", href: "#" },
];

const resources = [
  { name: "Panduan Penelitian", href: "#" },
  { name: "Publikasi", href: "#" },
  { name: "Download Center", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Karir", href: "#" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logoRipstek.png"
                alt="RIPSTEK FMIPA Logo"
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">RIPSTEK</h3>
                <p className="text-sm text-blue-200">FMIPA</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Organisasi Riset, Inovasi, Pendidikan dan Teknologi yang berdedikasi 
              untuk mengembangkan penelitian berkualitas dan menciptakan inovasi 
              yang berdampak nyata bagi masyarakat.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                Gedung FMIPA, Universitas Negeri Semarang
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                +62 21 7863 5555
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                info@ripstek-fmipa.ac.id
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Program</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {program.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Sumber Daya</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h5 className="font-bold mb-3">Newsletter</h5>
              <p className="text-sm text-gray-300 mb-4">
                Dapatkan update terbaru dari RIPSTEK
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 text-sm"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              {[
                { name: "Instagram", color: "hover:bg-pink-600" },
                { name: "LinkedIn", color: "hover:bg-blue-600" },
                { name: "Twitter", color: "hover:bg-blue-400" },
                { name: "YouTube", color: "hover:bg-red-600" },
                { name: "Facebook", color: "hover:bg-blue-800" }
              ].map((social) => (
                <button
                  key={social.name}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white ${social.color} transition-all duration-200 hover:scale-110`}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-5 h-5 bg-current rounded-sm"></div>
                </button>
              ))}
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Kembali ke Atas</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © 2025 RIPSTEK FMIPA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Syarat Penggunaan
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}