import { motion } from "framer-motion";
<li><a href="#terms" className="hover:text-yellow-600 transition-colors">ÁSZF</a></li>
<li><a href="#contact" className="hover:text-yellow-600 transition-colors">Kapcsolat</a></li>
</ul>
</div>
</nav>


<section className="relative h-screen flex flex-col items-center justify-center text-center text-gray-900">
<motion.h1
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-5xl md:text-7xl font-extrabold"
>
Esküvői filmek, amik örökre megmaradnak
</motion.h1>
<motion.div
initial={{ scaleX: 0 }}
animate={{ scaleX: 1 }}
transition={{ duration: 1.2, delay: 0.5 }}
className="w-24 h-1 bg-yellow-500 mx-auto mt-4"
/>
<motion.p
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.6 }}
className="mt-6 text-xl max-w-2xl mx-auto text-gray-700"
>
Megörökítem a legszebb pillanataitokat egy életre szóló emlékben.
</motion.p>
<a href="#portfolio">
<Button className="mt-8 text-lg px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105">
Nézd meg a portfóliót
</Button>
</a>
</section>


<section className="py-24 px-6 md:px-20 bg-white" id="portfolio">
<h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Portfólió</h2>
<div className="flex justify-center gap-4 mb-8">
<Button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full ${filter==='all'?'bg-yellow-500 text-white':'bg-gray-200'}`}>Összes</Button>
<Button onClick={() => setFilter('esküvő')} className={`px-4 py-2 rounded-full ${filter==='esküvő'?'bg-yellow-500 text-white':'bg-gray-200'}`}>Esküvő</Button>
</div>
<div className="grid md:grid-cols-2 gap-10">
{filteredVideos.map(video => (
<Card key={video.id} className="rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer" onClick={() => openModal(video)}>
<CardContent className="p-0">
<div className="p-6 bg-gray-50">
<h3 className="text-xl font-semibold text-gray-800 border-l-4 border-yellow-500 pl-3">{video.title}</h3>
</div>
</CardContent>
</Card>
))}
</div>
</section>


<Modal
isOpen={modalIsOpen}
onRequestClose={closeModal}
contentLabel="Video Modal"
className="absolute top-1/2 left-1/2 w-11/12 md:w-2/3 max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl outline-none"
overlayClassName="fixed inset-0 bg-black/50 z-50"
>
{currentVideo && (
<div className="flex flex-col">
<iframe src={currentVideo.url} width="100%" height="450" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title={currentVideo.title}></iframe>
<Button onClick={closeModal} className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white">Bezárás</Button>
</div>
)}
</Modal>


{/* A további szekciók (Rólam, Árak, ÁSZF, Kapcsolat) változatlanok, csak az űrlapot lehetne integrálni backend form submit-tel */}
</div>
);
}