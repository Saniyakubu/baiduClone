import { useContextStoreProvider } from "../context/store";
import axios from "axios";
import { useEffect } from "react";
import SearchInput from "./searchInput";
import Loading from "./Loading";
import Content from "./content";
import Topsearch from "./Topsearch";

const ResultPage = () => {
  const { setSearchReslt, searchVal, setSearchVal, setisloading, isLoading } =
    useContextStoreProvider();
  // const [isReadmore, setIsReadmore] = useState(false);
  console.log(isLoading);
  const getData = async () => {
    setisloading(true);
    if (!searchVal) {
      return;
    }
    // setisloading(true);
    try {
      const res = await axios.post("http://localhost:2000/search", {
        searchVal,
      });

      const data = await res?.data;
      setSearchReslt(data);
      setisloading(false);
      setSearchVal(searchVal as string);
    } catch (error) {
      setisloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setisloading(true);
    getData();
    setSearchVal(searchVal as string);
  }, []);

  return (
    <section className="w-[100%] bg-background h-full md:w-[100%] mx-auto">
      <SearchInput getData={getData} />
      {isLoading && <Loading />}
      {!isLoading && <Content />}
      {!isLoading && <Topsearch />}
    </section>
  );
};

export default ResultPage;
