export function ToggleTheme(themeValue: boolean) {
  if (themeValue) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("dark", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("dark");
  }
}
