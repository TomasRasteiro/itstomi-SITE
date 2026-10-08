export default function StreamPage() {
  return (
    <div className="container py-16">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Stream</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Ao vivo na Twitch</h1>
      </div>

      <div className="card overflow-hidden">
        <iframe
          src="https://player.twitch.tv/?channel=Its_TomiTv&parent=localhost"
          className="h-[560px] w-full"
          allowFullScreen
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <a href="https://www.twitch.tv/Its_TomiTv" target="_blank" rel="noreferrer" className="btn-primary">
          Abrir stream
        </a>
      </div>
    </div>
  );
}
