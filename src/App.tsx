import { useState } from "react";
import "./App.css";
import { Aside } from "./components/aside/Aside";
import { Header } from "./components/header/Header";
import { DashboardScreen } from "./components/main/DashboardScreen";
import { ScreenType } from "./types/global";
import { MyTasksScreen } from "./components/main/myTasks/myTasksScreen";

function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>(
    ScreenType.DASHBOARD
  );

  return (
    <div id="app" className="relative h-screen items-stretch">
      <header className="[grid-area:header] flex justify-between items-center bg-[#f8f8f8]">
        <Header></Header>
      </header>

      <aside className="[grid-area:aside] flex flex-col py-2">
        <Aside
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        ></Aside>
      </aside>

      <main className="[grid-area:main] py-12 px-16">
        {activeScreen === ScreenType.DASHBOARD && (
          <DashboardScreen></DashboardScreen>
        )}
        {activeScreen === ScreenType.MY_TASKS && (
          <MyTasksScreen></MyTasksScreen>
        )}
      </main>
    </div>
  );
}

export default App;
