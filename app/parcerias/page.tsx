export default function ParceriasPage() {
  return (
    <div className="container py-16">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Parcerias</p>
      <h1 className="mt-3 text-4xl font-black md:text-5xl">Parcerias e apoio</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Gaming Hub", "Apoio ao cenário competitivo", "#"],
          ["Esports Zone", "Parceria de eventos e comunidade", "#"],
          ["Stream Crew", "Networking e conteúdo em conjunto", "#"]
        ].map(([name, desc, link]) => (
          <a key={name} href={link} className="card p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red/10 text-xl font-black text-red-300">
              {name.slice(0, 2).toUpperCase()}
            </div>
            <h3 className="mt-5 text-xl font-black">{name}</h3>
            <p className="mt-3 text-zinc-300">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
