"use client";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContextStoreProvider } from "../context/store";
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
  console.log("searchReslt: ", searchReslt);
  const getData = async () => {
    setisloading(true);
    const res = await axios.post("https://baiduclone.onrender.com/search", {
      searchVal,
    });

    const data = await res?.data;
    setSearchReslt(data);
    setisloading(false);
    if (searchReslt) {
      navigate("/results");
    }
  };

  return (
    <div className="">
      <div className="mt-52 p-3 flex justify-center rounded-3xl border bg-white w-1/2 mx-auto">
        <input
          value={searchVal as string}
          onChange={(e) => setSearchVal(e.target.value)}
          name="query"
          className="w-[89%] outline-none p-2 mx-auto bg-white text-black"
          placeholder="search..."
          type="text"
        />
        <button onClick={getData} className="btn">
          search
          {isLoading && <span className="loading loading-spinner"></span>}
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
