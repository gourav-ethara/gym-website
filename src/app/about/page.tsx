export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-600">FitZone</span>
          </h1>
          <p className="text-zinc-400 text-lg">Our story, our mission, our community</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Founded in 2015, FitZone was born from a simple belief: everyone deserves access to
                a world-class fitness experience. What started as a small community gym has grown
                into a thriving fitness center serving thousands of members.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Our founders, Mike Johnson and Sarah Williams, saw a gap in the fitness industry —
                gyms that prioritized profits over people. They envisioned a place where members
                would feel supported, motivated, and empowered to reach their goals.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Today, FitZone continues that mission with state-of-the-art equipment, expert
                trainers, and a community that feels like family.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-zinc-900 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black text-red-600">FZ</div>
                  <div className="text-zinc-400 mt-2">Est. 2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              To make fitness accessible, enjoyable, and transformative for everyone, regardless
              of their starting point.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards in equipment, facilities, and training to deliver exceptional results.",
                icon: "⭐",
              },
              {
                title: "Community",
                description:
                  "We foster a supportive environment where members inspire and uplift each other every day.",
                icon: "👥",
              },
              {
                title: "Results",
                description:
                  "We are committed to helping every member achieve their personal fitness goals through proven methods.",
                icon: "🎯",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-zinc-900 border border-zinc-800 rounded-2xl"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-zinc-400">The people who make FitZone special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Johnson",
                role: "Founder & CEO",
                initials: "MJ",
                color: "from-red-600 to-red-800",
              },
              {
                name: "Sarah Williams",
                role: "Head Trainer",
                initials: "SW",
                color: "from-purple-600 to-purple-800",
              },
              {
                name: "David Chen",
                role: "Operations Manager",
                initials: "DC",
                color: "from-blue-600 to-blue-800",
              },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div
                  className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-3xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
