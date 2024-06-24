import React, { createContext, useState, ReactNode, useContext } from "react";
import BaiduSearchResult from "../lib/types";

type contextType = {
  searchReslt: BaiduSearchResult | {};
  setSearchReslt: React.Dispatch<React.SetStateAction<BaiduSearchResult | {}>>;
  searchVal: string | null;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setisloading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const stateContext = createContext<contextType>({
  searchVal: "",
  setSearchVal: () => "",
  searchReslt: {},
  setSearchReslt: () => {},
  error: "",
  setError: () => "",
  isLoading: false,
  setisloading: () => {},
});

type Props = {
  children: ReactNode;
};

export const useContextStoreProvider = () => {
  return useContext(stateContext);
};

const StateProvider = ({ children }: Props) => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [searchReslt, setSearchReslt] = useState<BaiduSearchResult | {}>({});
  const [isLoading, setisloading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const states: contextType = {
    searchVal,
    setSearchVal,
    searchReslt,
    setSearchReslt,
    error,
    setError,
    isLoading,
    setisloading,
  };

  return (
    <stateContext.Provider value={states}>{children}</stateContext.Provider>
  );
};

export default StateProvider;
