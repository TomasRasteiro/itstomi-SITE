const socials = [
  { name: "Twitch", url: "https://www.twitch.tv/Its_TomiTv" },
  { name: "YouTube", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "TikTok", url: "#" },
  { name: "X / Twitter", url: "#" }
];

export default function RedesPage() {
  return (
    <div className="container py-16">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-300">Redes</p>
      <h1 className="mt-3 text-4xl font-black md:text-5xl">Siga o ItsTomi</h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {socials.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noreferrer" className="card p-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black">{item.name}</span>
              <span className="text-red-300">↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
