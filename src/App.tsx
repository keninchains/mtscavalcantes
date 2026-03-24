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
import Carousel from "@/components/Carousel";
import { Pill } from "@/components/Pill";
import { ArrowDownTrayOutline } from "@/icons/ArrowDownTrayOutline";
import { Email3 } from "@/icons/Email3";
import { Linkedin3 } from "@/icons/Linkedin3";
import { Github3 } from "@/icons/Github3";
import Me from "@/assets/images/jpgs/me.jpg";
import { ACHIEVEMENTS, EXPERIENCES, SKILLS } from "@/constants";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-white/20 bg-white/10 p-4 px-64 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/30 backdrop-blur-2xl">
      <Logo className="size-12" />
      <SpotlightCard className="grid place-items-center border-stone-700 px-0 py-0">
        <a
          href="/curriculo"
          className="flex h-10 w-30 items-center justify-center gap-2"
        >
          <ArrowDownTrayOutline />
          <span>Currículo</span>
        </a>
      </SpotlightCard>
    </header>
  );
}

function Hero() {
  return (
    <div className="absolute flex h-screen w-full flex-col">
      <Header />

      <div className="mt-36 flex flex-col items-center gap-4">
        <h1 className="text-center text-6xl font-semibold">
          Olá, sou o Matheus Cavalcante!
        </h1>

        <div className="text-3xl font-semibold">
          <TextType
            text={[
              "Estudante de Engenharia de Computação",
              "Desenvolvedor Web Full-Stack",
            ]}
            initialDelay={1000}
            typingSpeed={75}
            pauseDuration={2500}
            loop
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>

        <ul className="flex gap-4 py-12">
          <li>
            <a href="mailto:mtscavalcantes.mc@outlook.com" aria-label="Email">
              <Email3 className="size-8" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ms-cavalcante/"
              aria-label="LinkedIn"
            >
              <Linkedin3 className="size-8" />
            </a>
          </li>
          <li>
            <a href="https://github.com/keninchains" aria-label="GitHub">
              <Github3 className="size-8" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="w-fit self-center py-8 text-6xl font-semibold">
      {children}
    </h2>
  );
}

function AboutSection() {
  return (
    <section className="flex flex-col items-center bg-linear-to-b from-black to-transparent">
      <SectionHeading>Sobre</SectionHeading>
      <div className="px-80">
        <BorderGlow
          edgeSensitivity={10}
          glowColor="260 100 50"
          backgroundColor="#161b1d"
          coneSpread={10}
          className="p-8"
        >
          <div className="flex flex-row gap-8">
            <img
              src={Me}
              className="size-64 shrink-0 rounded-full"
              alt="Matheus Cavalcante"
            />
            <p className="text-lg">
              Estudante do quarto ano de Engenharia de Computação na UTFPR,
              câmpus Pato Branco. Atuo profissionalmente como Desenvolvedor Web
              Full-Stack, implementando funcionalidades robustas e contribuindo
              na criação de produtos inovadores e elegantes. Possuo fortes
              habilidades analíticas, facilidade para aprender novas
              tecnologias, e vocação natural para papéis de liderança. Na
              faculdade, participei de quatro olimpíadas de conhecimento
              (Cálculo), obtendo ótimos resultados em todas elas. Além disso,
              atuei como monitor de Cálculo I por dois semestres, ajudando
              dezenas de estudantes mensalmente com atendimentos presenciais e
              remotos.
            </p>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="flex flex-col">
      <SectionHeading>Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-6 px-96">
        {SKILLS.map((skill, index) => (
          <li key={index}>
            <Pill icon={skill.icon} title={skill.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="flex flex-col">
      <SectionHeading>Experiência</SectionHeading>
      <div className="flex h-144 justify-center select-none">
        <Carousel
          items={EXPERIENCES}
          baseWidth={600}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
          loop={false}
          round={false}
        />
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="flex flex-col">
      <SectionHeading>Conquistas</SectionHeading>
      <ul className="flex flex-col gap-4 px-108">
        {ACHIEVEMENTS.map((achievement, index) => (
          <li key={index}>
            <div className="flex flex-col gap-2 rounded-2xl border border-mist-800 bg-mist-900 p-8 transition hover:border-mist-500">
              <h3 className="text-2xl">{achievement.title}</h3>
              <p className="text-lg text-mist-300">{achievement.subtitle}</p>
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
    <section className="flex flex-col">
      <SectionHeading>Contato</SectionHeading>
      {/* TODO: add contact form or links */}
    </section>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-mist-950 text-mist-50">
      {/* Background effect — fixed height avoids inline style */}
      <div className="relative h-225 w-full">
        <DarkVeil hueShift={350} speed={1} />
      </div>

      <Hero />

      <main className="flex flex-col gap-8">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <footer className="mt-auto grid h-32 place-items-center">
        <p className="text-sm">© 2026 · Matheus Cavalcante</p>
      </footer>
    </div>
  );
}
