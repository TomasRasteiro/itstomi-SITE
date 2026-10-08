"use client";

import { useEffect, useState } from "react";

export default function TwitchLoginButton() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (res) => {
        const data = await res.json();
        setUser(data.user || null);
      })
      .catch(() => setUser(null));
  }, []);

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={user.profile_image_url}
          alt={user.display_name}
          className="h-9 w-9 rounded-full border border-white/10"
        />
        <span className="text-sm text-zinc-200">{user.display_name}</span>
        <form action="/api/auth/twitch/logout" method="POST">
          <button type="submit" className="btn-secondary">
            Terminar sessão
          </button>
        </form>
      </div>
    );
  }

  return (
    <a href="/api/auth/twitch/login" className="btn-primary">
      Ligar com a Twitch
    </a>
  );
}
