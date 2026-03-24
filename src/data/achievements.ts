type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  date: Date;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "6ª Olimpíada Regional de Derivadas",
    subtitle: "Participante",
    description:
      "Competição universitária de Cálculo sediada na PUC-PR, em Curitiba. 1º lugar entre 44 estudantes na etapa classificatória.",
    date: new Date(2025, 7),
  },
  {
    title: "5ª Olimpíada Regional de Derivadas",
    subtitle: "Semifinalista",
    description:
      "Competição universitária de Cálculo sediada na Unicamp, em Campinas. 6º lugar entre 44 estudantes na etapa classificatória.",
    date: new Date(2024, 8),
  },
  {
    title: "Pato' 2024",
    subtitle: "1º lugar",
    description:
      "Competição universitária de Cálculo sediada anualmente na UTFPR-PB.",
    date: new Date(2024, 4),
  },
];
