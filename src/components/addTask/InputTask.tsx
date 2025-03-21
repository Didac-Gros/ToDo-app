interface InputTaskProps {
  label: string;
  big?: boolean;
  typeDate?: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorDate?: string;
  error?: boolean;
}

export function InputTask({
  label,
  big,
  typeDate,
  onInputChange,
  errorDate,
  error,
}: InputTaskProps) {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <div className={`relative`}>
        <input
          type={typeDate ? "date" : "text"}
          className={`border-1  rounded-md p-2 outline-[#ff6867]/70 placeholder: ${
            big ? "h-50 w-full" : "h-8 w-4/6"
          } ${error ? "border-red-500" : "border-gray-400"}`}
          placeholder={big ? "Start writing here..." : ""}
          onChange={onInputChange}
        />
        <p className="text-xs text-red-500">{errorDate}</p>
        <p className="text-xs text-red-500">{error ? "Emplena el camp" : ""}</p>

      </div>
    </div>
  );
}
