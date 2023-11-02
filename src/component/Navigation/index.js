import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";
import IconMapping from "./IconMapping";

const Navigation = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [theme, setTheme] = useState();
  console.log(user, "user");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  const handleTheme = (toTheme) => {
    localStorage.theme = toTheme;
    toTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    setTheme(toTheme);
  };

  return (
    <div className="xl:w-[250px] lg:x-[85px] lg:h-screen ml-3 mr-3 flex flex-col max-md:hidden overflow-y-scroll no-scrollbar dark:bg-slate-950">
      <div className="p-3">
        <svg
          className="h-10 w-10 dark:fill-white"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 112.77 122.88"
          xmlSpace="preserve"
        >
          <g>
            <path d="M64.44,61.11c1.79,0,3.12-1.45,3.12-3.12c0-1.78-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12 c0,1.78,1.45,3.12,3.12,3.12H64.44L64.44,61.11L64.44,61.11L64.44,61.11z M77.45,19.73l18.1-19.14c0.69-0.58,1.39-0.81,2.2-0.35 l14.56,14.1c0.58,0.69,0.69,1.5-0.12,2.31L93.75,36.14L77.45,19.73L77.45,19.73L77.45,19.73L77.45,19.73z M87.74,42.27l-18.66,3.86 l2.36-20.28L87.74,42.27L87.74,42.27z M19.14,13.09h41.73l-3.05,6.45H19.14c-3.48,0-6.65,1.43-8.96,3.73s-3.73,5.46-3.73,8.96 v45.74c0,3.48,1.43,6.66,3.73,8.96c2.3,2.3,5.47,3.73,8.96,3.73h3.72v0.01l0.21,0.01c1.77,0.12,3.12,1.66,2.99,3.43l-1.26,18.1 L48.78,97.7c0.58-0.58,1.38-0.93,2.27-0.93h37.32c3.48,0,6.65-1.42,8.96-3.73c2.3-2.3,3.73-5.48,3.73-8.96V50.45h6.68v42.69 c0.35,9.63-3.58,15.04-19.43,15.7l-32.25-0.74l-32.73,13.87l-0.16,0.13c-1.35,1.16-3.38,1-4.54-0.36c-0.57-0.67-0.82-1.49-0.77-2.3 l1.55-22.34h-0.26c-5.26,0-10.05-2.15-13.52-5.62C2.15,88.03,0,83.24,0,77.98V32.23c0-5.26,2.15-10.05,5.62-13.52 C9.08,15.24,13.87,13.09,19.14,13.09L19.14,13.09L19.14,13.09z M79.69,78.42c1.79,0,3.12-1.45,3.12-3.12 c0-1.79-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12c0,1.78,1.45,3.12,3.12,3.12H79.69L79.69,78.42L79.69,78.42 L79.69,78.42z M50.39,43.81c1.78,0,3.12-1.45,3.12-3.12c0-1.67-1.45-3.12-3.12-3.12H24.75c-1.78,0-3.12,1.45-3.12,3.12 c0,1.78,1.45,3.12,3.12,3.12H50.39L50.39,43.81L50.39,43.81L50.39,43.81z" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col justify-between flex-1 dark:text-white">
        <div>
          <IconMapping name={"Home"} href={"/posts"} />
          <IconMapping name={"Find"} href={"/find"} />
          <IconMapping name={"Notifications"} href={"/notifications"} />
          <IconMapping name={"Bookmarks"} href={"/bookmarks"} />
          <IconMapping name={"Profile"} href={`/${user?.user_name}`} />
          <div className="p-3 mt-2 mr-10 bg-sky-500 rounded-full text-center font-bold text-white cursor-pointer hover:bg-blue-500 md:max-xl:hidden">
            Post
          </div>
        </div>
        {theme === "light" && (
          <button
            type="button"
            className="bg-yellow-500"
            onClick={() => handleTheme("dark")}
          >
            Dark Theme
          </button>
        )}
        {theme === "dark" && (
          <button
            type="button"
            className="bg-yellow-500"
            onClick={() => handleTheme("light")}
          >
            Light Theme
          </button>
        )}
        <div className="p-3 pb-6 flex justify-between items-center md:max-xl:hidden">
          <div className="flex gap-2">
            <img
              src={user?.profile_image_url}
              alt="profile image"
              width="40"
              height="40"
              className="rounded-full"
            />
            <div>
              <p className="font-bold text-[15px]">{user?.full_name}</p>
              <p className="font-light text-[12px]">@{user?.user_name}</p>
            </div>
          </div>
          <div className="font-bold text-red-400 cursor-pointer hover:text-red-500">
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
