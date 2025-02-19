import "./App.css";
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  return (
    <div id="app" className="relative h-screen items-stretch">
      <header className="[grid-area:header] flex justify-between items-center bg-[#f8f8f8]">
        <Header></Header>
      </header>

      <aside className="[grid-area:aside] flex flex-col py-2">
        <Aside></Aside>
      </aside>

      <main className="[grid-area:main]">
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
