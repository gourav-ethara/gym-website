import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                FITZONE
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm">
              Transform your body, elevate your mind. Premium fitness facility
              with world-class equipment and expert trainers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/classes", label: "Classes" },
                { href: "/trainers", label: "Trainers" },
                { href: "/pricing", label: "Pricing" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@fitzone.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} FitZone. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-zinc-500 hover:text-white text-sm transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
