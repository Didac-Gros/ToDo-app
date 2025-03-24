import { ScreenType } from "../../types/global";

interface ListItemProps {
  children: React.ReactNode;
  title: string;
  activeScreen: ScreenType;
  handleClick: () => void;
}

export function ListItem({
  children,
  title,
  activeScreen,
  handleClick,
}: ListItemProps) {
  return (
    <li
      className={`flex items-center gap-4 w-full px-4 py-3 cursor-pointer transition-all  duration-200 ${
        activeScreen === title
          ? "bg-white text-[#ff6867] rounded-xl"
          : "text-white"
      }`}
      onClick={handleClick}
    >
      {children}
      <p className="text-lg">{title}</p>
    </li>
  );
}
