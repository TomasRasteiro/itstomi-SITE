export default function SobrePage() {
  return (
    <div className="container py-16">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Sobre</p>
      <h1 className="mt-3 text-4xl font-black md:text-5xl">ItsTomi</h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-8">
          <p className="text-lg leading-8 text-zinc-300">
            Streamer, criador de conteúdo e caster português focado em gaming, esports e entretenimento.
            A marca ItsTomi nasceu para unir performance competitiva, presença digital e conteúdo de alto nível.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-black">Focus</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• CS2</li>
            <li>• Streaming</li>
            <li>• Caster</li>
            <li>• Conteúdo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
