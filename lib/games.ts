export type GameStatus = "próximo" | "ao vivo" | "terminado";

export type GameItem = {
  id: number;
  nome: string;
  torneio: string;
  equipa1: string;
  equipa2: string;
  logo1: string;
  logo2: string;
  data: string;
  hora: string;
  status: GameStatus;
  link: string;
  descricao?: string;
};

export const games: GameItem[] = [
  {
    id: 1,
    nome: "CS2 Showdown",
    torneio: "Iberian Cup",
    equipa1: "Team Alpha",
    equipa2: "Team Omega",
    logo1: "https://placehold.co/80x80/111111/ffffff?text=TA",
    logo2: "https://placehold.co/80x80/111111/ffffff?text=TO",
    data: "2025-11-15",
    hora: "20:00",
    status: "próximo",
    link: "https://www.twitch.tv/Its_TomiTv",
    descricao: "Partida de preparação para a fase principal."
  },
  {
    id: 2,
    nome: "CS2 Clash",
    torneio: "Weekend League",
    equipa1: "Vortex",
    equipa2: "Nexus",
    logo1: "https://placehold.co/80x80/111111/ffffff?text=V",
    logo2: "https://placehold.co/80x80/111111/ffffff?text=N",
    data: "2025-11-18",
    hora: "21:30",
    status: "ao vivo",
    link: "https://www.twitch.tv/Its_TomiTv",
    descricao: "Jogo ao vivo em direto na Twitch."
  },
  {
    id: 3,
    nome: "CS2 Finals",
    torneio: "Final Masters",
    equipa1: "Storm",
    equipa2: "Pulse",
    logo1: "https://placehold.co/80x80/111111/ffffff?text=S",
    logo2: "https://placehold.co/80x80/111111/ffffff?text=P",
    data: "2025-11-05",
    hora: "19:00",
    status: "terminado",
    link: "https://www.twitch.tv/Its_TomiTv",
    descricao: "Jogo anterior com resumo e análise."
  }
];
