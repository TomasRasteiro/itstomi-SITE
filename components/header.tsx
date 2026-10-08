import Link from "next/link";
import TwitchLoginButton from "@/components/twitch-login-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red font-black text-white">
            IT
          </div>
          <span className="text-xl font-black">ItsTomi</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <Link href="/">Home</Link>
          <Link href="/stream">Stream</Link>
          <Link href="/jogos">Jogos</Link>
          <Link href="/parcerias">Parcerias</Link>
          <Link href="/redes">Redes</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>

        <TwitchLoginButton />
      </div>
    </header>
  );
}
