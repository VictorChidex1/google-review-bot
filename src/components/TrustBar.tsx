export default function TrustBar() {
  const logos = [
    { name: "RestaurantPro", icon: "🍽️" },
    { name: "CafeOne", icon: "☕" },
    { name: "BistroX", icon: "🍷" },
    { name: "HotelLuxe", icon: "🏨" },
    { name: "NovLuma", icon: "💡" },
    { name: "UrbanEats", icon: "🍔" },
    { name: "SpaSerenity", icon: "💆" },
    { name: "TechFix", icon: "🔧" },
  ];

  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10 overflow-hidden relative">
      <p className="text-center text-slate-400 font-medium text-sm uppercase tracking-widest mb-8">
        Trusted by Forward-Thinking Businesses
      </p>

      {/* Gradient Masks for Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Container - Uses w-max to fit content exactly, ensuring perfect loop math */}
      <div className="flex top-0 left-0 w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Original Set */}
        <div className="flex gap-16 px-8 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center gap-2 text-xl font-bold text-slate-800 whitespace-nowrap flex-shrink-0"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Duplicate Set (For Infinite Loop) */}
        <div className="flex gap-16 px-8 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center gap-2 text-xl font-bold text-slate-800 whitespace-nowrap flex-shrink-0"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
