import { Logo } from "./components/Logo";
import SpotlightCard from "./components/ReactBits/SpotlightCard";
import { ArrowDownTrayOutline } from "./components/heroicons/ArrowDownTrayOutline";
import DarkVeil from "./components/ReactBits/DarkVeil";
import TextType from "./components/ReactBits/TextType";

import Me from "./assets/images/jpgs/me.jpg";

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
            <SpotlightCard className="grid place-items-center px-0 py-0">
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
              pauseDuration={2000}
              loop={false}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center bg-linear-to-b from-black to-transparent">
          <h2 className="py-8 text-6xl font-semibold">Sobre</h2>
          <div className="flex flex-row gap-8 px-80">
            <div className="w-fit shrink-0">
              <img src={Me} className="size-64 shrink-0 rounded-full" />
            </div>
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
        </div>
        <div className="flex flex-col items-center">
          <h2 className="py-8 text-6xl font-semibold">Habilidades</h2>
          <div></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="py-8 text-6xl font-semibold">Experiência</h2>
          <div></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="py-8 text-6xl font-semibold">Conquistas</h2>
          <div></div>
        </div>
      </div>
      <footer className="mt-auto grid h-32 place-items-center">
        <p className="text-sm">© 2026 · Matheus Cavalcante</p>
      </footer>
    </div>
  );
}
