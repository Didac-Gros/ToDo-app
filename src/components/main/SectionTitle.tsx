interface SectionTitleProps {
  title: string;
  icon: React.ReactNode;
}

export function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {icon}
      <h2 className="text-[#ff6867] font-semibold text-lg">{title}</h2>
    </div>
  );
}
