/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [padding, setPadding] = useState("30px");
  const [navList, setNavList] = useState(false);

  function handleNavChangeList() {
    setNavList(!navList);
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 10) {
        setPadding("10px");
      } else {
        setPadding("30px");
      }
    });
  }, []);

  return (
    <>
      <nav
        className="bg-nav fixed left-0 right-0 z-50 top-0 transition-all duration-300 "
        style={{ paddingBlock: padding }}
      >
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link className="uppercase text-white text-3xl font-bold" to="/">
              {" "}
              start framework{" "}
            </Link>
          </div>

          <div className="nav-box flex">
            <ul
              className={`md:static md:flex md:items-center md:gap-5 ${
                navList ? "absolute" : "hidden"
              } -bottom-28 md:p-0 p-6 left-0 bg-nav md:bg-transparent space-y-3 md:space-y-0 w-full md:w-auto`}
            >
              <li>
                <NavLink
                  style={{ color: "white" }}
                  className={({ isActive }) =>
                    isActive ? "bg-red-400 px-3 py-1 rounded-md" : ""
                  }
                  to="/about"
                >
                  {" "}
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "white" }}
                  className={({ isActive }) =>
                    isActive ? "bg-red-400 px-3 py-1 rounded-md" : ""
                  }
                  to="/portifolio"
                >
                  {" "}
                  PORTIFOLIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ color: "white" }}
                  className={({ isActive }) =>
                    isActive ? "bg-red-400 px-3 py-1 rounded-md" : ""
                  }
                  to="/contact"
                >
                  {" "}
                  CONTACT
                </NavLink>
              </li>
            </ul>

            <div className="nav-icon md:hidden">
              <i
                onClick={handleNavChangeList}
                className="fa-solid fa-bars text-white cursor-pointer text-3xl"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
