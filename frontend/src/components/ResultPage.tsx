import { useState } from "react";
import { useContextStoreProvider } from "../context/store";
import axios from "axios";

const ResultPage = () => {
  const {
    setSearchReslt,
    searchReslt,
    searchVal,
    setSearchVal,
    setisloading,
    isLoading,
  } = useContextStoreProvider();
  const [isReadmore, setIsReadmore] = useState(false);
  console.log(searchReslt);

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
      <div className="flex justify-between  items-center mx-auto mt-5">
        <div className="flex w-[98%] justify-between items-center rounded-l-3xl rounded-r-2xl bg-white md:w-[40%]">
          <input
            value={searchVal as string}
            className="w-[95%] md:w-[89%] bg-transparent text-black outline-none rounded-3xl px-2"
            placeholder="search..."
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button onClick={getData} className="btn">
            search
            {isLoading && <span className="loading loading-spinner"></span>}
          </button>
        </div>
        <div className="hidden md:block">
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content w-10 rounded-full">
              <span className="text-xl">D</span>
            </div>
          </div>
        </div>
      </div>
      {searchReslt?.answer_box && searchReslt?.answer_box[0] && (
        <article className="mt-10 lg:w-[60%] bg-slate-300 text-black shadow-md rounded-md p-5">
          <h1 className=" text-2xl font-bold mb-5 hover:underline">
            <a target="_blank" href={searchReslt?.answer_box[0]?.link}>
              {searchReslt?.answer_box[0]?.title}
            </a>
          </h1>
          {isReadmore ? (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet}</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="cursor-pointer font-bold text-center mt-10"
              >
                Read Less
              </p>
            </div>
          ) : (
            <div>
              <p>{searchReslt?.answer_box[0]?.snippet.substring(0, 200)}....</p>
              <p
                onClick={() => setIsReadmore(!isReadmore)}
                className="cursor-pointer font-bold text-center mt-10"
              >
                Read More
              </p>
            </div>
          )}
        </article>
      )}

      <div className="flex mt-20 w-full flex-col lg:flex-row justify-between">
        <article className="flex mt-10 gap-10 flex-col w-[100%] lg:w-[60%] mb-10 pb-5">
          {searchReslt?.organic_results?.map((rslt: any) => {
            return (
              <div>
                <a
                  className="text-blue-300 mb-10"
                  target="_blank"
                  href={rslt?.link}
                >
                  {rslt?.title}
                </a>

                <p className=" mt-3">{rslt?.snippet}</p>
              </div>
            );
          })}
        </article>

        <div className=" flex flex-col gap-10">
          {searchReslt?.related_searches && searchReslt?.related_searches && (
            <div className="mt-10 flex flex-col gap-3">
              <h1 className=" text-2xl font-bold">Related Search</h1>
              {searchReslt?.related_searches?.map((results: any) => {
                return (
                  <ul>
                    <li className=" underline text-blue-400">
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
              <div className="mt-10 flex flex-col gap-3">
                <h1 className=" text-2xl font-bold">People also search for</h1>
                {searchReslt?.people_also_search_for?.map((results: any) => {
                  return (
                    <ul>
                      <li className=" underline text-blue-400">
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
