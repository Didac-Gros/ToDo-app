import { SearchIcon } from "../../icons/SearchIcon";
import { HeaderButton } from "./HeaderButton";

export function SearchBar() {
  return (
    <form className="max-w-md mx-auto">
      <div className="flex">
        <input
          type="search"
          id="default-search"
          className="w-2xl outline-[#ff6867] border-none p-2 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Search your tasks here.."
          required
        />

        <HeaderButton>
          <SearchIcon></SearchIcon>
        </HeaderButton>
      </div>
    </form>
  );
}
