import { MdGroupAdd } from "react-icons/md";
import { FriendImage } from "./FriendImage";

export function MainHeader() {
  const avatars = Array.from(
    { length: 4 },
    (_, i) => `https://api.dicebear.com/6.x/pixel-art/svg?seed=user${i + 1}`
  );
  const avatar = `https://api.dicebear.com/6.x/pixel-art/svg?seed=user12`;
  return (
    <header className="flex justify-between">
      <h1 className="text-4xl font-semibold">Welcome back, Sundar 👋</h1>
      <div className="flex flex-row gap-2 mt-8">
        {avatars.map((avatar) => (
          <div className="bg-black/70 rounded-lg p-1">
            <FriendImage image={avatar}></FriendImage>
          </div>
        ))}
        <div className="relative bg-black/70 rounded-lg p-1 ">
          <FriendImage image={avatar} />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
            <p>+4</p>
          </div>
        </div>

        <button className="flex flex-row gap-2 items-center cursor-pointer text-[#ff6867] border-[#ff6867] border-2 px-3 py-1 rounded-lg hover:bg-[#ff6867] hover:text-white transition-all duration-300">
          <MdGroupAdd className="text-xl" />
          <p>Invite</p>
        </button>
      </div>
    </header>
  );
}
