import { BellIcon } from "../../icons/BellIcon";
import { CalendarIcon } from "../../icons/CalendarIcon";
import { HeaderButton } from "./HeaderButton";
import { SearchBar } from "./SearchBar";

export function Header() {
  const today = new Date();

  // Formatear día de la semana
  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  // Formatear fecha (dd/mm/yyyy)
  const formattedDate = today.toLocaleDateString("en-GB");
  return (
    <div className="flex px-20 w-full">
      <h1 className="text-3xl font-semibold">
        <span className="text-[#ff6867]">Dash</span>board
      </h1>

      <SearchBar></SearchBar>

      <div className="flex gap-x-2">
        <HeaderButton>
          <BellIcon></BellIcon>
        </HeaderButton>

        <HeaderButton>
          <CalendarIcon></CalendarIcon>
        </HeaderButton>
      </div>

      <div className="flex flex-col pl-8">
        <strong>{dayOfWeek}</strong>
        <p className="text-blue-400">{formattedDate}</p>
      </div>
    </div>
  );
}
