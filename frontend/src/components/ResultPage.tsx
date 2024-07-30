import { useContextStoreProvider } from "../context/store";
import axios from "axios";
import Ai from "../assets/Ai.png";
import { FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import ThemeToggleIcon from "../themeToggleIcon";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Skeleton } from "./ui/skeleton";
const ResultPage = () => {
  const {
    setSearchReslt,
    searchReslt,
    searchVal,
    setSearchVal,
    setisloading,
    isLoading,
  } = useContextStoreProvider();
  // const [isReadmore, setIsReadmore] = useState(false);

  const getData = async () => {
    if (!searchVal) {
      return;
    }
    setisloading(true);
    try {
      const res = await axios.post("https://baiduclone.onrender.com/search", {
        searchVal,
      });

      const data = await res?.data;
      setSearchReslt(data);

      setisloading(false);
      setSearchVal(searchVal as string);
    } catch (error) {
      console.log(error);
    }
  };

  if (!searchReslt?.organic_results) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    setSearchVal(searchVal as string);
  }, [searchReslt]);

  return (
    <section className="w-[100%] h-[100%] px-2 md:px-5 md:w-[100%] mx-auto">
      <div className="flex items-center justify-between gap-5 py-5 mx-auto lg:px-20 h-28">
        <div className="flex items-center justify-between w-full p-0  md:w-[70%] rounded-lg bg-muted outline">
          <input
            value={searchVal as string}
            className="flex-1 w-full p-2 mx-auto text-lg bg-transparent outline-none text-foreground placeholder-foreground"
            placeholder="search..."
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
          />
          <p onClick={getData} className="btn">
            {!isLoading && <FiSearch className="text-white " />}
            {isLoading && <span className="loading loading-spinner"></span>}
          </p>
        </div>
        <div className="items-center hidden gap-5 md:flex">
          <div className="avatar placeholder">
            <div className="w-10 rounded-full bg-neutral text-neutral-content">
              <span className="text-xl">D</span>
            </div>
          </div>
          <ThemeToggleIcon />
        </div>
      </div>
      {isLoading && (
        <div className="flex flex-col h-screen gap-4 px-20 pb-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="h-4 w-[150px]" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <>
          {!searchReslt?.organic_results[0]?.title ? (
            <div className="relative h-56 max-w-xl mb-5 lg:ml-20 bg-muted">
              <div className="flex items-center">
                <img src={Ai} alt="Ai" className="object-contain w-[40px]" />
                <p className="flex items-center mx-5 mt-5 mb-8 text-xl font-bold dark:text-white">
                  智能回答
                </p>
              </div>
              <a
                className="mx-5 text-xl text-foreground"
                target="_blank"
                href={searchReslt?.organic_results[0]?.link}
              >
                {!searchReslt?.organic_results[0]?.title &&
                  "抱歉，出了有点问题，请稍后重试"}
              </a>

              <p className="w-32 m-5 mx-auto text-center text-white bg-gray-500 cursor-pointer rounded-3xl">
                重新回答
              </p>

              <div className="absolute bottom-0 flex items-center justify-between w-full">
                <div className="flex p-2 m-2 bg-gray-600 rounded-3xl gap-x-5">
                  <SlLike className="text-xl text-white cursor-pointer " />
                  <SlDislike className="text-xl text-white cursor-pointer " />
                </div>
                <div className="flex p-2 m-2 bg-gray-600 rounded-3xl gap-x-5">
                  <FaShare className="text-xl text-white " />
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
      {/* {searchReslt?.answer_box && searchReslt?.answer_box[0] && (
        <article className="lg:w-[60%] bg-slate-300 text-black shadow-md rounded-md p-5">
          <h1 className="mb-5 text-2xl font-bold hover:underline">
            <a target="_blank" href={searchReslt?.answer_box[0]?.link}>
              {searchReslt?.answer_box[0]?.title}
            </a>
          </h1>
          {isReadmore ? (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet}</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="mt-10 font-bold text-center cursor-pointer"
              >
                Read Less
              </p>
            </div>
          ) : (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet.substring(0, 200)}....</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="mt-10 font-bold text-center cursor-pointer"
              >
                Read More
              </p>
            </div>
          )}
        </article>
      )} */}
      {!isLoading && (
        <div className="flex flex-col justify-between w-full md:px-20 lg:flex-row">
          <article className="  flex gap-10 flex-col w-[100%] lg:w-[60%] mb-10 pb-5">
            {searchReslt &&
              searchReslt?.organic_results?.map((rslt: any) => {
                return (
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        className="object-cover w-6 h-6 rounded-full "
                        src={
                          rslt?.thumbnail
                            ? rslt?.thumbnail
                            : "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${url}&size=128"
                        }
                        alt="image"
                      />
                      <p>{rslt?.displayed_link}</p>
                    </div>
                    <a
                      className="mb-10 text-xl text-blue-300 hover:underline"
                      target="_blank"
                      href={rslt?.link}
                    >
                      {rslt?.title}
                    </a>

                    <p className="mt-3 break-words">
                      <span className="text-sm text-gray-500 ">
                        {rslt?.date}-
                      </span>{" "}
                      {rslt?.snippet}
                    </p>
                  </div>
                );
              })}
          </article>
          <div className="flex flex-col gap-10 ">
            {searchReslt?.related_searches && searchReslt?.related_searches && (
              <div className="flex flex-col gap-3 mt-10">
                <h1 className="text-2xl font-bold ">Related Search</h1>
                {searchReslt?.related_searches?.map((results: any) => {
                  return (
                    <ul>
                      <li className="text-blue-400 underline ">
                        <a target="_blank" href={results?.link}>
                          {results?.query}
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            )}
            {searchReslt?.people_also_search_for &&
              searchReslt?.people_also_search_for && (
                <div className="flex flex-col gap-3 mt-10">
                  <h1 className="text-2xl font-bold ">
                    People also search for
                  </h1>
                  {searchReslt?.people_also_search_for?.map((results: any) => {
                    return (
                      <ul>
                        <li className="text-blue-400 underline ">
                          <a target="_blank" href={results?.link}>
                            {results?.text}
                          </a>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="w-full pb-10 lg:px-20">
          <h1 className="text-2xl font-bold mx-9">People also search for</h1>
          {searchReslt?.top_searches && (
            <div className="grid grid-cols-1 gap-3 p-5 lg:grid-cols-2">
              {searchReslt.top_searches
                .slice(0, 8)
                .map((results: any, index: number) => (
                  <ul key={index} className="lg:w-2/4">
                    <li className="py-5 font-bold text-white rounded-lg bg-muted">
                      <a
                        target="_blank"
                        href={results?.link}
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 px-3"
                      >
                        {results?.text} <FaSearch />
                      </a>
                    </li>
                  </ul>
                ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ResultPage;
