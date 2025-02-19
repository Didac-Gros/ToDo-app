interface ListItemProps {
  children: React.ReactNode;
  title: string;
  activeTab: string;
  handleClick: () => void;
}

export function ListItem({
  children,
  title,
  activeTab,
  handleClick,
}: ListItemProps) {
  return (
    <li
      className={`flex items-center gap-4 w-full px-4 py-3 cursor-pointer transition-all  duration-200 ${
        activeTab === title
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
