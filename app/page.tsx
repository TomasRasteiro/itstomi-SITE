import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { games } from "@/lib/games";

export default function HomePage() {
  const upcoming = games.filter((game) => game.status === "próximo").slice(0, 3);

  return (
    <>
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-red/30 bg-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Streamer • Creator • Caster
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">
              ITS TOMI
            </h1>

            <p className="mt-5 max-w-xl text-lg text-zinc-300">
              Streamer, criador de conteúdo e caster português focado em gaming, esports e entretenimento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/stream" className="btn-primary">
                Ver conteúdo
              </Link>
              <Link href="/jogos" className="btn-secondary">
                Jogos
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">CS2</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">Streaming</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">Caster</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">Conteúdo</span>
            </div>
          </div>

          <div className="card p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase text-zinc-400">Canal em destaque</p>
                <h2 className="mt-2 text-3xl font-black">ItsTomi</h2>
              </div>
              <span className="rounded-full border border-red/30 bg-red/10 px-2 py-1 text-xs font-bold text-red-300">
                LIVE
              </span>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-red to-red/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-red-100">Stream principal</p>
              <p className="mt-3 text-3xl font-black">ITS TOMI</p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-zinc-400">Peak</p>
                <p className="mt-2 text-2xl font-black">31.4K</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase text-zinc-400">Seguidores</p>
                <p className="mt-2 text-2xl font-black">42.4K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="container grid gap-4 py-8 md:grid-cols-4">
          <div className="card p-5">
            <p className="text-sm text-zinc-400">Visualizações</p>
            <p className="mt-3 text-3xl font-black">24.8K</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-zinc-400">Seguidores</p>
            <p className="mt-3 text-3xl font-black">42.4K</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-zinc-400">Projetos</p>
            <p className="mt-3 text-3xl font-black">12+</p>
          </div>
          <div className="card p-5">
            <p className="text-sm text-zinc-400">Engajamento</p>
            <p className="mt-3 text-3xl font-black">92%</p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Próximos jogos</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Agenda da próxima semana</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((game) => (
            <div key={game.id} className="card p-6">
              <p className="text-sm text-zinc-400">{game.torneio}</p>
              <h3 className="mt-3 text-2xl font-black">{game.nome}</h3>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={game.logo1} alt={game.equipa1} className="h-10 w-10 rounded-full" />
                  <span className="font-bold">{game.equipa1}</span>
                </div>
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-300">VS</span>
                <div className="flex items-center gap-3">
                  <span className="font-bold">{game.equipa2}</span>
                  <img src={game.logo2} alt={game.equipa2} className="h-10 w-10 rounded-full" />
                </div>
              </div>

              <div className="mt-6 text-sm text-zinc-300">
                <p>{game.data} • {game.hora}</p>
                <p className="mt-2 text-red-300">{game.status}</p>
              </div>

              <Link href="/jogos" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-300">
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
