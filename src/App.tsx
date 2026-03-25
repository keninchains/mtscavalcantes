// ---------------------------------------------------------------------------
// App.tsx — entry point
// ---------------------------------------------------------------------------
// Sections are extracted into focused components. Data-driven lists
// (skills, experiences, achievements) are assumed to be imported from a
// separate constants file and typed there; only their shapes are used here.
// ---------------------------------------------------------------------------

import DarkVeil from "@/components/DarkVeil";
import { Logo } from "@/components/Logo";
import SpotlightCard from "@/components/SpotlightCard";
import TextType from "@/components/TextType";
import BorderGlow from "@/components/BorderGlow";
import { Pill } from "@/components/Pill";
import { ArrowDownTrayOutline } from "@/icons/ArrowDownTrayOutline";
import { Email3 } from "@/icons/Email3";
import { Linkedin3 } from "@/icons/Linkedin3";
import { Github3 } from "@/icons/Github3";
import Me from "@/assets/images/jpgs/me.jpg";
import { ACHIEVEMENTS, EXPERIENCES, SKILLS } from "@/constants";
import { ContactForm } from "./components/ContactForm";
import { formatDatePtBR } from "./lib/formatDatePtBR";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Header() {
  return (
    <header className="h-24 border-b border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/40 backdrop-blur-2xl">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Logo className="size-16" />
          <div className="flex flex-col font-[BebasNeue] text-3xl select-none">
            <span>MATHEUS</span>
            <span>CAVALCANTE</span>
          </div>
        </div>
        <SpotlightCard className="flex items-center justify-center border-stone-600 px-0 py-0">
          <a
            href="/curriculo.pdf"
            className="flex h-10 w-30 items-center justify-center gap-1.5"
          >
            <ArrowDownTrayOutline />
            <span>Currículo</span>
          </a>
        </SpotlightCard>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="absolute flex h-screen w-full flex-col">
      <Header />

      <div className="my-auto flex flex-col items-center gap-8">
        <h1 className="text-center text-6xl font-semibold">
          Olá, sou o Matheus Cavalcante!
        </h1>

        <div className="flex h-32 px-8 text-center text-3xl font-semibold">
          <TextType
            text={[
              "Estudante de Engenharia de Computação",
              "Desenvolvedor Web Full-Stack",
            ]}
            initialDelay={1500}
            typingSpeed={75}
            pauseDuration={2500}
            loop
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>

        <ul className="flex gap-8">
          <li key="email">
            <a href="mailto:mtscavalcantes.mc@outlook.com" aria-label="Email">
              <Email3 className="size-10" />
            </a>
          </li>
          <li key="linkedin">
            <a
              href="https://www.linkedin.com/in/ms-cavalcante/"
              aria-label="LinkedIn"
            >
              <Linkedin3 className="size-10" />
            </a>
          </li>
          <li key="github">
            <a href="https://github.com/keninchains" aria-label="GitHub">
              <Github3 className="size-10" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto w-fit py-8 text-6xl font-semibold">{children}</h2>
  );
}

