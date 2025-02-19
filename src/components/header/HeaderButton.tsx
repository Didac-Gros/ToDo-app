interface HeaderButtonProps {
    children: React.ReactNode;
}

export function HeaderButton({children}: HeaderButtonProps) {
  return (
    <button
      type="submit"
      className="text-white bg-[#ff6867] hover:bg-[#f7917f] cursor-pointer focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1 "
    >
      {children}
    </button>
  );
}
