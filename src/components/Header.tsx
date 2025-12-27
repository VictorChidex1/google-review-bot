export default function Header() {
  return (
    <header className="mb-10 text-center flex flex-col items-center">
      <img
        src="/veravox-ai.jpg"
        alt="VeraVox AI"
        className="h-28 w-auto mb-2 rounded-2xl shadow-sm mix-blend-multiply"
      />
      <h1 className="sr-only">VeraVox AI</h1>
      <p className="text-slate-600 text-lg font-medium">
        Turn customer feedback into professional responses in seconds.
      </p>
    </header>
  );
}
