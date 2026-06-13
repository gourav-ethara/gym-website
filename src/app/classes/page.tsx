export default function ClassesPage() {
  const classes = [
    {
      name: "HIIT Training",
      duration: "45 min",
      level: "Intermediate",
      description:
        "High-intensity interval training designed to burn calories and boost cardiovascular fitness through rapid exercise bursts.",
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Yoga Flow",
      duration: "60 min",
      level: "All Levels",
      description:
        "A dynamic yoga practice combining breath work and movement to improve flexibility, balance, and mental clarity.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Strength Training",
      duration: "50 min",
      level: "Beginner–Advanced",
      description:
        "Build muscle and increase power with guided weightlifting sessions tailored to your strength level.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "Spin Class",
      duration: "40 min",
      level: "Intermediate",
      description:
        "High-energy cycling workout set to motivating music. Great for cardiovascular endurance and leg strength.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Boxing",
      duration: "45 min",
      level: "All Levels",
      description:
        "Learn boxing techniques while getting an incredible full-body workout. No experience needed.",
      gradient: "from-red-500 to-rose-600",
    },
    {
      name: "Pilates",
      duration: "55 min",
      level: "Beginner",
      description:
        "Core-focused exercises that improve posture, flexibility, and overall body strength through controlled movements.",
      gradient: "from-pink-500 to-fuchsia-600",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Classes</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover classes designed to challenge and inspire you at every level
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls) => (
              <div
                key={cls.name}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all group"
              >
                {/* Card Header */}
                <div
                  className={`h-48 bg-gradient-to-br ${cls.gradient} flex items-center justify-center`}
                >
                  <span className="text-5xl font-black text-white/20 group-hover:scale-110 transition-transform">
                    {cls.name.split(" ")[0]}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-600 transition-colors">
                      {cls.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 mb-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {cls.duration}
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs">{cls.level}</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{cls.description}</p>

                  <button className="text-red-600 text-sm font-semibold hover:text-red-500 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
