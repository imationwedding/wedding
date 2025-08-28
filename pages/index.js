import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529634806980-3d3e1f1c1f5b')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white z-10"
        >
          Esküvői Videózás
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl text-white mt-4 z-10"
        >
          Megörökítjük életed legszebb pillanatait
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 z-10"
        >
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
            Kapcsolatfelvétel
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Rólunk</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Több éves tapasztalattal készítünk gyönyörű, érzelmekkel teli esküvői
          filmeket. Célunk, hogy minden pillanatot újra átélhessetek.
        </p>
      </section>

      {/* Video Portfolio */}
      <section className="py-20 bg-gray-100 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">Portfólió</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Esküvői videó 1"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Esküvői videó 2"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video bg-black rounded-2xl shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Esküvői videó 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Kapcsolat</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-6">
          Írj nekünk, és megbeszéljük a részleteket!
        </p>
        <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          Email küldése
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Esküvői Videózás – Minden jog fenntartva</p>
      </footer>
    </div>
  );
}
