import { Logo } from "./components/Logo";
import SpotlightCard from "./components/ReactBits/SpotlightCard";
import { ArrowDownTrayOutline } from "./components/heroicons/ArrowDownTrayOutline";
import DarkVeil from "./components/ReactBits/DarkVeil";
import TextType from "./components/ReactBits/TextType";
import BorderGlow from "./components/ReactBits/BorderGlow";
import Carousel from "./components/ReactBits/Carousel";

import Me from "./assets/images/jpgs/me.jpg";

import { Email3 } from "./components/iconmonstr/Email3";
import { Github3 } from "./components/iconmonstr/Github3";
import { Linkedin3 } from "./components/iconmonstr/Linkedin3";

import { SKILLS } from "./data/skills";
import { Pill } from "./components/Pill";

import { EXPERIENCES } from "./data/experience";
import { ACHIEVEMENTS } from "./data/achievements";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-mist-950 text-mist-50">
      <div style={{ width: "100%", height: "900px", position: "relative" }}>
        <DarkVeil hueShift={350} speed={1} />
      </div>
      <div className="absolute flex h-screen w-full flex-col">
        <header className="flex items-center justify-between border-b border-white/20 bg-white/10 p-4 px-64 shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/30 backdrop-blur-2xl">
          <div className="flex items-center gap-4">
            <Logo className="size-12" />
            <p className="text-2xl font-semibold">Matheus Cavalcante</p>
          </div>
          <div className="flex items-center">
            <SpotlightCard className="grid place-items-center border-stone-700 px-0 py-0">
              <a
                href="/curriculo"
                className="flex h-10 w-30 items-center justify-center gap-2"
              >
                <ArrowDownTrayOutline />
                <p>Currículo</p>
              </a>
            </SpotlightCard>
          </div>
        </header>
        <div>
          <div className="mt-36">
            <h1 className="flex items-end justify-center text-center text-6xl font-semibold">
              Olá, sou o Matheus Cavalcante!
            </h1>
          </div>
          <div className="flex justify-center py-4 text-3xl font-semibold">
            <TextType
              text={[
                "Estudante de Engenharia de Computação",
                "Desenvolvedor Web Full-Stack",
              ]}
              initialDelay={1000}
              typingSpeed={75}
              pauseDuration={2500}
              loop={true}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </div>
          <div className="flex justify-center py-16">
            <ul className="flex gap-4">
              <li>
                <a href="mailto:mtscavalcantes.mc@outlook.com">
                  <Email3 className="size-8" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ms-cavalcante/">
                  <Linkedin3 className="size-8" />
                </a>
              </li>
              <li>
                <a href="https://github.com/keninchains">
                  <Github3 className="size-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center bg-linear-to-b from-black to-transparent">
          <h2 className="py-8 text-6xl font-semibold">Sobre</h2>
          <div className="px-80">
            <BorderGlow
              edgeSensitivity={10}
              glowColor="260 100 50"
              backgroundColor="#161b1d"
              coneSpread={10}
              className="p-8"
            >
              <div className="flex flex-row gap-8">
                <div className="w-fit shrink-0">
                  <img src={Me} className="size-64 shrink-0 rounded-full" />
                </div>
                <p className="text-lg">
                  Estudante do quarto ano de Engenharia de Computação na UTFPR,
                  câmpus Pato Branco. Atuo profissionalmente como Desenvolvedor
                  Web Full-Stack, implementando funcionalidades robustas e
                  contribuindo na criação de produtos inovadores e elegantes.
                  Possuo fortes habilidades analíticas, facilidade para aprender
                  novas tecnologias, e vocação natural para papéis de liderança.
                  Na faculdade, participei de quatro olimpíadas de conhecimento
                  (Cálculo), obtendo ótimos resultados em todas elas. Além
                  disso, atuei como monitor de Cálculo I por dois semestres,
                  ajudando dezenas de estudantes mensalmente com atendimentos
                  presenciais e remotos.
                </p>
              </div>
            </BorderGlow>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="w-fit self-center py-8 text-6xl font-semibold">
            Habilidades
          </h2>
          <div className="px-96">
            <ul className="flex flex-wrap justify-center gap-6">
              {SKILLS.map((skill, index) => (
                <li key={index}>
                  <Pill icon={skill.icon} title={skill.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="w-fit self-center py-8 text-6xl font-semibold">
            Experiência
          </h2>
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
        </div>
        <div className="flex flex-col">
          <h2 className="w-fit self-center py-8 text-6xl font-semibold">
            Conquistas
          </h2>
          <div className="debug flex justify-center px-108">
            <div className="debug w-full">
              <ul className="flex flex-col gap-8">
                {ACHIEVEMENTS.map((_, index) => (
                  <li key={index}>
                    <div className="debug flex flex-col gap-2">
                      <div></div>
                      <div></div>
                      <p className="text-lg">{_.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="w-fit self-center py-8 text-6xl font-semibold">
            Contato
          </h2>
          <div></div>
        </div>
      </div>
      <footer className="mt-auto grid h-32 place-items-center">
        <p className="text-sm">© 2026 · Matheus Cavalcante</p>
      </footer>
    </div>
  );
}
