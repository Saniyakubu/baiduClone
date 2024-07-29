import { useState } from "react";
import { useContextStoreProvider } from "../context/store";
import axios from "axios";
import Ai from "../assets/Ai.png";
import { FaShare } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
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
      setSearchVal("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-[100%] px-2 md:px-5 md:w-[80%] mx-auto ">
      <div className="flex items-center justify-between mx-auto mt-5">
        <div className="flex justify-between w-11/12 rounded-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 outline md:w-2/3">
          <input
            value={searchVal as string}
            className="w-[95%] md:w-[89%] bg-transparent text-black outline-none rounded-3xl px-2"
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
        <div className="hidden md:block">
          <div className="avatar placeholder">
            <div className="w-10 rounded-full bg-neutral text-neutral-content">
              <span className="text-xl">D</span>
            </div>
          </div>
        </div>
      </div>
      {searchReslt?.organic_results && (
        <div className="relative h-56 max-w-xl mt-20">
          <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <p className="flex items-center mx-5 mb-8 text-xl font-bold text-blue-400">
            <img src={Ai} alt="Ai" className="object-contain w-[40px] " />
            智能回答
          </p>
          <a
            className="mx-5 text-xl text-black"
            target="_blank"
            href={searchReslt?.organic_results[0]?.link}
          >
            {!searchReslt?.organic_results[0]?.title &&
              "抱歉，出了有点问题，请稍后重试"}
          </a>

          <p className="w-32 m-5 mx-auto text-center text-white bg-gray-500 rounded-3xl">
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

      <div className="flex flex-col justify-between w-full lg:flex-row">
        <article className="flex gap-10 flex-col w-[100%] lg:w-[60%] mb-10 pb-5">
          {searchReslt?.organic_results?.map((rslt: any) => {
            return (
              <div>
                <a
                  className="mb-10 text-blue-300"
                  target="_blank"
                  href={rslt?.link}
                >
                  {rslt?.title}
                </a>

                <p className="mt-3 ">{rslt?.snippet}</p>
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
                <h1 className="text-2xl font-bold ">People also search for</h1>
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
    </section>
  );
};

export default ResultPage;
