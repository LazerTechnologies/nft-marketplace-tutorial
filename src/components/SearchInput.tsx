import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const style = {
  wrapper: `rounded-lg border border-2 px-1 py-2 focus:shadow-md dark:border-transparent dark:bg-[#333333] flex items-center space-x-3 pl-3`,
  icon: `h-5 w-5 cursor-pointer text-gray-600 transition-all hover:text-black dark:text-gray-300`,
  input: `w-full bg-transparent text-gray-600 outline-none placeholder:text-sm dark:text-gray-300 md:placeholder:text-base`,
};

const SearchInput = () => {
  return (
    <div className={style.wrapper}>
      <MagnifyingGlassIcon className={style.icon} />
      <input
        className={style.input}
        type="text"
        placeholder="Search items, collections, and accounts"
      />
    </div>
  );
};

export default SearchInput;
