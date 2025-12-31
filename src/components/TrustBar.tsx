export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10">
      <p className="text-center text-slate-400 font-medium text-sm uppercase tracking-widest mb-6">
        Trusted by Forward-Thinking Businesses
      </p>
      <div className="flex justify-center flex-wrap gap-8 opacity-40 grayscale">
        {/* Placeholders for logos */}
        <span className="text-xl font-bold">Resteraunt</span>
        <span className="text-xl font-bold">CafeOne</span>
        <span className="text-xl font-bold">BistroX</span>
        <span className="text-xl font-bold">HotelPro</span>
        <span className="text-xl font-bold">NovLuma</span>
      </div>
    </section>
  );
}
