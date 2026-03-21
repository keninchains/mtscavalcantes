import { Logo } from "./components/Logo";
import BorderGlow from "./components/ReactBits/BorderGlow";
import { ArrowDownTrayOutline } from "./components/heroicons/ArrowDownTrayOutline";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-mist-950 text-mist-50">
      <header className="flex items-center justify-between p-4 px-56">
        <div className="flex items-center gap-4">
          <Logo className="size-16" />
          <p className="text-2xl font-semibold">Matheus Cavalcante</p>
        </div>
        <div className="flex items-center">
          <BorderGlow
            backgroundColor="#161b1d"
            borderRadius={12}
            edgeSensitivity={10}
          >
            <a
              href="/curriculo"
              className="flex h-10 w-30 items-center justify-center gap-2"
            >
              <ArrowDownTrayOutline />
              <p>Currículo</p>
            </a>
          </BorderGlow>
        </div>
      </header>
      <div></div>
      <footer className="mt-auto grid h-32 place-items-center">
        <p className="text-sm">© 2026 · Matheus Cavalcante</p>
      </footer>
    </div>
  );
}
