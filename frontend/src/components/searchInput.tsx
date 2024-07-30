import { FiSearch } from "react-icons/fi";
import { useContextStoreProvider } from "../context/store";
import ThemeToggleIcon from "../themeToggleIcon";
import Ai from "../assets/Ai.png";
type searchProps = {
  getData: () => Promise<void>;
};

const SearchInput = ({ getData }: searchProps) => {
  const { searchVal, setSearchVal, isLoading } = useContextStoreProvider();

  return (
    <div className="items-center justify-between w-full px-5 py-3 lg:flex bg-background">
      <div className="flex items-center justify-between w-full mb-5 lg:hidden">
        <img className="w-10" src={Ai} />
        <div className="flex items-center gap-5">
          <ThemeToggleIcon />
          <div className="avatar placeholder">
            <div className="w-10 rounded-full bg-foreground ">
              <span className="text-xl text-background">D</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 gap-3">
        <img className="hidden w-10 lg:block" src={Ai} />
        <div className="flex items-center justify-between flex-1 w-full max-w-3xl gap-3 rounded-3xl bg-muted outline">
          <input
            value={searchVal as string}
            className="w-full px-2 mx-auto text-lg bg-transparent outline-none text-accent-foreground placeholder-primary"
            placeholder="search..."
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
          />
          <p
            onClick={getData}
            className="p-3 rounded-full cursor-pointer bg-secondary-foreground"
          >
            {!isLoading && (
              <FiSearch className="text-xl font-bold text-white dark:text-black " />
            )}
            {isLoading && (
              <span className="loading loading-spinner text-background"></span>
            )}
          </p>
        </div>
      </div>
      <div className="items-center hidden gap-5 lg:flex">
        <div className="avatar placeholder">
          <div className="w-10 rounded-full bg-foreground ">
            <span className="text-xl text-background">D</span>
          </div>
        </div>
        <ThemeToggleIcon />
      </div>
    </div>
  );
};

export default SearchInput;
