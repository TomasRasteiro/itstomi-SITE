import Link from "next/link";
import TwitchLoginButton from "@/components/twitch-login-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/stream", label: "Stream" },
  { href: "/jogos", label: "Jogos" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/redes", label: "Redes" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contacto", label: "Contacto" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4 gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red font-black text-white">
            IT
          </div>
          <span className="text-xl font-black tracking-tight">ItsTomi</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <TwitchLoginButton />
      </div>
    </header>
  );
}


