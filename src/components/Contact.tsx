import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    info: "Gedung FMIPA, Universitas Indonesia\nDepok, Jawa Barat 16424",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Telepon",
    info: "+62 21 7863 5555\n+62 21 7270 1823",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    info: "info@ripstek-fmipa.ac.id\nkolaborasi@ripstek-fmipa.ac.id",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    info: "Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00",
    color: "from-orange-500 to-orange-600"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
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
            Hubungi <span className="text-blue-600">Kami</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tertarik untuk berkolaborasi, bergabung, atau membutuhkan informasi lebih lanjut? 
            Jangan ragu untuk menghubungi kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{contact.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {contact.info}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="font-bold text-gray-900 mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                {[
                  { name: "Instagram", color: "from-pink-500 to-rose-500" },
                  { name: "LinkedIn", color: "from-blue-600 to-blue-700" },
                  { name: "Twitter", color: "from-blue-400 to-blue-500" },
                  { name: "YouTube", color: "from-red-500 to-red-600" }
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200">
                  <option>Pilih subjek pesan</option>
                  <option>Kolaborasi Penelitian</option>
                  <option>Pendaftaran Anggota</option>
                  <option>Informasi Program</option>
                  <option>Kemitraan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-3 w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Saya setuju dengan{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    kebijakan privasi
                  </a>{" "}
                  dan syarat penggunaan.
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-100 rounded-3xl p-8 text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Lokasi Kami</h3>
            <p className="text-gray-600 mb-6">
              Kunjungi kantor RIPSTEK FMIPA di kampus Universitas Indonesia, Depok. 
              Kami siap menyambut kolaborasi dan diskusi dengan Anda.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <MapPin className="w-4 h-4 mr-2" />
              Buka di Google Maps
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}