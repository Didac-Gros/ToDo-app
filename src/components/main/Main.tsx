import { MdGroupAdd } from "react-icons/md";

export function Main() {
  return (
    <section className="py-8 px-16">
      <header className="flex justify-between">
        <h1 className="text-4xl font-semibold">Welcome back, Sundar 👋</h1>
        <div>
          <button className="flex flex-row gap-2 cursor-pointer text-[#ff6867] border-[#ff6867] border-2 px-3 py-1 rounded-lg hover:bg-[#ff6867] hover:text-white transition-all duration-300">
            <MdGroupAdd className="text-xl" />
            <p>Invite</p>
          </button>
        </div>
      </header>
    </section>
  );
}
