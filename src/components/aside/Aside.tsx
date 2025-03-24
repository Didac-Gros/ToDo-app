import { ListItem } from "./ListItem";
import { MdDashboard } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { ScreenType } from "../../types/global";

interface AsideProps {
  activeScreen: ScreenType;
  setActiveScreen: (tab: ScreenType) => void;
}

export function Aside({ activeScreen, setActiveScreen }: AsideProps) {
  return (
    <main className="relative w-full h-full flex flex-col items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="/shrek.png"
          alt="Foto de perfil de Shrek"
          className="rounded-full size-24 border-white border-2"
        />
      </div>
      <section className="flex flex-col gap-5 bg-[#ff6867] w-full h-full mt-10 rounded-lg pt-15">
        <header className="text-center">
          <h2 className="text-lg font-semibold text-[white]">Sundar Gurung</h2>
          <h3 className="text-sm text-white">sundargurung360@gmail.com</h3>
        </header>

        <nav>
          <ul className="flex flex-col gap-1 px-6">
            <ListItem
              title="Dashboard"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.DASHBOARD)}
            >
              <MdDashboard size={25} />
            </ListItem>
            <ListItem
              title="Vital task"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.VITAL_TASKS)}
            >
              <FaExclamation size={25} />
            </ListItem>
            <ListItem
              title="My task"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.MY_TASKS)}
            >
              <BiTask size={25} />
            </ListItem>
            <ListItem
              title="Task categories"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.TASK_CATEGORIES)}
            >
              <RiMenuFold2Line size={25} />
            </ListItem>
            <ListItem
              title="Settings"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.SETTINGS)}
            >
              <IoMdSettings size={25} />
            </ListItem>
            <ListItem
              title="Help"
              activeScreen={activeScreen}
              handleClick={() => setActiveScreen(ScreenType.HELP)}
            >
              <IoIosHelpCircle size={25} />
            </ListItem>
          </ul>
        </nav>
        <footer className="mt-auto mb-10 px-6">
          <ListItem
            title="Logout"
            activeScreen={activeScreen}
            handleClick={() => setActiveScreen(ScreenType.LOGOUT)}
          >
            <MdLogout size={25} />
          </ListItem>
        </footer>
      </section>
    </main>
  );
}
