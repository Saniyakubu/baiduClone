import React, { createContext, useState, ReactNode, useContext } from "react";

type contextType = {
  userAuth: any | null;
  setUserAuth: React.Dispatch<React.SetStateAction<{} | null>>;
  messages: any | [];
  setMessage: React.Dispatch<React.SetStateAction<any | null>>;
  groupMessages: any | [];
  setGroupMessages: React.Dispatch<React.SetStateAction<any | null>>;
  // isUserRegistered: object | null;
  // seiIsUserRegistered: React.Dispatch<React.SetStateAction<object>>;
  themeValue: boolean;
  setThemeValue: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const themeContext = createContext<contextType>({
  messages: [],
  setMessage: () => {},
  groupMessages: [],
  setGroupMessages: () => {},
  userAuth: null,
  setUserAuth: () => {},
  // isUserRegistered: {},
  // seiIsUserRegistered: () => {},
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
  const [userAuth, setUserAuth] = useState<any | null>(
    JSON.parse(localStorage.getItem("user") as string) || null
  );
  const isDarkModeEnabled = localStorage.getItem("dark") === "dark";
  const [themeValue, setThemeValue] = useState<boolean>(
    isDarkModeEnabled && true
  );
  const [isClicked, setIsClicked] = useState(false);
  const [messages, setMessage] = useState([]);
  const [groupMessages, setGroupMessages] = useState([]);
  const themeColor: contextType = {
    userAuth,
    setUserAuth,
    themeValue,
    setThemeValue,
    isClicked,
    setIsClicked,
    messages,
    setMessage,
    groupMessages,
    setGroupMessages,
  };

  return (
    <themeContext.Provider value={themeColor}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
