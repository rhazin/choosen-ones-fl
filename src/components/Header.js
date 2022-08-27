import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [currentNav, setCurrentNav] = useState("");
  const currentPath = useLocation();

  useEffect(() => {
    setCurrentNav(currentPath.pathname);
  }, [currentPath]);

  return (
    <div className="dark:bg-black  dark:text-slate-50 min-h-screen bg-[url('http://localhost:3000/images/co-bg.png')]">
      <header className="md:flex md:items-center md:py-4 md:justify-center md:w-5/6 md:pt-8">
        <picture className="md:mr-auto md:ml-4">
          <source
            className="scale-50 md:scale-100"
            srcSet="images/choosen-ones-dark-logo.png"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="images/choosen-ones-logo.png"
            alt="Choosen ones logo"
            className="scale-50 md:scale-100"
          />
        </picture>
        <nav className="hidden md:block">
          <ul className="flex font-semibold text-2xl">
            <li className="mx-14 ">
              <Link to="/">
                <div className="parent">
                  <span> HOME</span>
                  <div
                    className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                      currentNav === "/" ? "w-1/2" : "w-0"
                    }`}
                  ></div>
                </div>
              </Link>
            </li>
            <li className="mx-14 ">
              <Link to="/utility">
                {" "}
                <div className="parent">
                  <span> UTILITY</span>
                  <div
                    className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                      currentNav === "/utility" ? "w-1/2" : "w-0"
                    }`}
                  ></div>
                </div>
              </Link>
            </li>
            <li className="mx-14 ">
              <Link to="/roadmap">
                {" "}
                <div className="parent">
                  <span> ROADMAP</span>
                  <div
                    className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                      currentNav === "/roadmap" ? "w-1/2" : "w-0"
                    }`}
                  ></div>
                </div>
              </Link>
            </li>
            <li className="mx-14 ">
              <Link to="/team">
                {" "}
                <div className="parent">
                  <span> TEAM</span>
                  <div
                    className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                      currentNav === "/team" ? "w-1/2" : "w-0"
                    }`}
                  ></div>
                </div>
              </Link>
            </li>
            <li className="mx-14 ">
              <Link to="/about">
                {" "}
                <div className="parent">
                  <span> ABOUT</span>
                  <div
                    className={`child rounded transition-all h-1 w-0  bg-red-600 ${
                      currentNav === "/about" ? "w-1/2" : "w-0"
                    }`}
                  ></div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
