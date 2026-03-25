import LogoUtfpr from "@/assets/images/pngs/utfpr.png";
import LogoOccam from "@/assets/images/pngs/occam.png";
import LogoSprint from "@/assets/images/pngs/sprint.png";

type Experience = {
  src: string;
  title: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    src: LogoSprint,
    title: "sprinT",
    role: "Estagiário",
    startDate: new Date(2025, 8),
    endDate: undefined,
    description: [
      "Redigi documentos internos e criei planilhas visando melhorar as metodologias operacionais da empresa.",
      "Contribuí no processo de contratação de novos empreendimentos através da redação de novos contratos.",
      "Gerenciei o website da empresa, publicando editais e anexos para a comunidade empreendedora.",
    ],
  },
  {
    src: LogoOccam,
    title: "OCCAM Engenharia",
    role: "Assessor de Marketing",
    startDate: new Date(2024, 8),
    endDate: new Date(2025, 3),
    description: [
      "Administrei e gerenciei as contas de redes sociais da OCCAM Engenharia no Instagram e no LinkedIn.",
      "Designei e criei publicações, reels e stories para redes sociais sobre nossa área de atuação e o que fazíamos.",
      "Como trainee, liderei um time de seis pessoas em um projeto front-end de website empresarial durante 6 meses.",
    ],
  },
  {
    src: LogoUtfpr,
    title: "UTFPR",
    role: "Monitor de Cálculo I",
    startDate: new Date(2023, 8),
    endDate: new Date(2024, 6),
    description: [
      "Atendi de forma presencial e remota os alunos da universidade para resolução de dúvidas na disciplina.",
      "Revisei e corrigi diversos materiais didáticos usados por professores (apostilas, listas e gabaritos).",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];
