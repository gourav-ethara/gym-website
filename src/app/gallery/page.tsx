const galleryItems = [
  { title: "Training Floor", category: "Facility", gradient: "from-blue-600 to-blue-800", span: "col-span-1 row-span-2" },
  { title: "Yoga Studio", category: "Classes", gradient: "from-purple-600 to-purple-800", span: "col-span-1 row-span-1" },
  { title: "Free Weights", category: "Equipment", gradient: "from-orange-600 to-orange-800", span: "col-span-1 row-span-1" },
  { title: "Cardio Zone", category: "Equipment", gradient: "from-green-600 to-green-800", span: "col-span-1 row-span-1" },
  { title: "Boxing Ring", category: "Classes", gradient: "from-red-600 to-red-800", span: "col-span-1 row-span-2" },
  { title: "Pool Area", category: "Facility", gradient: "from-cyan-600 to-cyan-800", span: "col-span-1 row-span-1" },
  { title: "Locker Rooms", category: "Facility", gradient: "from-zinc-600 to-zinc-800", span: "col-span-1 row-span-1" },
  { title: "Juice Bar", category: "Amenities", gradient: "from-pink-600 to-pink-800", span: "col-span-1 row-span-1" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Take a look inside FitZone
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-110`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-zinc-300 uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                {/* Bottom Label (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
