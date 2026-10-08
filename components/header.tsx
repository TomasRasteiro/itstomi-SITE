import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { games } from "@/lib/games";

const statusColors = {
  próximo: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10",
  "ao vivo": "text-red-300 border-red-400/30 bg-red-400/10",
  terminado: "text-zinc-300 border-zinc-500/30 bg-zinc-500/10"
} as const;

export default function JogosPage() {
  const proximos = games.filter((game) => game.status === "próximo");

  return (
    <div className="container py-16">
      <div className="section-header">
        <p className="section-tag">Jogos</p>
        <h2>Próximos casts</h2>
      </div>

      <div className="mb-10 flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-300">
          <ArrowLeft size={16} /> Voltar para home
        </Link>
      </div>

      <div className="match-grid">
        {proximos.map((game) => (
          <article key={game.id} className="match-card match-card--large">
            <div className="match-meta">
              <span>{game.torneio}</span>
              <span className={`match-state ${statusColors[game.status]}`}>
                {game.status}
              </span>
            </div>

            <div className="match-scoreline">
              <div className="team-slot">
                <div className="team-slot__logo">LOGO 1</div>
                <span>{game.equipa1}</span>
              </div>

              <div className="versus">VS</div>

              <div className="team-slot">
                <div className="team-slot__logo">LOGO 2</div>
                <span>{game.equipa2}</span>
              </div>
            </div>

            <div className="match-footer">
              <span>{game.data} • {game.hora}</span>
              <span>{game.descricao}</span>
            </div>

            <a href={game.link} target="_blank" rel="noreferrer" className="match-link">
              Ver transmissão
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
























































































































































































































































































