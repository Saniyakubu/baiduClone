import React, { createContext, useState, ReactNode, useContext } from "react";

type contextType = {
  themeValue: boolean;
  setThemeValue: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const themeContext = createContext<contextType>({
  themeValue: false,
  isClicked: false,
  setThemeValue: () => {},
  setIsClicked: () => {},
});

type Props = {
  children: ReactNode;
};

export const useContextStoreProvider = () => {
  return useContext(themeContext);
};

const ThemeProvider = ({ children }: Props) => {
  const isDarkModeEnabled = localStorage.getItem("dark") === "dark";
  const [themeValue, setThemeValue] = useState<boolean>(
    isDarkModeEnabled && true
  );
  const [isClicked, setIsClicked] = useState(false);
  const themeColor: contextType = {
    themeValue,
    setThemeValue,
    isClicked,
    setIsClicked,
  };

  return (
    <themeContext.Provider value={themeColor}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
