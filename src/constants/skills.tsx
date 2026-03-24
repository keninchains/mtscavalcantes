import {
  TypescriptIcon,
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  PostgresqlIcon,
  GitIcon,
  FigmaIcon,
} from "@/icons";

type Skill = {
  icon: React.ReactNode;
  title: string;
};

export const SKILLS: Skill[] = [
  {
    icon: <TypescriptIcon className="size-8" />,
    title: "TypeScript",
  },
  {
    icon: <ReactIcon className="size-8" />,
    title: "React",
  },
  {
    icon: <TailwindIcon className="size-8" />,
    title: "Tailwind CSS",
  },
  {
    icon: <NodeIcon className="size-8" />,
    title: "Node.js",
  },
  {
    icon: <PostgresqlIcon className="size-8" />,
    title: "PostgreSQL",
  },
  {
    icon: <GitIcon className="size-8" />,
    title: "Git",
  },
  {
    icon: <FigmaIcon className="size-8" />,
    title: "Figma",
  },
];
