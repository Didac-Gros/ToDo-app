import { ListItem } from "./ListItem";
import { MdDashboard } from "react-icons/md";
import { FaExclamation } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiMenuFold2Line } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useState } from "react";

type itemsTab =
  | "Dashboard"
  | "Vital task"
  | "My task"
  | "Task categories"
  | "Settings"
  | "Help"
  | "Logout";

export function Aside() {
  const [activeTab, setActiveTab] = useState<itemsTab>("Dashboard");

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
              activeTab={activeTab}
              handleClick={() => setActiveTab("Dashboard")}
            >
              <MdDashboard size={25} />
            </ListItem>
            <ListItem
              title="Vital task"
              activeTab={activeTab}
              handleClick={() => setActiveTab("Vital task")}
            >
              <FaExclamation size={25} />
            </ListItem>
            <ListItem
              title="My task"
              activeTab={activeTab}
              handleClick={() => setActiveTab("My task")}
            >
              <BiTask size={25} />
            </ListItem>
            <ListItem
              title="Task categories"
              activeTab={activeTab}
              handleClick={() => setActiveTab("Task categories")}
            >
              <RiMenuFold2Line size={25} />
            </ListItem>
            <ListItem
              title="Settings"
              activeTab={activeTab}
              handleClick={() => setActiveTab("Settings")}
            >
              <IoMdSettings size={25} />
            </ListItem>
            <ListItem
              title="Help"
              activeTab={activeTab}
              handleClick={() => setActiveTab("Help")}
            >
              <IoIosHelpCircle size={25} />
            </ListItem>
          </ul>
        </nav>
        <footer className="mt-auto mb-10 px-6">
          <ListItem
            title="Logout"
            activeTab={activeTab}
            handleClick={() => setActiveTab("Logout")}
          >
            <MdLogout size={25} />
          </ListItem>
        </footer>
      </section>
    </main>
  );
}
