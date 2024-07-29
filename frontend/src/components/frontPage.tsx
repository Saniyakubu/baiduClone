"use client";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContextStoreProvider } from "../context/store";
import { FiSearch } from "react-icons/fi";
import { TbMenuOrder } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
const FrontPage = () => {
  const {
    setSearchReslt,
    searchReslt,
    searchVal,
    setSearchVal,
    isLoading,
    setisloading,
  } = useContextStoreProvider();
  const navigate = useNavigate();

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
      if (searchReslt) {
        navigate("/results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <div className="absolute py-3 top-0 flex justify-between w-[98%] mx-auto ">
        <TbMenuOrder className="p-1 text-3xl text-white rounded-full cursor-pointer bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800" />
        <div>
          <p className="p-2 text-black border rounded-md cursor-pointer">
            Feedback
          </p>
        </div>
      </div>

      <div className="w-10/12 mx-auto md:w-1/2">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-4xl font-bold text-black">Search Engine</h1>
          <p className="text-lg text-center">
            Type anything you want to search for and press Enter.
          </p>
        </div>
        <div className="flex justify-between w-full rounded-lg bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 outline">
          <input
            value={searchVal as string}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
            name="query"
            className="flex-1 p-2 mx-auto text-white placeholder-white bg-transparent outline-none"
            placeholder="Search..."
            type="text"
          />
          <p onClick={getData} className="btn">
            {!isLoading && <FiSearch className="text-white " />}
            {isLoading && <span className="loading loading-spinner"></span>}
          </p>
        </div>
        <ul className="mt-8 ">
          <li
            onClick={() => setSearchVal("怎么学习react")}
            className="flex items-center text-xl text-black cursor-pointer gap-x-2 hover:underline"
          >
            <span className="text-black ">
              <FaArrowRightLong />
            </span>
            怎么学习react
          </li>
          <li
            onClick={() => setSearchVal("怎么学习python")}
            className="flex items-center text-xl text-black cursor-pointer gap-x-2 hover:underline"
          >
            <span className="text-black ">
              <FaArrowRightLong />
            </span>
            怎么学习python
          </li>
          <li
            onClick={() => setSearchVal("咖啡")}
            className="flex items-center text-xl text-black cursor-pointer gap-x-2 hover:underline"
          >
            <span className="text-black ">
              <FaArrowRightLong />
            </span>
            咖啡
          </li>
        </ul>
      </div>
      <div className="absolute px-2 mb-2 py-3 bottom-0 flex justify-between w-[98%] mx-auto ">
        <p>@2024 baidu</p>
        <ul className="flex gap-x-2">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default FrontPage;
