interface PriorityCheckProps {
  className: string;
  text: string;
  active: boolean;
  onCheckChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PriorityCheck({
  className,
  text,
  active,
  onCheckChange,
}: PriorityCheckProps) {
  return (
    <div className="flex gap-2 items-center">
      <div className={`rounded-full size-2 ${className}`}></div>
      <p className="text-sm text-gray-500">{text}</p>
      <input type="checkbox" checked={active} onChange={onCheckChange} />
    </div>
  );
}