function AboutSection() {
  return (
    <section className="bg-linear-to-b from-black to-transparent">
      <SectionHeading>Sobre</SectionHeading>
      <div className="mx-auto max-w-4xl px-4">
        <BorderGlow
          edgeSensitivity={10}
          glowColor="260 100 50"
          backgroundColor="#161b1d"
          coneSpread={10}
          className="p-8"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <img
              src={Me}
              className="size-64 rounded-full"
              alt="Matheus Cavalcante"
            />
            <div className="text-lg">
              <p>
                Estudante do quarto ano de Engenharia de Computação na UTFPR,
                buscando oportunidades de estágio na área de tecnologia. Atuo
                profissionalmente como Desenvolvedor Web Full-Stack,
                implementando funcionalidades robustas e contribuindo na criação
                de produtos inovadores e elegantes.
              </p>
              <p className="indent-8">
                Possuo fortes habilidades analíticas, facilidade para aprender
                novas tecnologias, e vocação natural para papéis de liderança.
                Na faculdade, participei de quatro olimpíadas de conhecimento
                (Cálculo), obtendo ótimos resultados em todas elas. Além disso,
                atuei como monitor de Cálculo I por dois semestres, ajudando
                dezenas de estudantes mensalmente com atendimentos presenciais e
                remotos.
              </p>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section>
      <SectionHeading>Habilidades</SectionHeading>
      <ul className="mx-auto flex max-w-3xl flex-col flex-wrap items-center justify-center gap-6 sm:flex-row">
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <Pill icon={skill.icon} title={skill.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperiencesSection() {
  return (
    <section>
      <SectionHeading>Experiência</SectionHeading>
      <ul className="mx-auto flex max-w-2xl flex-col gap-6 px-4">
        {EXPERIENCES.map((experience, index) => (
          <li key={index}>
            <div className="rounded-2xl border border-mist-700 bg-mist-900 transition hover:border-violet-500">
              <div className="flex items-center justify-center rounded-t-2xl bg-mist-200 p-4">
                <img src={experience.src} className="h-16" />
              </div>
              <div className="px-6 pb-6">
                <h2 className="py-2 text-center text-4xl font-semibold">
                  {experience.title}
                </h2>
                <div className="flex items-center justify-center gap-2 text-lg text-mist-400">
                  <span>{formatDatePtBR(experience.startDate)}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <span>
                    {experience.endDate
                      ? formatDatePtBR(experience.endDate)
                      : `presente`}
                  </span>
                </div>
                <p className="mx-auto w-fit py-4 text-2xl font-semibold">
                  {experience.role}
                </p>
                <ul className="flex list-inside list-disc flex-col gap-3 text-lg">
                  {experience.description.map((description, dIndex) => (
                    <li key={dIndex}>{description}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section>
      <SectionHeading>Conquistas</SectionHeading>
      <ul className="mx-auto flex max-w-2xl flex-col gap-6 px-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <li key={index}>
            <div className="flex flex-col gap-2 rounded-2xl border border-mist-700 bg-mist-900 p-6 transition select-none hover:border-violet-500">
              <div>
                <h3 className="text-2xl font-semibold">{achievement.title}</h3>
                <span className="text-lg text-mist-400">
                  {achievement.subtitle}
                </span>
              </div>
              <p className="text-lg">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactSection() {
  return (
    <section>
      <SectionHeading>Contato</SectionHeading>
      <div className="mx-auto max-w-2xl px-4">
        <p className="text-2xl">
          Entre em contato comigo através dos links abaixo ou do formulário.
        </p>
      </div>
      <ul className="mx-auto flex max-w-2xl flex-col gap-4 px-4">
        <li key="email">
          <a
            href="mailto:mtscavalcantes.mc@outlook.com"
            aria-label="Email"
            className="flex w-fit items-center gap-2 rounded-full border border-mist-700 bg-mist-900 px-4 py-2 transition hover:border-violet-500"
          >
            <Email3 className="size-8" />
            <span className="text-lg">E-mail</span>
          </a>
        </li>
        <li key="linkedin">
          <a
            href="https://www.linkedin.com/in/ms-cavalcante/"
            aria-label="LinkedIn"
            className="flex w-fit items-center gap-2 rounded-full border border-mist-600 bg-mist-900 px-4 py-2 transition hover:border-violet-500"
          >
            <Linkedin3 className="size-8" />
            <span className="text-lg">LinkedIn</span>
          </a>
        </li>
        <li key="github">
          <a
            href="https://github.com/keninchains"
            aria-label="GitHub"
            className="flex w-fit items-center gap-2 rounded-full border border-mist-600 bg-mist-900 px-4 py-2 transition hover:border-violet-500"
          >
            <Github3 className="size-8" />
            <span className="text-lg">GitHub</span>
          </a>
        </li>
      </ul>
      <ContactForm />
    </section>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <DarkVeil hueShift={0} speed={2} warpAmount={0} />
      </div>

      <Hero />

      <main className="flex flex-col gap-16">
        <AboutSection />
        <SkillsSection />
        <ExperiencesSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <footer className="flex h-44 flex-col items-center justify-center">
        <p className="text-sm">© 2026 · Matheus Cavalcante</p>
        <p className="text-sm text-mist-700 italic">
          The rain begins with a single drop.
        </p>
      </footer>
    </div>
  );
}
