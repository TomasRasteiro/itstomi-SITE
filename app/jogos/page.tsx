import { games } from "@/lib/games";

const statusColors = {
  próximo: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10",
  "ao vivo": "text-red-300 border-red-400/30 bg-red-400/10",
  terminado: "text-zinc-300 border-zinc-500/30 bg-zinc-500/10"
} as const;

export default function JogosPage() {
  const proximos = games.filter((game) => game.status === "próximo");
  const vivos = games.filter((game) => game.status === "ao vivo");
  const anteriores = games.filter((game) => game.status === "terminado");

  const renderGames = (list: typeof games) =>
    list.map((game) => (
      <div key={game.id} className="card p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-zinc-400">{game.torneio}</p>
            <h3 className="mt-2 text-2xl font-black">{game.nome}</h3>
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${statusColors[game.status]}`}>
            {game.status}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={game.logo1} alt={game.equipa1} className="h-12 w-12 rounded-full" />
            <span className="font-bold">{game.equipa1}</span>
          </div>

          <span className="text-sm font-bold text-zinc-300">VS</span>

          <div className="flex items-center gap-3">
            <span className="font-bold">{game.equipa2}</span>
            <img src={game.logo2} alt={game.equipa2} className="h-12 w-12 rounded-full" />
          </div>
        </div>

        <div className="mt-6 text-sm text-zinc-300">
          <p>{game.data} • {game.hora}</p>
          {game.descricao && <p className="mt-2">{game.descricao}</p>}
        </div>

        <a href={game.link} target="_blank" rel="noreferrer" className="btn-primary mt-6">
          Ver transmissão
        </a>
      </div>
    ));

  return (
    <div className="container py-16">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Jogos</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Jogos e casts</h1>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-2xl font-black">Próximos jogos</h2>
          <div className="grid gap-6 md:grid-cols-2">{renderGames(proximos)}</div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-black">Ao vivo</h2>
          <div className="grid gap-6 md:grid-cols-2">{renderGames(vivos)}</div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-black">Jogos anteriores</h2>
          <div className="grid gap-6 md:grid-cols-2">{renderGames(anteriores)}</div>
        </section>
      </div>
    </div>
  );
}
